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
import { ref } from 'vue'

const active = ref('/')
</script>

<style scoped>
.row {
  height: 60px;
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
  color: #303133;
}

a:active {
  color: #409eff;
}

.active {
  color: #409eff;
}
</style>
