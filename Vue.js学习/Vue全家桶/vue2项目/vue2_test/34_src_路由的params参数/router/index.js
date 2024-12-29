// 该文件用于创建整个应用的路由器

//引入插件vue-router
import VueRouter from 'vue-router'

// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

// 创建一个路由器 ，并导出路由器
export default new VueRouter({
    // 一级路由
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,

        },
        {
            path: '/home',
            component: Home,
            // 二级路由
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    // 三级路由
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                        },
                    ]
                },
            ]
        },
    ]
})
