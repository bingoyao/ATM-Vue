<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card v-if="hasLoan" style="max-width:80%;min-width:700px;height:550px;"></el-card>
    <el-card
      v-else-if="step===0"
      style="max-width:80%;min-width:700px;height:550px;text-align:center;"
    >
      <div slot="header">贷款申请单</div>
      <div style="padding:20px;">你的信用{{ creditsDescript }}</div>
      <div style="padding:20px;">
        <el-row :gutter="5">
          <el-col :span="8">
            <div style="width:200px;text-align:right;line-height:40px;">选择贷款类型：</div>
          </el-col>
          <el-col :span="16">
            <el-select v-model="loanType" placeholder="请选择">
              <el-option
                v-for="item in loanTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div style="padding:20px;">
        <el-row :gutter="5">
          <el-col :span="8">
            <div style="width:200px;text-align:right;line-height:40px;">选择贷款金额：</div>
          </el-col>
          <el-col :span="16">
            <el-select v-model="loanAmount" placeholder="请选择">
              <el-option
                v-for="item in loanAmountOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div
        style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
      >
        <el-button @click.native="goBack" type="danger">取消</el-button>

        <el-button @click.native="performTransaction" type="primary">确定</el-button>
      </div>
    </el-card>
    <el-card v-else-if="step===1" style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header" style="text-align:center;">交易成功</div>
      <receipt :receiptInfo="receipt"></receipt>
      <div style="display:flex;padding:20px;justify-content:space-between;">
        <el-button type="primary" @click.native="goBack">返回</el-button>
        <el-button type="danger" @click.native="ejectCard">退卡</el-button>
      </div>
    </el-card>
  </el-container>
</template>
<script>
import Receipt from "@/components/Receipt";
import TimeHelper from "@/utilities/TimeHelper";

export default {
  data() {
    return {
      hasLoan: false,
      step: 0,
      loanType: "",
      loanAmount: "",
      amount: "",
      receipt: [],
      loanTypeOptions: [
        {
          value: "SHORT TERM LOAN-12",
          label: "短期贷款-12个月"
        },
        {
          value: "SHORT TERM LOAN-6",
          label: "短期贷款-6个月"
        }
      ],
      loanAmountOptions: [
        {
          value: "2000",
          label: "2,000"
        },
        {
          value: "5000",
          label: "5,000"
        },
        {
          value: "10000",
          label: "10,000"
        },
        {
          value: "20000",
          label: "20,000"
        }
      ]
    };
  },
  computed: {
    creditsDescript() {
      let c = this.$store.state.account.credits;
      if (c >= 90) {
        return "优秀";
      } else if (c >= 80) {
        return "良好";
      } else if (c >= 65) {
        return "一般";
      } else {
        return "不合格";
      }
    }
  },
  components: {
    Receipt
  },
  methods: {
    goBack() {
      this.$router.replace({ name: "transaction-select" });
    },
    performTransaction() {
      this.receipt = [];
      let number = new String(this.$store.state.account.number);

      this.$store.commit("loan", {
        loanAmount: new String(this.loanAmount),
        loanTimeStr: TimeHelper.timeStr()
      });

      let result = [
        {
          name: "账号",
          value: number.slice(0, 10) + "*".repeat(6) + number.slice(16)
        },
        {
          name: "交易类型",
          value: "贷款"
        },
        {
          name: "金额",
          value: this.loanAmount
        },
        {
          name: "余额",
          value: this.$store.state.account.balances
        },
        {
          name: "交易时间",
          value: TimeHelper.timeStr()
        },
        {
          name: "终端编号",
          value: new String(this.$store.state.atm.number)
        }
      ];

      result.forEach(resultItem => {
        this.receipt.push(resultItem);
      });

      this.$store.commit("pushSystemLog", {
        time: result[4].value,
        accountNumber: number,
        transactionType: "LOAN",
        amount: this.amount,
        transTo: "-"
      });

      this.step = 1;
    },
    ejectCard() {
      this.$store.dispatch("ejectCard");
      this.$message.info("退出成功");
      this.$router.replace({ name: "idle" });
    }
  }
};
</script>
<style scoped>
</style>