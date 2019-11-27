<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card v-if="step==0" style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header">修改PIN码</div>
        <el-row :gutter="5">
          <el-col :span="8">
            <div style="width:200px;text-align:right;line-height:40px;">输入当前PIN码：</div>
          </el-col>
          <el-col :span="16">
            <el-input
              type="password"
              prefix-icon="el-icon-dollar"
              v-model="oldPin"
              style="width:250px;text-align:center;"
            ></el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <keyboard @press="keypress('oldPin',$event)"></keyboard>
        <div
          style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
        >
          <el-button @click.native="goBack" type="danger">取消</el-button>

          <el-button @click.native="deleteNum('oldPin')" type="warning">删除</el-button>

          <el-button @click.native="finishVerify" type="primary">验证</el-button>
        </div>
    </el-card>

    <el-card v-else-if="step==1" style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header">修改PIN码</div>
        <el-row :gutter="5">
          <el-col :span="8">
            <div style="width:200px;text-align:right;line-height:40px;">新的PIN码：</div>
          </el-col>
          <el-col :span="16">
            <el-input
              type="password"
              prefix-icon="el-icon-dollar"
              v-model="newPin"
              style="width:250px;text-align:center;"
            ></el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <keyboard @press="keypress('newPin',$event)"></keyboard>
        <div
          style="width:400px;margin:0 auto;display:flex;justify-content:space-between;margin-top:20px;"
        >
          <el-button @click.native="goBack" type="danger">取消</el-button>

          <el-button @click.native="deleteNum('newPin')" type="warning">删除</el-button>

          <el-button @click.native="performTransaction" type="primary">确定</el-button>
        </div>
      </el-card>
  </el-container>
</template>
<script>
import Keyboard from "@/components/Keyboard";

export default {
  components: {
    Keyboard
  },
  data() {
    return {
      step:0,
      newPin: "",
      oldPin: ""
    };
  },
  methods: {
    keypress(type, num) {
      if (type === "newPin") {
        let oldVal = new String(this.newPin);
        if (oldVal.length < 6) {
          this.newPin = oldVal + num;
        }
      } else if (type === "oldPin") {
        let oldVal = new String(this.oldPin);
        if (oldVal.length < 6) {
          this.oldPin = oldVal + num;
        }
      }
    },
    deleteNum(type) {
      if (type === "oldPin") {
        let oldVal = new String(this.oldPin);
        if (oldVal.length > 0) {
          this.oldPin = oldVal.substring(0, oldVal.length - 1);
        }
      } else if (type === "newPin") {
        let oldVal = new String(this.newPin);
        if (oldVal.length > 0) {
          this.newPin = oldVal.substring(0, oldVal.length - 1);
        }
      }
    },
    finishVerify() {
      this.step = 1;
    },
    performTransaction() {
      let pin = new String(this.newPin);
      if (pin.length === 6) {
        this.$store.commit("setPin", pin);
        this.$message.success("修改成功");
        this.$router.replace({ name: "transaction-select" });
      }
    },
    goBack() {
      this.$router.replace({ name: "transaction-select" });
    }
  }
};
</script>
<style scoped>
</style>