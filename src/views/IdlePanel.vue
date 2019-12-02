<template>
  <el-container @mousemove.native="move"
    style="display:flex;justify-content:center;align-items:center;height:100%;padding:0;"
  >
    <div v-if="ready" style="position:fixed;width:200px;top:50%;left:50%;font-size:15px;">
      <el-tooltip placement="top" content="拖动卡片文件至此处或点击选择卡片文件">
        <el-upload drag action :before-upload="readCard"></el-upload>
      </el-tooltip>
    </div>
    <div v-else-if="!ready" style="position:fixed;width:70%;height:75%;">
      <el-carousel :interval="4000" arrow="never" indicator-position="none">
        <el-carousel-item style="width:100%;height:100%;">
          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="font-size:50px;color:#CCCCCC;text-align:center;">
              welcome!
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item style="width:100%;height:100%;">
          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="font-size:50px;color:#CC0033;text-align:center;">
              welcome!
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="align-self:flex-end;width:100%;">
      <div style="width:250px;">
        <el-image :src="piggyLogoUrl"></el-image>
      </div>
    </div>
  </el-container>
</template>
<script>
/**
 * 空闲状态，操作员和客户可用
 *
 * 接口：读卡器，管理按钮
 */
export default {
  data() {
    return {
      piggyLogoUrl: "piggy-bank-logo.png",
      ready: false,
      timer: null
    };
  },
  methods: {
    startSession() {
      this.$router.replace("auth");
    },
    readCard(file) {
      let reader = new FileReader();
      let _ = this;
      new Promise((resolve, reject) => {
        reader.readAsText(file);

        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
      })
        .then(res => {
          let info = JSON.parse(res);
          _.$store.commit("setAccount",info);

          _.$router.replace({ name: "auth" });
        })
        .catch(err => {
          if (err) {
            _.$message.error("无效卡");
          }
        });

      return false;
    },
    move(){
      let _ = this;
      _.ready = true;
      if(_.timer){
        window.clearTimeout(_.timer);
      }
      _.timer = window.setTimeout(()=>{
        _.ready = false;
      },5000);
    }
  },
  created(){
    
  }
};
</script>
<style scoped>
</style>