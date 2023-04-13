<template>
  <el-row class="row nav">
    <el-col :span="5"
      ><div class="logo">
        <el-icon :size="24" style="margin-right: 5px"> <Platform /> </el-icon>
        <span class="text">智慧路灯终端</span>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="menu">
        <router-link @click="active = '/'" :class="active === '/' ? 'active' : ''" to="/"
          >数据监控</router-link
        >
        <router-link
          @click="active = '/control'"
          :class="active === '/control' ? 'active' : ''"
          to="/control"
          >路灯控制</router-link
        >
        <router-link @click="active = '/log'" :class="active === '/log' ? 'active' : ''" to="/log"
          >系统日志</router-link
        >
        <router-link
          @click="active = '/video'"
          :class="active === '/video' ? 'active' : ''"
          to="/video"
          >视频监控</router-link
        >
      </div>
    </el-col>
  </el-row>

  <div style="padding: 30px 30px">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';
import { useStore} from 'vuex'
import './assets/icon/white/iconfont.css'

const store = useStore();

onMounted(() => {
  // 监控弹出信息
  showMessage();
})
const showMessage = () =>{
  let error_msg = store.state.message.error_msg;
  let success_msg = store.state.message.success_msg;
  if(error_msg !== ""){
    ElMessage({
        message: error_msg,
        type: 'warning',
        duration: 3000,
    });
    store.commit("update_error_msg","");
  } else if (success_msg !== "") {
    ElMessage({
        message: success_msg,
        type: 'success',
        duration: 3000,
    });
    store.commit("update_success_msg","");
  }
  setTimeout(showMessage, 1000);

}
// import './assets/icon/gray/iconfont.css'
const active = ref('')
</script>

<style scoped>
.row {
  height: 70px;
  border-bottom: 1px solid #e0e0e0;
}

.nav {
  background: #fff;
}
.logo {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 30px;
  color: #409eff;
}

.text {
  
  font-weight: bold;
}

.menu {
  height: 100%;
  display: flex;
  align-items: center;
 
}

a {
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  margin: 0 20px;
  color: #1b1c1c;
  font-size: 14px;
}

a:active {
  color: #409eff;
}

.active {
  color: #409eff;
}
</style>
