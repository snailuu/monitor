<template>
  <div>
    <div class="log">
      <ul class="log-list" v-for="item in logs" :key="item">
          <span style="color: #D72269;">
              {{ item[0] }} 
          </span>
          &nbsp;
          <span style="color: #55B00B;">
              {{ item[1] }}
          </span>
          &nbsp;
          <!-- <span style="color: #000000;">
              {{ item[2] }}
          </span>
          &nbsp; -->
          <span style="color: #476CFB;">
              {{ item[2] }}
          </span>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus'


const store = useStore();
let logs = store.state.message.logs;
let flag = 0;
onMounted(() => {
  updateLogs();
  ElMessage({
      showClose: true,
      message: "获取日志成功",
      type: 'success',
      duration: 500,
  })
})

const updateLogs = () =>{
    store.dispatch("get_logs_message");

    setTimeout(() => {
        updateLogs();
    }, 5000);
}
</script>

<style scoped>
.log {
  height: 84vh;
  overflow: scroll;
  background: #ffffff73;
  padding: 20px;
  border-radius: 3px;
}
</style>
