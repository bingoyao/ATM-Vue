<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card v-if="step===0" style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">输入收款账户：</div>
        </el-col>
        <el-col :span="16">
          <el-input
            prefix-icon="el-icon-dollar"
            v-model="transTo"
            style="width:250px;text-align:center;"
          ></el-input>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <keyboard @press="keypress('transTo',$event)"></keyboard>
      <div
        style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
      >
        <el-button @click.native="goBack" type="danger">取消</el-button>
        <el-button @click.native="deleteNum('transTo')" type="warning">删除</el-button>
        <el-button @click.native="finishTransTo" type="primary">确定</el-button>
      </div>
    </el-card>

    <el-card v-if="step===1" style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">输入转账金额：</div>
        </el-col>
        <el-col :span="16">
          <el-input
            prefix-icon="el-icon-dollar"
            v-model="amount"
            style="width:250px;text-align:center;"
          ></el-input>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <keyboard @press="keypress('amount',$event)"></keyboard>
      <div
        style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
      >
        <el-button @click.native="goBack" type="danger">取消</el-button>
        <el-button @click.native="deleteNum('amount')" type="warning">删除</el-button>
        <el-button @click.native="performTransaction" type="primary">确定</el-button>
      </div>
    </el-card>

    <el-card v-if="step===2" style="max-width:80%;min-width:700px;height:550px;">
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
import Keyboard from "@/components/Keyboard";
import Receipt from "@/components/Receipt";

export default {
  data() {
    return {
      step: 0,
      transTo: "",
      amount: "",
      receipt: []
    };
  },
  components: {
    Keyboard,
    Receipt
  },
  computed: {},
  methods: {
    /**
     * 处理键盘输入，账号不足19位时允许继续输入
     */
    keypress(type, num) {
      if (type === "transTo") {
        let oldVal = new String(this.transTo);
        if (oldVal.length === 19) return;
        this.transTo = oldVal + num;
      } else if (type === "amount") {
        let oldVal = new String(this.amount);
        this.amount = oldVal + num;
      }
    },
    /**
     * 处理删除，输入账号超过0位时允许退格
     */
    deleteNum(type) {
      if (type === "transTo") {
        let oldVal = new String(this.transTo);
        if (oldVal.length === 0) return;
        this.transTo = oldVal.substring(0, oldVal.length - 1);
      } else if (type === "amount") {
        let oldVal = new String(this.amount);
        if (oldVal.length === 0) return;
        this.amount = oldVal.substring(0, oldVal.length - 1);
      }
    },
    finishTransTo() {
      let to = new String(this.transTo);
      if (to.length !== 19) {
        this.$message.error("请输入19位银行账号");
      } else {
        this.step = 1;
      }
    },
    /**
     * 执行转账事务
     */
    performTransaction() {
      let to = new String(this.transTo);
      if (to.length !== 19) {
        this.$message.error("请输入19位银行卡账号");
      } else {
        this.receipt = [];
        let a = new String(this.amount);
        let now = new Date();
        let accountNumber = new String(this.$store.state.account.number);
        let timeStr = `${now.getFullYear()}-${now.getMonth() +
          1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        let receiptItems = {
          "Trans Type": "TRANSFER",
          "Account No":
            accountNumber.slice(0, 10) + "******" + accountNumber.slice(16),
          "Trans To":new String(this.transTo),
          Amount: "$" + a,
          Fee: 0,
          "Serial No.": "05447",
          Terminal: "90908",
          "Data and Time": timeStr
        };
        for (let receiptItemName in receiptItems) {
          if (receiptItems.hasOwnProperty(receiptItemName)) {
            this.receipt.push({
              name: receiptItemName,
              value: receiptItems[receiptItemName]
            });
          }
        }
        this.step = 2;
      }
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