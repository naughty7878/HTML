// 该文件用于创建整个应用的路由器

//引入插件vue-router
import VueRouter from 'vue-router'

// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"

// 创建一个路由器 ，并导出路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },
    ]
})
