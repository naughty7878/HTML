// 该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
// 引入插件vuex
import Vuex from 'vuex'
import countOptions from './count';
import personOptions from './person';
// 使用插件Vuex
Vue.use(Vuex)


// 创建store，并导出store
export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions,
    }
})
