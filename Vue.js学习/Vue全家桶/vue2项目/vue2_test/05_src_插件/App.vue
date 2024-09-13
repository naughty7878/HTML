<template>
    <div>
        <!-- 使用组件 -->
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
// ## 插件

// 1. 功能：用于增强Vue

// 2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

// 3. 定义插件：

//     ```js
//     对象.install = function (Vue, options) {
//         // 1. 添加全局过滤器
//         Vue.filter(....)
    
//         // 2. 添加全局指令
//         Vue.directive(....)
    
//         // 3. 配置全局混入(合)
//         Vue.mixin(....)
    
//         // 4. 添加实例方法
//         Vue.prototype.$myMethod = function () {...}
//         Vue.prototype.$myProperty = xxxx
//     }
//     ```

// 4. 使用插件：```Vue.use()```



// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: "App",
    // 注册组件
    components: {
        Student,School
    },
    data() {
        return {
        };
    },
    methods: {
    },
};
</script>

<style>
</style>