<template>
  <div class="box">
    <div class="video" id="img">
      <!-- <vue3VideoPlay width="800px" title="监控画面" :src="options.src" :type="options.type" :autoPlay="false" /> -->
      <!-- <div id="img"> -->
      <img :src="imgSrc" style="height='100%' width='100%'">
      <!-- </div> -->
    </div>
    <div class="control">
      <div>
        <div class="item"></div>
        <div class="item icon">
          <span class="iconfont icon-arrow-left-rectangle" @click="change_monitor(4)"></span>
        </div>
        <div class="item"></div>
      </div>
      <div>
        <div class="item icon">
          <span class="iconfont icon-arrow-up-rectangle" @click="change_monitor(1)"></span>
        </div>
        <div class="item icon">
          <span class="iconfont icon-reload-rectangle" @click="change_monitor(0)"></span>
        </div>
        <div class="item icon">
          <span class="iconfont icon-arrow-down-rectangle" @click="change_monitor(3)"></span>
        </div>
      </div>
      <div>
        <div class="item"></div>
        <div class="item icon">
          <span class="iconfont icon-arrow-right-rectangle" @click="change_monitor(2)"></span>
        </div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
const options = reactive({
  src: "http://81.71.160.25:84/hls/123/hls.m3u8", //视频源
  type: 'application/x-mpegURL', //视频类型
})
const store = useStore();

const change_monitor = id => {
  store.dispatch("change_monitor", id);
}


const imgSrc = ref(""); // 使用 ref 创建一个响应式数据

const ws = new WebSocket("ws://127.0.0.1:8090/camera");

const timer = setInterval(function () {
  if (ws.readyState == 1) {
    ws.send("camera");
    clearInterval(timer);
  }
}, 10);

ws.onmessage = function (res) {
  let ret_data = JSON.parse(res.data)["data"];
  console.log("ret_data:", ret_data);

  // 摄像头数据
  let img_src = ret_data[0].img_date_url

  imgSrc.value = img_src; // 修改响应式数据的值，从而实现更新图片链接的效果

  ws.send("camera");
}

</script>

<style scoped>
.box {
  height: calc(100vh - 140px);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

video {
  width: 960px;
  height: 560px;
  /* background-color: aqua; */
}

.control {
  width: 300px;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}

.video {
  margin: auto;
}

.item {
  width: 80px;
  height: 80px;
  /* background-color: blue; */
  margin: 5px;
}

.item:nth-child(even) {
  /* background-color: red; */
}

.icon {}

.iconfont {
  color: #727272;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
  cursor: pointer;
  font-size: 80px;
  cursor: pointer;
  ;
}

#img{
  width: 800px;
}
</style>