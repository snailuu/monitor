<template>
  <div class="home">
    <el-row v-for="group in data" :key="group.id">
      <el-col>
        <div class="title">{{ group.type }}</div>
        <div class="grid">
          <div class="item" v-for="item in group.children" :key="item.id">
            <div class="item-icon" :style="{ background: item.bg_color }" @click="change_working(item.id, item.working);">
              <!-- <img style="width: 60px" :src="item.icon" alt="" /> -->
              <!-- <span :style="{ font_size: '48px', color:item.icon_color }" :class="item.icon" ></span> -->
              <!-- <span :style="{color:item.icon_color,display: flex,align_items: center,justify_items: center,padding: '10px',font_size:'48px'}" :class="item.icon" ></span> -->
              <span style="font-size:48px;" :class="item.icon" ></span>
            </div>
 
            <div class="contorl">
           
                <span class="iconfont icon-jian icon" @click="change_brightness(item.id, -20)"></span>
            
              <div class="item-desc">
                <div class="item-value" :style="{ color: item.text_color }">{{ item.brightness }}</div>
                <div class="item-text">{{ item.name }}</div>
              </div>
             

                <span class="iconfont icon-tianjia icon" @click="change_brightness(item.id, 20)"></span>
              
            </div>
            
          </div>
          
        </div>
      </el-col> 
      <el-col>
        <div class="title" style="margin-top: 50px">路灯功率使用情况</div>
        
        <div id="chart" style="height: 400px; width: 100%;"></div>
      
      </el-col> 
    </el-row>
  </div>
</template>

<script setup>
import { useStore} from 'vuex'
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts';

const store = useStore();
const data = store.state.message.kaiguang;


const change_working = (id, working) => {
  store.dispatch("change_kaiguang_status", {
    id,
    working
  });
}

const change_brightness = (id, val) => {

  // ElMessage({
  //   showClose: true,
  //   message: 'O.',
  //   type: 'error',
  //   duration: 3000,
  // })

  store.dispatch("change_kaiguang_brightness", {
    id,
    brightness: val
  })
}

const show_kaiguang_data = () =>{
    // 获取图表容器
    const chartContainer = document.getElementById('chart');

    // 创建图表实例
    const chart = echarts.init(chartContainer);

    // let kaiuang = store.state.message.kaiguang;
    // 设置图表配置项和数据
    const options = {
      color:[
        "#FCDD97",
        "#9FE080",
        "#5470C6",
        
      ],
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['大灯','小灯2', '小灯1']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '小灯2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '小灯1',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '大灯',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    chart.setOption(options);
}
onMounted(() =>{
  store.dispatch("get_sersor_all_data");
  show_kaiguang_data();
})
// const data = reactive([
//   {
//     id: 0,
//     type: '路灯控制',
//     children: [
//       {
//         id: 0,
//         name: '大灯',
//         value: 128,
//         bg_color: '#F56C6C',
//         icon_color: "white",
//         icon: 'iconfont icon-kaiguan-close',
//         text_color: '#898989'
//       },
//       {
//         id: 1,
//         name: '小灯1',
//         value: 374,
//         bg_color: '#c5c3c3',
//         icon_color: "black",
//         icon: 'iconfont icon-kaiguan-close',
//         text_color: '#898989',
//         style:"display: flex;align-items: center;justify-items: center;padding: 10px; color='white'"
//       },
//       {
//         id: 2,
//         name: '小灯2',
//         value: 374,
//         bg_color: '#F56C6C',
//         icon_color: "white",
//         icon: 'iconfont icon-kaiguan-open',
//         text_color: '#898989'
//       }
//     ]
//   },
// ])

</script>

<style scoped>
.home {
}

.contorl {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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
.icon {
  color: #898989 !important;
  background: #e1e1e1;
  border-radius: 5px;
}

.item-icon,
.iconfont {
  color: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 10px;
  cursor: pointer;
}
.icon:active{
  background-color: #919191;
  color:aqua !important;
}
.data_show{
  height: 480px;
  width: 580px;
  /* margin: 20px auto; */
  background-color: white;
}
</style>
