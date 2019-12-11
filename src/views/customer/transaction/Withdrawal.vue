<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <!-- 输入金额 接口：键盘 -->
    <el-card v-if="step==0" style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">输入金额：</div>
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
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;margin-bottom:20px;">快速输入：</div>
        </el-col>
        <el-col :span="16">
          <div>
            <el-button @click.native="amount=100">100</el-button>
            <el-button @click.native="amount=200">200</el-button>
            <el-button @click.native="amount=500">500</el-button>
            <el-button @click.native="amount=1000">1000</el-button>
          </div>
        </el-col>
      </el-row>

      <keyboard @press="keypress"></keyboard>

      <div
        style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
      >
        <el-button @click.native="goBack" type="danger">取消</el-button>

        <el-button @click.native="deleteNum" type="warning">删除</el-button>

        <el-button @click.native="performTransaction" type="primary">确定</el-button>
      </div>
    </el-card>

    <!-- 领取现金 -->
    <el-card v-else-if="step==1" style="max-width:80%;min-width:700px;height:550px;">
      <div style="padding:50px;margin:0 auto;width:80%;text-align:center;">
        <el-image :src="moneyUrl"></el-image>
      </div>
      <div style="display:flex;justify-content:center;">
        <el-tooltip placement="bottom">
          <div slot="content">点击领取现金</div>
          <el-button type="success" outlined @click.native="takeCash">取钱</el-button>
        </el-tooltip>
      </div>
    </el-card>

    <!-- 交易完成， -->
    <el-card v-else-if="step==2" style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header" style="text-align:center;">交易成功</div>
      <receipt :receiptInfo="receipt"></receipt>
      <div style="display:flex;padding:20px;justify-content:space-between;">
        <el-button type="primary" @click.native="goBack">返回</el-button>
        <el-button type="danger" @click.native="ejectCard">退卡</el-button>
      </div>
    </el-card>

    <el-card v-else style="max-width:80%;min-width:700px;height:550px;">system error</el-card>
  </el-container>
</template>
<script>
/**
 * 取款操作界面
 */

import Keyboard from "@/components/Keyboard";
import Receipt from "@/components/Receipt";
import LogHelper from "@/utilities/LogHelper";

export default {
  data() {
    return {
      // 正在进行的步骤
      step: 0,
      amount: "",
      receipt: [],
      moneyUrl:
        "https://img.ivsky.com/img/tupian/pre/201809/24/meiyuan_zhibi-012.jpg"
    };
  },
  components: {
    Keyboard,
    Receipt
  },
  computed: {
    withdrawalLimit() {
      return 5000;
    }
  },
  methods: {
    /**
     * 处理键盘输入
     * @param {string} num 用户输入的键值
     */
    keypress(num) {
      if (this.amount == "" && num === "0") return;
      let newAmount = this.amount + num;
      if (Number.parseInt(newAmount) > this.withdrawalLimit) {
        this.$message.error({
          message: "取款金额超过限额",
          duration: 3000,
          center: true
        });
      } else {
        this.amount += num;
      }
    },

    /**
     * 客户点击删除按键
     */
    deleteNum() {
      if (this.amount != "") {
        let oldVal = new String(this.amount);
        this.amount = oldVal.substring(0, oldVal.length - 1);
      }
    },
    /**
     * 执行取款事务
     */
    performTransaction() {
      let a = new String(this.amount);
      if (!a.endsWith("00")) {
        this.$message.error("请输入100的整数倍");
      } else {
        let accountNumber = new String(this.$store.state.account.number);

        this.receipt = [];
        let logInfo = LogHelper.log({
          accountNumber,
          transactionType: "WITHDRAWAL",
          amount: a,
          transTo: ''
        });
        this.$store.commit('reduceCash',a);
        this.$store.commit('reduceBalances',a);
        this.$store.commit("pushSystemLog", logInfo);
        for (let receiptItemName in logInfo) {
          if (logInfo.hasOwnProperty(receiptItemName)) {

            this.receipt.push({
              name: receiptItemName,
              value: logInfo[receiptItemName]
            });
          }
        }
        this.step = 1;
      }
    },
    /**
     * 客户取出钞票，转至票据打印页
     */
    takeCash() {
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