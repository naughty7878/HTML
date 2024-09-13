export default {
    // vue插件必须要有的方法install
    // 当vue使用插件时，自动调用install方法，传入
    // 第一个入参就是Vue类对象
    // 其他参数是注册插件时传入的
    install(Vue, x, y, z) {
        console.log('pluginjs ---> install');
        console.log('Vue', Vue);
        console.log('x, y, z ==== ', x, y, z);
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                console.log('bind');
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                console.log('inserted');
                element.focus()
            },
            // 指令所在元素被重新解析时
            update(element, binding) {
                console.log('update');
                element.value = binding.value;
            },
        })

        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 给Vue原型上添加一个方法(vm和vc都能使用)
        Vue.prototype.hello = () => {alert('hello world')}
    },
}

