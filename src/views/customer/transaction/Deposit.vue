<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card v-if="step==0" style="max-width:80%;min-width:700px;height:550px;">
      <div style="position:fixed;width:200px;top:40%;left:40%;font-size:15px;">
        <el-tooltip placement="top" content="拖动现金文件至此处或点击选择现金文件">
          <el-upload drag action :before-upload="readMoney">请放入现金</el-upload>
        </el-tooltip>
      </div>
      <div style="display:flex;padding:20px;justify-content:space-between;">
        <el-button type="primary" @click.native="goBack">取消</el-button>
      </div>
    </el-card>
    <el-card v-else-if="step==1" style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">存款金额：</div>
        </el-col>
        <el-col :span="16">
          <div style="width:200px;text-align:left;line-height:40px;padding-left:30px;">{{amount}}</div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div style="display:flex;justify-content:space-around;">
        <el-button type="primary" @click.native="step=0;">继续放钞</el-button>
        <el-button type="success" @click.native="performTransaction">确定</el-button>
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
  </el-container>
</template>
<script>
import Receipt from "@/components/Receipt";
import TimeHelper from "@/utilities/TimeHelper";

export default {
  data() {
    return {
      step: 0,
      amount: 0,
      receipt: []
    };
  },
  components: {
    Receipt
  },
  methods: {
    /**
     * 获取钞票信息
     * @param {file} file 钞票文件
     */
    readMoney(file) {
      let reader = new FileReader();

      new Promise((resolve, reject) => {
        reader.readAsText(file);

        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
      })
        .then(res => {
          let money = JSON.parse(res);
          if (isNaN(money.value)) {
            throw new Error(`无效的钞票！`);
          }
          this.amount += money.value;

          this.step = 1;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
      return false;
    },
    /**
     * 执行存钱事务
     */
    performTransaction() {
      let a = new String(this.amount);
      this.receipt = [];
      let number = new String(this.$store.state.account.number);

      this.$store.commit("increaseCash", a);
      this.$store.commit("increaseBalances", a);
      let result = [
        {
          name: "账号",
          value: number.slice(0, 10) + "*".repeat(6) + number.slice(16)
        },
        {
          name: "交易类型",
          value: "存款"
        },
        {
          name: "金额",
          value: a
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
        amount: this.amount,
        accountNumber: number.slice(0, 10) + "*".repeat(6) + number.slice(16),
        transactionType: "DEPOSIT"
      });

      this.step = 2;
    },
    /**
     * 返回事务选择页面
     */
    goBack() {
      this.$router.replace({ name: "transaction-select" });
    },
    /**
     * 退卡
     */
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