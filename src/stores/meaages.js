import $ from 'jquery'
import { ElMessage } from 'element-plus'

export default {
    state: {
        error_msg: "",
        success_msg: "",
        sensor: [{
                id: 0,
                type: '光照传感器',
                children: [{
                        id: 0,
                        name: '红外线',
                        value: 128,
                        color: '#409eff',
                        icon: 'iconfont icon-ss-lux'
                    },
                    {
                        id: 1,
                        name: '可见光',
                        value: 374,
                        color: '#409eff',
                        icon: 'iconfont icon-ss-lux'
                    },
                    {
                        id: 2,
                        name: '全光谱',
                        value: 334,
                        color: '#409eff',
                        icon: 'iconfont icon-ss-lux'
                    }
                ]
            },

            {
                id: 1,
                type: '内部传感器',
                children: [{
                        id: 0,
                        name: '温度',
                        value: 32.3,
                        color: '#67C23A',
                        icon: 'iconfont icon-ss-ith'
                    },
                    {
                        id: 1,
                        name: '湿度',
                        value: 26.2,
                        color: '#67C23A',
                        icon: 'iconfont icon-ss-wat'
                    }

                ]
            },
            {
                id: 2,
                type: '外部传感器',
                children: [{
                        id: 0,
                        name: '温度',
                        value: 26.2,
                        color: '#E6A23C',
                        icon: 'iconfont icon-ss-ith'
                    },
                    {
                        id: 1,
                        name: '湿度',
                        value: 32.3,
                        color: '#E6A23C',
                        icon: 'iconfont icon-ss-wat'
                    }

                ]
            },
            {
                id: 3,
                type: 'gps定位',
                children: [{
                        id: 0,
                        name: '经度',
                        value: 113.39,
                        color: '#F56C6C',
                        icon: 'iconfont icon-gps'
                    },
                    {
                        id: 1,
                        name: '经度',
                        value: 22.52,
                        color: '#F56C6C',
                        icon: 'iconfont icon-gps'
                    }

                ]
            },
            {
                id: 4,
                type: '二氧化碳传感器',
                children: [{
                        id: 0,
                        name: '二氧化碳浓度',
                        value: 400,
                        color: '#776be0',
                        icon: 'iconfont icon-eryanghuatan'
                    },

                ]
            },
            {
                id: 5,
                type: '雨滴传感器',
                children: [{
                        id: 0,
                        name: '降水程度',
                        value: 0,
                        color: '#6093f1',
                        icon: 'iconfont icon-zhongyuzhuandayu'
                    },

                ]
            }
        ],
        kaiguang: [{
            id: 0,
            type: '路灯控制',
            time_data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            children: [{
                    id: 3,
                    name: '大灯',
                    brightness: 128,
                    bg_color: '#898989',
                    icon: 'iconfont icon-kaiguan-close',
                    text_color: '#898989',
                    working: false,
                    power: [820, 932, 901, 934, 1290, 1330, 1320],
                    power_color: "#409EFF"
                },
                {
                    id: 1,
                    name: '小灯1',
                    brightness: 374,
                    bg_color: '#898989',
                    icon: 'iconfont icon-kaiguan-close',
                    text_color: '#898989',
                    working: false,
                    power: [120, 132, 101, 134, 90, 230, 210],
                    power_color: "#67C23A"
                },
                {
                    id: 2,
                    name: '小灯2',
                    brightness: 374,
                    bg_color: '#898989',
                    icon: 'iconfont icon-kaiguan-open',
                    text_color: '#898989',
                    working: false,
                    power: [150, 232, 201, 154, 190, 330, 410],
                    power_color: "#E6A23C"
                }
            ]
        }],
        logs: ["1234"]
    },
    getters: {

    },
    mutations: {
        update_kaiguang_status(state, id) {
            console.log("开关", id, "状态改变");

            const obj = state.kaiguang[0].children.filter(item => item.id === id);
            if (obj) {
                obj.forEach(item => {
                    console.log(item.working);
                    item.working = !item.working;
                    if (item.working === true) {
                        item.bg_color = '#F56C6C';
                    } else {
                        item.bg_color = '#898989';
                    }
                })
            }

            // const index = state.kaiguang[0].children.findIndex(item => item.id === id);
            // if (index > 0) {
            //     const obj = state.kaiguang[0].children[index];
            //     obj.working = !obj.working;
            //     if (obj.working === true) {
            //         obj.bg_color = '#F56C6C';
            //     } else {
            //         obj.bg_color = '#898989';
            //     }
            // }
        },
        update_kaiguang_brightness(state, data) {
            let id = data.id;
            let brightness = data.brightness;

            console.log("改变路灯的序号是", id, " 改变的亮度是", brightness);
            const obj = state.kaiguang[0].children.filter(item => item.id === id);
            console.log(obj);
            if (obj) {
                obj.forEach(item => {
                    if (item.working === false) {
                        state.error_msg = "该灯未开启,调整亮度失败";
                    } else {
                        item.brightness += brightness;
                    }
                })
            }
        },
        update_sensor_data(state, data) {
            console.log(data);
            data.forEach(data_item => {
                let sensor_id = data_item.sensor_id;
                let sensor_data_id = data_item.sensor_data_id;
                let sensor_data = data_item.sensor_data;
                // 找到哪个传感器
                const obj1 = state.sensor[sensor_id];
                console.log("obj1", obj1);
                if (obj1) {
                    console.log("传感器：", state.sensor[sensor_id]);
                    const obj2 = obj1.children.filter(item => item.id === sensor_data_id);
                    console.log("传感器部件：", obj2);
                    console.log("obj2的类型是", Object.prototype.toString.call(obj2));
                    if (obj2.length > 0) {
                        console.log(obj2[0].value);
                        obj2.value = sensor_data;
                    }
                }
            })

        },
        update_success_msg(state, msg) {
            state.success_msg = msg;
        },
        update_error_msg(state, msg) {
            state.error_msg = msg;
        },
        addLogs(state, message) {
            state.logs.push(message);
        },
    },
    actions: {
        get_sersor_all_data(context) {
            console.log("获取传感器信息");
            // $.ajax({
            //     url: "http://127.0.0.1:8999/server/allData",
            //     type: "get",
            //     success(resp) {
            //         // TODO 传感器信息获取
            //         console.log(resp);
            //         let data_0_0 = resp.brightness[0];
            //         let data_0_1 = resp.brightness[1];
            //         let data_0_2 = resp.brightness[2];
            //         let data_1_0 = resp.builtin_Humiture[0];
            //         let data_1_1 = resp.builtin_Humiture[1];
            //         let data_2_0 = resp.ext_Humiture[1];
            //         let data_2_1 = resp.ext_Humiture[0];
            //         let data_4_0 = resp.co2[1];
            //         let data_5_0 = resp.rain[0];
            //         context.commit("update_sensor_data", [{
            //                 sensor_id: 0,
            //                 sensor_data_id: 0,
            //                 sensor_data: data_0_0
            //             },
            //             {
            //                 sensor_id: 0,
            //                 sensor_data_id: 1,
            //                 sensor_data: data_0_1
            //             },
            //             {
            //                 sensor_id: 0,
            //                 sensor_data_id: 2,
            //                 sensor_data: data_0_2
            //             },
            //             {
            //                 sensor_id: 1,
            //                 sensor_data_id: 0,
            //                 sensor_data: data_1_0
            //             },
            //             {
            //                 sensor_id: 1,
            //                 sensor_data_id: 1,
            //                 sensor_data: data_1_1
            //             },
            //             {
            //                 sensor_id: 1,
            //                 sensor_data_id: 0,
            //                 sensor_data: data_2_0
            //             },
            //             {
            //                 sensor_id: 2,
            //                 sensor_data_id: 1,
            //                 sensor_data: data_2_1
            //             },
            //             {
            //                 sensor_id: 4,
            //                 sensor_data_id: 0,
            //                 sensor_data: data_4_0
            //             },
            //             {
            //                 sensor_id: 5,
            //                 sensor_data_id: 5,
            //                 sensor_data: data_5_0
            //             },

            //         ])
            //     }
            // })
        },
        get_sensor_gps(context) {
            $.ajax({
                url: "http://192.168.100.25:8000/server/gps",
                type: "get",
                success(resp) {
                    let data_3_0 = resp.gps[0];
                    let data_3_1 = resp.gps[1];
                    context.commit("update_sensor_data", [{
                            sensor_id: 3,
                            sensor_data_id: 0,
                            sensor_data: data_3_0
                        },
                        {
                            sensor_id: 3,
                            sensor_data_id: 1,
                            sensor_data: data_3_1
                        }
                    ])
                }
            })
        },
        change_kaiguang_status(context, data) {
            // console.log("现在打开的是", id.toString().padStart(3, '0'), "号灯");

            const id = data.id;
            const working = data.working;
            let change_type = working === true ? "turnOff" : "turnOn";
            let change_id = id.toString().padStart(3, '0');
            let url = "http://192.168.100.25:8000/server/lamp/" + change_type + "/" + change_id
            console.log("现在打开的是", id.toString().padStart(3, '0'), "号灯", url);

            $.ajax({
                url: url,
                type: "get",
                success(resp) {
                    // TODO 判断返回是否为true，false弹出消息框
                    console.log(resp);
                    //开关开启后亮度显示
                    url = "http://192.168.100.25:8000/server/lamp/lightStatus/" + id.toString().padStart(3, '0');
                    $.ajax({
                        url: url,
                        type: "get",
                        success(resp) {
                            // TODO 将返回的亮度值显示在面板上
                            console.log(resp);
                        },
                        error(resp) {
                            console.log(resp);
                        }
                    })
                },
                error(resp) {
                    // TODO 显示失败信息
                    console.log(resp);
                }
            })
            context.commit("update_kaiguang_status", id);
        },
        change_kaiguang_brightness(context, data) {

            // 判断路灯是否为开启状态, 未开启调整亮度不做任何行为

            const id = data.id;
            const brightness = data.brightness;
            console.log("id:", id, "change brightness:", brightness);
            let change_type = brightness > 0 ? "setLightUp" : "setLightDown";
            let change_id = id.toString().padStart(3, '0');
            let url = "http://192.168.100.25:8000/server/lamp/" + change_type + "/" + change_id;
            context.commit("update_kaiguang_brightness", {
                id,
                brightness
            })

            // $.ajax({
            //     url: url,
            //     type: "get",
            //     success(resp) {
            //         console.log(resp);
            //         context.commit("update_kaiguang_brightness", {
            //             id,
            //             brightness
            //         })

            //     },
            //     error(resp) {

            // ElMessage({
            //         showClose: true,
            //         message: 'O.',
            //         type: 'error',
            //         duration: 3000,
            //     })
            //         console.log(resp);
            //     }
            // })
        },
        get_logs_message(context) {
            // console.log(context);
            $.ajax({
                url: "http://192.168.100.25:8000/log",
                type: "get",
                success(resp) {
                    console.log(resp);

                    for (let item of resp.log_list) {
                        console.log(item);
                        context.commit("addLogs", item.split(" - "));
                    }
                    context.commit("update_success_msg", "获取日志消息成功");

                },
                error(resp) {
                    console.log(resp);
                }
            })
        }
    },
    modules: {}


}