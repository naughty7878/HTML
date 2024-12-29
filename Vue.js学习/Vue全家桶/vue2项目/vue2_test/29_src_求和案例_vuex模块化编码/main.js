//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import VueResource from 'vue-resource'
//引入store， 必须在 Vue.use(Vuex) 之后执行
// import store from './store/index' =vue脚手架认识，简写=> './store/index'
import store from './store'


//关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

//创建vm
const vm = new Vue({
  el: '#app',
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),
  store,
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
})

console.log(vm);
