/** 入口JS：创建Vue实例 */
// 引入VUE
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 固定写法
let vm = new Vue({
  el: '#app',
  // 简写组件，组件映射
  components: {App},
  template: '<App/>'
})

// 使用vm
Vue.use({
  vm
})
