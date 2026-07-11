// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from "@/views/News.vue";
import NewsDetial from "@/views/NewsDetial.vue";

// 第二部：创建路由器
const router = createRouter({
    // createWebHistory history模式
    // createWebHashHistory 哈希模式
    history: createWebHistory(), // 路由器的工作模式
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xinwenxiangqing',
                    path: 'newDetail',
                    component: NewsDetial
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴露出去
export default router
