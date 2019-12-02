<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card style="max-width:80%;min-width:700px;height:550px;">
      <el-row :gutter="5">
        <el-col :span="8">
          <div style="width:200px;text-align:right;line-height:40px;">输入密码：</div>
        </el-col>
        <el-col :span="16">
          <el-input
            type="password"
            prefix-icon="el-icon-dollar"
            v-model="pin"
            maxlength="6"
            minlength="6"
            style="width:250px;text-align:center;"
          ></el-input>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <keyboard @press="keypress"></keyboard>

      <div
        style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
      >
        <el-button @click.native="ejectCard" type="danger">退卡</el-button>

        <el-button @click.native="deleteNum" type="warning">删除</el-button>

        <el-button @click.native="confirmPin" type="primary">确定</el-button>
      </div>
    </el-card>
  </el-container>
</template>
<script>
/**
 *
 */
import Keyboard from "@/components/Keyboard";

export default {
  data() {
    return {
      pinInputTimes: 0,
      pin: ''
    };
  },
  components: {
    Keyboard
  },
  computed: {
    truePin(){
      return this.$store.state.account.pin;
    }
  },
  methods: {
    ejectCard() {
      this.$store.dispatch("ejectCard");
      this.$router.replace({ name: "idle" });
    },
    deleteNum() {
      let p = new String(this.pin);
      if(p.length>0){
        this.pin = p.substring(0,p.length-1);
      }
    },
    confirmPin() {
      let p = new String(this.pin);
      let invalidAccount = this.$store.state.invalidAccount;
      let account = this.$store.state.account.number;
      let invalid = invalidAccount.includes(account);
      // 如果本次会话已输错3次以上或之前已经被锁定，不检查，直接退卡
      if (this.pinInputTimes >= 3 || invalid) {
        this.$message.error("已连续多次输错密码");
        this.$store.dispatch('ejectCard');
        this.$router.replace({name:'idle'});
        if(!invalid){
          this.$store.commit('pushInvalidAccount',account);
        }
      } else if (p.length == 6) {
        // 校验密码        
        if (this.pin == this.truePin) {
          this.$router.replace({ name: "transaction-select" });
        } else {
          this.pinInputTimes += 1;
          this.$message.error("密码错误");
        }
      } else {
        this.$message.error("请输入6位密码");
      }
    },
    keypress(num) {
      let p = new String(this.pin);
      if(p.length<6){
        this.pin = p + num;
      }
    }
  }
};
</script>
<style scoped>
</style>