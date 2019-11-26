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
  components: {
    Keyboard
  },
  computed: {
    pin() {
      return this.$store.state.account.pin;
    }
  },
  methods: {
    ejectCard() {
      this.$store.dispatch('ejectCard');
      this.$router.replace({name:'idle'})
    },
    deleteNum() {
      this.$store.commit("popPin");
    },
    confirmPin() {
      if (this.pin.length == 6) {
        this.$router.replace({ name: "transaction-select" });
      } else {
        this.$message.error("请输入6位密码");
      }
    },
    keypress(num) {
      this.$store.commit("pushPin", num);
    }
  }
};
</script>
<style scoped>
</style>