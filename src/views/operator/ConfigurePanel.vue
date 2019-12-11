<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">设置ATM机可取现金额：</div>
        </el-col>
        <el-col :span="8">
          <el-input
            prefix-icon="el-icon-dollar"
            v-model="amount"
            style="width:200px;text-align:center;"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <div style="width:200px;text-align:left;line-height:40px;">当前剩余:${{cashLeft}}</div>
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
        <el-button @click.native="initATM" type="primary">确定</el-button>
        <el-button @click.native="dontInit" type="warning">跳过</el-button>
      </div>
    </el-card>
  </el-container>
</template>
<script>
/**
 * ATM配置界面，设置可取现金额
 */
import Keyboard from "@/components/Keyboard";

export default {
  components: {
    Keyboard
  },
  data() {
    return {
      amount: ""
    };
  },
  computed:{
    cashLeft(){
      return this.$store.state.atm.cash;
    }
  },
  methods: {
    keypress(num) {
      if (this.amount == "" && num === "0") return;
      this.amount += num;
    },
    /**
     * 设置ATM可取现金额
     */
    initATM() {
      let val = new String(this.amount);
      if (val.endsWith("00")) {
        this.$store.commit('initATMCash', +this.amount);
        this.$router.replace({ name: "idle" });
      } else {
        this.$message.error("请输入100的整数倍");
      }
    },
    /**
     * 不设置初始金额，直接开机
     */
    dontInit(){
        this.$router.replace({ name: "idle" });
    }
  }
};
</script>
<style scoped>
</style>