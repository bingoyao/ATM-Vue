<template>
  <el-container
    style="display:flex;justify-content:center;align-items:center;height:100%;padding:0;"
  >
    <div style="position:fixed;width:200px;top:50%;left:50%;font-size:15px;">
      <el-tooltip placement="top" content="拖动卡片文件至此处或点击选择卡片文件">
        <el-upload drag action :before-upload="readCard"></el-upload>
      </el-tooltip>
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
      piggyLogoUrl: "piggy-bank-logo.png"
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
    }
  }
};
</script>
<style scoped>
</style>