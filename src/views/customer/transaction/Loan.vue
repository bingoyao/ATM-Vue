<template>
  <el-container
    style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;"
  >
    <el-card style="max-width:80%;min-width:700px;height:550px;">
      your current loan
    </el-card>
    <el-card style="max-width:80%;min-width:700px;height:550px;">
      <div slot="header">贷款申请单</div>
      fill the loan request table, amount|term

      <keyboard></keyboard>
    </el-card>
    <el-card style="max-width:80%;min-width:700px;height:550px;">
      show timeline and waiting...
      choose to go back
    </el-card>
  </el-container>
</template>
<script>
import Keyboard from '@/components/Keyboard'

export default {
  
  data(){
    return {

    }
  },
  components:{
    Keyboard
  },
  methods:{

  },
  created(){

  }
}
</script>
<style scoped>

</style>