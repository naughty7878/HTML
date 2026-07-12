// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router'
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
            path: '/',
            redirect: '/home'
        },
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
                    path: 'newsDetail',
                    component: NewsDetial,
                    // 第一种写法：将路由收到的所有params参数作为props传给组件
                    // props: true

                    // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    props: (route) => {
                        return route.query
                    }

                    // 第二种写法：对象写法
                    // props: {
                    //     id: '001',
                    //     title: 'xx',
                    //     content: 'xx'
                    // }
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
