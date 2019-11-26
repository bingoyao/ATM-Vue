<template>
  <div style="width:200px;text-align:center;margin:0 auto;">
    <el-row :gutter="2" style="margin-bottom:5px;">
      <el-col :span="8">
        <el-button plain @click.native="keypress('7')">7</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('8')">8</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('9')">9</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="2" style="margin-bottom:5px;">
      <el-col :span="8">
        <el-button plain @click.native="keypress('4')">4</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('5')">5</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('6')">6</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="2" style="margin-bottom:5px;">
      <el-col :span="8">
        <el-button plain @click.native="keypress('1')">1</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('2')">2</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('3')">3</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="2" style="margin-bottom:5px;" justify="center">
      <el-col :span="8">
        <el-button plain style="color:#fff;cursor:auto;visibility: hidden;">0</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain @click.native="keypress('0')">0</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain style="color:#fff;cursor:auto;visibility: hidden;">0</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'keyboard',
  data(){
    return {
      val:''
    }
  },
  methods:{
    keypress(num){
      this.$emit('press',num);
    }
  }
};
</script>