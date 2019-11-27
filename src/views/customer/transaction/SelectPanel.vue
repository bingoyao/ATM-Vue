<template>
  <el-container style="width:100%;height:100%;">
    <el-row :gutter="5" style="width:100%;height:100%;" justify="center">
      <el-col :span="16" style="height:100%;padding:40px;">
        <el-card shadow="hover" style="height:100%;">
          <el-row>请选择服务：</el-row>
          <el-divider></el-divider>
          <el-row :gutter="5" justify="center">
            <div
              style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
            >
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Inquiry',$event)"
              >查询</el-button>
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Deposit',$event)"
              >存款</el-button>
            </div>
          </el-row>
          <el-row :gutter="5" justify="center">
            <div
              style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
            >
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Withdrawal',$event)"
              >取现</el-button>
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Transfer',$event)"
              >转账</el-button>
            </div>
          </el-row>
          <el-row :gutter="5" justify="center">
            <div
              style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
            >
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Loan',$event)"
              >申请贷款</el-button>
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('Payback',$event)"
              >还款</el-button>
            </div>
          </el-row>
          <el-row :gutter="5" justify="center">
            <div
              style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
            >
              <el-button
                type="primary"
                class="trans-item"
                @click="startTransaction('ChangePIN',$event)"
              >修改PIN码</el-button>
              <el-button type="primary" class="trans-item" disabled>更多...</el-button>
            </div>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" style="height:100%;padding:40px;">
        <el-card shadow="hover" style="height:100%;">
          <el-row>我的账户</el-row>
          <el-divider></el-divider>
          <el-row :gutter="5">
            <el-col :span="12">账户名称：</el-col>
            <el-col :span="12">{{name}}</el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="12">账户余额：</el-col>
            <el-col :span="12">{{balances}}</el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="12">信用积分：</el-col>
            <el-col :span="12">
              {{credits}}
              <el-tag v-if="credits>=90" type="success" size="mini">信用极好</el-tag>
              <el-tag v-else-if="credits>=70" type="primary" size="mini">信用一般</el-tag>
              <el-tag v-else type="danger" size="mini">信用极差</el-tag>
            </el-col>
          </el-row>
          <div style="display:flex;padding:20px;justify-content:center;">
            <el-button type="info" icon="el-icon-upload2" round @click.native="ejectCard">退卡</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
/**
 * 事务选择界面
 *
 */
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState({
      name: state => state.account.name,
      number: state => state.account.number,
      balances: state => state.account.balances,
      credits: state => state.account.credits
    })
  },
  methods: {
    /**
     * 开始一个事务，转到选择的事务页面
     * @param {string} type 事务类型
     */
    startTransaction(type) {
      let route = "";
      switch (type) {
        case "Inquiry":
          route = "inquiry";
          break;
        case "Deposit":
          route = "deposit";
          break;
        case "Withdrawal":
          route = "withdrawal";
          break;
        case "Transfer":
          route = "transfer";
          break;
        case "ChangePIN":
          route = "change-pin";
          break;
        case "Loan":
          route = "loan";
          break;
        case "Payback":
          route = "payback";
          break;
        default:
          alert("没有这个事务");
          return;
      }
      this.$router.push({ name: route });
    },
    /**
     * 执行退卡操作
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
.trans-item {
  width: 220px;
  height: 70px;
  margin: 10px;
}
</style>