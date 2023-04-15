import $ from 'jquery'
import { ElMessage } from 'element-plus'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        change_monitor(context, data) {
            let change_type = "";
            switch (data) {
                case 1:
                    change_type = "up";
                    break;
                case 2:
                    change_type = "right";
                    break;
                case 3:
                    change_type = "down";
                    break;
                case 4:
                    change_type = "left";
                    break;
                case 0:
                    change_type = "recover";
                    break;
            }
            let url = "http://192.168.208.26:8000/monitor/" + change_type;
            $.ajax({
                url: url,
                type: "get",
                success(resp) {},
                error(resp) {
                    ElMessage({
                        showClose: true,
                        message: "调整监控画面角度失败",
                        type: 'error',
                        duration: 1000,
                    })
                }
            })
        }
    },
    modules: {}


}