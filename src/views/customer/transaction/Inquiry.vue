<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card style="max-width:80%;min-width:700px;height:550px;" body-style="text-align:center;">
      <el-row :gutter="5">
        <el-col :span="24">
          <h4>当前账户信息</h4>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div>
        <el-row style="padding:5px;">
          <el-col :span="8">账户名</el-col>
          <el-col :span="16">{{name}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">账号</el-col>
          <el-col :span="16">{{number}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">活期余额</el-col>
          <el-col :span="16">{{balances}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">电子钱包余额</el-col>
          <el-col :span="16">{{wallet}}</el-col>
        </el-row>       
        <el-row style="padding:5px;">
          <el-col :span="8">借贷信息</el-col>
          <el-col :span="16">{{loan}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">信用情况</el-col>
          <el-col :span="16">{{credits}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">开户日期</el-col>
          <el-col :span="16">{{createTime}}</el-col>
        </el-row>
        <el-row style="padding:5px;">
          <el-col :span="8">开户银行</el-col>
          <el-col :span="16">{{bank}}</el-col>
        </el-row>
      </div>
      <el-divider></el-divider>

      <div>
        <el-button type="primary" @click.native="goBack">
          返回
        </el-button>
      </div>
    </el-card>
  </el-container>
</template>
<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapState({
    name: state => state.account.name,
    number: state => state.account.number,
    credits: state => state.account.credits,
    balances: state => state.account.balances,
    createTime: state => state.account.createTime,
    bank: state => state.account.bank,
    loan: state => state.account.loan,
    wallet: state => state.account.wallet
  }),
  methods: {
    goBack(){
      this.$router.replace({name:'transaction-select'});
    }
  }
};
</script>
<style scoped>
</style>