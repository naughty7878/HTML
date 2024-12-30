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
const router = new VueRouter({
    // 一级路由
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: false, title: '关于' },
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            // 二级路由
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        // 独享守卫
                        // 只有前置 独享守卫，没有后置 独享守卫
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    // 三级路由
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

                            // props的第一种写法：值为对象
                            // 该对象的所有key-value都会以props的形式传给Detail组件
                            // props: {a: 1, b: 'hello'}

                            // props的第二种写法：值为布尔值
                            // 若布尔值为真，就会把该路由组件收到的所欲params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第二种写法：值为函数
                            // props($route) {
                            //     return {id: $route.query.id, title: $route.query.title}
                            // },
                            // 结构赋值的连续写法
                            props({ query: { id, title } }) {
                                return { id, title }
                            },
                        },
                    ]
                },
            ]
        },
    ]
})

// 初始化调用，或者在每次路由切换前执行
// 全局前置路由守卫
// router.beforeEach((to, from, next) => {
//     console.log('router.beforeEach')
//     // 去哪里
//     console.log('to', to)
//     // 来自哪里
//     console.log('from', from)
//     // 放行
//     // console.log('next', next)
//     // if (to.path === '/home/news' || to.name === 'xiaoxi') {
//     //     if (localStorage.getItem('school') === 'atguigu') {
//     //         next()
//     //     } else {
//     //         alert('学校名不对，无权限查看')
//     //     }
//     // } else {
//     //     next()
//     // }
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看')
//         }
//     } else {
//         next()
//     }
// })

// 初始化调用，或者在每次路由切换后执行
// 全局前置路由守卫
// router.afterEach((to, from) => {
//     console.log('router.afterEach')
//     // 去哪里
//     console.log('to', to)
//     // 来自哪里
//     console.log('from', from)
//     // 修改文档title
//     document.title = to.meta.title || '系统'
// })



export default router