//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import { mix2 } from './mixin'

//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(mix2)
/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建vm
new Vue({
  // 模板解析
  // ==== h: 这个参数是一个函数，通常称为 createElement。
  render: h => h(App),
  // ==== render - 复杂写法如下：
  // render(createElement) {
  //   return createElement(App)
  // }
  // ====  精简版vue无法解析模板template，
  // 所以使用render，解析模板
  // template: '<h1>hello</h1>'
}).$mount('#app')
