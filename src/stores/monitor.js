import $ from 'jquery'

export default {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        change_monitor(data) {
            let change_type = "";
            switch (change_type) {
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
            let url = "http://192.168.100.25:8000/monitor/" + change_type;
            console.log("url = ", url);
        }
    },
    modules: {}


}