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
                            path: 'detail',
                            component: Detail,

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
