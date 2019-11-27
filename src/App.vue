<template>
  <el-container id="app">
    <el-card
      shadow="hover"
      v-show="allowOperate"
      style="position:fixed;top:20px;right:20px;"
      body-style="padding:5px;"
    >
      <el-tooltip placement="bottom">
        <div slot="content">{{tip}}</div>
        <el-button circle @click="switchState(loading)" style="padding:10px;">
          <i class="el-icon-s-tools" style="font-size:18px;"></i>
        </el-button>
      </el-tooltip>
      <el-tooltip placement="bottom">
        <div slot="content">点击查看系统日志</div>
        <el-button circle @click="showingLog=!showingLog" style="padding:10px;">
          <i class="el-icon-document" style="font-size:18px;"></i>
        </el-button>
      </el-tooltip>
    </el-card>
    <el-dialog title="系统日志" center :modal="false" :visible.sync="showingLog" width="90%">
      <el-table :data="systemLog" style="width:900px;">
        <el-table-column property="time" label="时间" width="150"></el-table-column>
        <el-table-column property="accountNumber" label="账户" width="170"></el-table-column>
        <el-table-column property="transactionType" label="事务" width="150"></el-table-column>
        <el-table-column property="amount" label="金额" width="100"></el-table-column>
        <el-table-column property="transTo" label="收款人" width="170"></el-table-column>
      </el-table>
    </el-dialog>
    <el-main style="display:flex;justify-content:center;align-items:center;padding:0;">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      showingLog: false,
      loading: false
    };
  },
  computed: {
    allowOperate() {
      return ["", "/", "/idle"].includes(this.$route.path);
    },
    systemLog() {
      return this.$store.state.systemLog;
    },
    tip() {
      if (this.$route.path == "/idle") {
        return "点击关闭ATM";
      } else {
        return "点击开启ATM";
      }
    }
  },
  methods: {
    /**
     * 打开/关闭ATM
     */
    switchState() {
      let _ = this;
      const loading = this.$loading.service({
        lock: true,
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.5)"
      });
      setTimeout(() => {
        loading.close();
        if (_.$route.path == "/idle") {
          _.$router.replace({ name: "unavailable" });
        } else {
          _.$router.replace({ name: "idle" });
        }
      }, 1000);
    }
  }
};
</script>

<style>
#app {
  height: 100%;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #0b3a97;
}
</style>
