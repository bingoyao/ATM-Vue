<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card v-if="step===0" style="max-width:80%;min-width:700px;height:550px;">
      输入对方账号
    </el-card>

    <el-card v-if="step===1" style="max-width:80%;min-width:700px;height:550px;">
      输入金额
    </el-card>

    <el-card v-if="step===2" style="max-width:80%;min-width:700px;height:550px;">
      结果
    </el-card>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      step:0
    };
  },
  computed: {},
  methods: {

  }
};
</script>
<style scoped>
</style>