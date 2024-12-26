//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false

// console.log(Vue.prototype)
// const Demo = Vue.extend({})
// const demo = new Demo()
// Vue.prototype.x = demo

//创建vm
new Vue({
  el: '#app',
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),

})
