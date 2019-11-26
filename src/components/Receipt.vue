<template>
  <el-container direction="vertical">
    <!-- 交易流水、日期/时间、账户(mask)、交易类型... -->

    <el-card shadow="hover">
      <div slot="header">客户回执单</div>
      <el-row style="width:100%;font-family:consolas;">
        <el-col :span="24">
          <el-row v-for="infoItem in receiptInfo" :key="infoItem.name">
            <el-col :span="8" style="text-align:right;">{{infoItem.name}}:</el-col>
            <el-col :span="16" style="text-align:left;">{{infoItem.value}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </el-container>
</template>
<script>
export default {
  props: ["receiptInfo"],
  methods: {
    
  }
};
</script>
