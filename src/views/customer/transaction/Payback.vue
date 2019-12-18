<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    

    <el-card
      v-if="!noLoan && step==1"
      style="max-width:80%;min-width:700px;height:550px;text-align:center;"
    >
      <div slot="header">
        <h4>当前贷款信息：</h4>
        <el-row>
          <el-col :span="12">贷款金额</el-col>
          <el-col :span="12">{{loanAmount}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="12">最后还款时间</el-col>
          <el-col :span="12">{{loanTime}}</el-col>
        </el-row>
      </div>
      <div style="display:flex;">
        <div>
          <el-button @click.native="goBack">返回</el-button>
        </div>
        <div>
          <el-button @click.native="performTransaction">
            立即还款
            <el-tooltip content="只能使用账户余额还款">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </el-button>
        </div>
      </div>
    </el-card>
    <el-card v-else-if="step==2" style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header" style="text-align:center;">交易成功</div>
      <receipt :receiptInfo="receipt"></receipt>
      <div style="display:flex;padding:20px;justify-content:space-between;">
        <el-button type="primary" @click.native="goBack">返回</el-button>
        <el-button type="danger" @click.native="ejectCard">退卡</el-button>
      </div>
    </el-card>

    <el-card v-else-if="noLoan" style="max-width:80%;min-width:700px;height:550px;text-align:center;">
      <div>暂无贷款信息</div>
      <div>
        <el-button @click.native="goBack">返回</el-button>
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
      step: 1,
      receipt: []
    };
  },
  components: {
    Receipt
  },
  computed: {
    noLoan() {
      return this.$store.state.account.loan === 0;
    },
    loanAmount() {
      return this.$store.state.account.loan;
    },
    loanTime() {
      return this.$store.state.account.loanTime;
    }
  },
  methods: {
    performTransaction() {
      let number = this.$store.state.account.number;
      this.$store.commit("payback", this.loanAmount);
      let result = [
        {
          name: "账号",
          value: number.slice(0, 10) + "*".repeat(6) + number.slice(16)
        },
        {
          name: "交易类型",
          value: "还款"
        },
        {
          name: "金额",
          value: new String(this.loanAmount)
        },
        {
          name: "余额",
          value: new String(this.$store.state.account.balances)
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
        transactionType: "WITHDRAWAL",
        amount: new String(this.amount),
        transTo: "-"
      });

      this.step = 2;
    },
    goBack() {
      this.$router.replace({ name: "transaction-select" });
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