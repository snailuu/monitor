<template>
  <div class="home">
    <el-row v-for="group in data" :key="group.id">
      <el-col>
        <div class="title">{{ group.type }}</div>
        <div class="grid">
          <div class="item" v-for="item in group.children" :key="item.id">
            <div class="item-icon" :style="{ background: item.color }" @click="get_sersor_all_data">
              <!-- <img style="width: 60px" :src="item.icon" alt="" /> -->
              <span style="font-size: 48px;" :class="item.icon" ></span>
            </div>

            <div class="item-desc">
              <div class="item-value" :style="{ color: item.color }">{{ item.value }}</div>
              <div class="item-text">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useStore} from 'vuex'
import { onMounted, onUnmounted, reactive } from 'vue';

const store = useStore();
let get_data = false;
onMounted(() =>{
  console.log("组件挂载");
  get_data = true;
  get_sersor_all_data();
})

onUnmounted(() => {
  get_data = false;
  console.log("组件卸载");
})

const data = store.state.message.sensor;
console.log(data);

const get_sersor_all_data = () => {
  store.dispatch("get_sersor_all_data");
  if(get_data){
    setTimeout(get_sersor_all_data, 1000);

  }
}


// const data = reactive([
//   {
//     id: 0,
//     type: '光照传感器',
//     children: [
//       {
//         id: 0,
//         name: '红外线',
//         value: 128,
//         color: '#409eff',
//         icon: 'iconfont icon-ss-lux'
//       },
//       {
//         id: 1,
//         name: '可见光',
//         value: 374,
//         color: '#409eff',
//         icon: 'iconfont icon-ss-lux'
//       },
//       {
//         id: 2,
//         name: '全光谱',
//         value: 374,
//         color: '#409eff',
//         icon: 'iconfont icon-ss-lux'
//       }
//     ]
//   },

//   {
//     id: 1,
//     type: '内部传感器',
//     children: [
//       {
//         id: 0,
//         name: '湿度',
//         value: 26.2,
//         color: '#67C23A',
//         icon: 'iconfont icon-ss-wat'
//       },
//       {
//         id: 1,
//         name: '温度',
//         value: 32.3,
//         color: '#67C23A',
//         icon: 'iconfont icon-ss-ith'
//       }
//     ]
//   },
//   {
//     id: 2,
//     type: '外部传感器',
//     children: [
//       {
//         id: 0,
//         name: '湿度',
//         value: 32.3,
//         color: '#E6A23C',
//         icon: 'iconfont icon-ss-wat'
//       },
//       {
//         id: 1,
//         name: '温度',
//         value: 26.2,
//         color: '#E6A23C',
//         icon: 'iconfont icon-ss-ith'
//       }
//     ]
//   }
// ])
</script>

<style scoped>
.home {
}

.title {
  margin: 10px 0 10px 0;
  color: #5c5c5c;
}
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  background: #fff;
  overflow: hidden;
  border: 1px solid #dfdfdf;
  display: flex;
  border-radius: 5px;
}

.item-desc {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  flex-grow: 1;
}

.item-value {
  margin-top: 5px;
  font-size: 36px;
  font-weight: bold;
}

.item-text {
  color: #5c5c5c;
  font-size: 14px;
}

.item-icon,
.iconfont {
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
}
</style>
