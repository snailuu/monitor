<template>
  <div class="box">
    <div class="video">
      <vue3VideoPlay 
      width="800px"
      title="监控画面"
      :src="options.src"
      :type="options.type"
      :autoPlay="false"
       />
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
import { reactive } from 'vue';
import { useStore } from 'vuex';
const options = reactive({
  src: "http://43.142.114.182:80/hls/abcd/index.m3u8", //视频源
  type: 'application/x-mpegURL', //视频类型
})
const store = useStore();

const change_monitor = id => {
  store.dispatch("change_monitor", id);
}
</script>

<style scoped>

.box{
  height: calc(100vh - 140px);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
video{
  width:960px;
  height: 560px;
  /* background-color: aqua; */
}
.control{
  width: 300px;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}
.video {
  margin: auto;
}
.item{
  width: 80px;
  height: 80px;
  /* background-color: blue; */
  margin: 5px;
}
.item:nth-child(even) {
  /* background-color: red; */
}
.icon{

}
.iconfont {
  color: #727272;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
  cursor: pointer;
  font-size:80px;
  cursor: pointer;;
}
</style>