//引入的不在是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
//引入App
import App from './App.vue'

// createApp(App).mount('#app')
//创建应用实例对象-app(类似域之前Vue2中的vm，但app比vm更"轻")
const app = createApp(App)
//挂载
app.mount('#app')
// console.log('app', app)