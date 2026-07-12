import {createApp} from "vue";
import App from "./App.vue"
// 引入pinia
import { createPinia } from "pinia"

createApp(App)
    // 创建，使用Pinia
    .use(createPinia())
    .mount('#app')