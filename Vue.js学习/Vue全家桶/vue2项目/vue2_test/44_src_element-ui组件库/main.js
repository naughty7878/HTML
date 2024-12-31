//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 完整引入element-ui
//引入插件element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入element-ui
import { Button, Row } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false
// 完整引入element-ui
// 使用插件element-ui
// Vue.use(ElementUI);

//按需引入element-ui
Vue.use(Button)
Vue.use(Row)


//创建vm
new Vue({
  el: '#app',
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),
})
