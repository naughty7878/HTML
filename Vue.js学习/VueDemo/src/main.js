/** 入口JS：创建Vue实例 */
// 引入VUE
import Vue from 'vue'
// 引入VueResource
import VueResource from 'vue-resource'
// 引入App
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http

// 固定写法
let vm = new Vue({
  el: '#app',
  // 简写组件，组件映射
  components: {App},
  template: '<App/>'
})

Vue.use({
  vm
})
