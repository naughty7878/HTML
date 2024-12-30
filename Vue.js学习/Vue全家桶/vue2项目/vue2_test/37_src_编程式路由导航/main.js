//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件vue-router
Vue.use(VueRouter)


//创建vm
const vm = new Vue({
  el: '#app',
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),
  router: router,
})

console.log('vm', vm)
window.vm = vm