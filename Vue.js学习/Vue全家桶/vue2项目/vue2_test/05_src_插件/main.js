//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 注册（使用）插件
// 调用插件的install()
Vue.use(plugins, 1, 2, 3)

//创建vm
new Vue({
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),
}).$mount('#app')
