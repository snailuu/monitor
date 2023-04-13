import { createStore } from 'vuex'
import ModuleMessage from './meaages'
import ModuleMonitor from './monitor'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        message: ModuleMessage,
        monitor: ModuleMonitor,
    }
})