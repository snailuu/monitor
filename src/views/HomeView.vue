<template>
  <div class="home">
    <el-row v-for="group in data" :key="group.id">
      <el-col>
        <div class="title">{{ group.type }}</div>
        <div class="grid">
          <div class="item" v-for="item in group.children" :key="item.id">
            <div class="item-icon" :style="{ background: item.color }">
              <img style="width: 60px" :src="item.icon" alt="" />
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
import { reactive } from 'vue'

const data = reactive([
  {
    id: 0,
    type: '光照传感器',
    children: [
      {
        id: 0,
        name: '红外线',
        value: 12,
        color: '#31b48d',
        icon: 'https://avuejs.com/images/logo.png'
      },
      {
        id: 1,
        name: '可见光',
        value: 12,
        color: '#31b48d',
        icon: 'https://avuejs.com/images/logo.png'
      },
      {
        id: 2,
        name: '全光谱',
        value: 12,
        color: '#31b48d',
        icon: 'https://avuejs.com/images/logo.png'
      }
    ]
  },

  {
    id: 0,
    type: '内部传感器',
    children: [
      {
        id: 0,
        name: '红外线',
        value: 12,
        color: '#31b48d',
        icon: 'https://avuejs.com/images/logo.png'
      },
      {
        id: 1,
        name: '可见光',
        value: 12,
        color: '#31b48d',
        icon: 'https://avuejs.com/images/logo.png'
      }
    ]
  }
])
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
  grid-template-columns: repeat(4, 1fr);
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

.item-icon {
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
}
</style>
