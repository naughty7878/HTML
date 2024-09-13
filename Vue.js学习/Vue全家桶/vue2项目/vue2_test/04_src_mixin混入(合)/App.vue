<template>
    <div>
        <!-- 使用组件 -->
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>

// mixin(混入)

// 1. 功能：可以把多个组件共用的配置提取成一个混入对象

// 2. 使用方式：

//     第一步定义混合：

//     ```
//     {
//         data(){....},
//         methods:{....}
//         ....
//     }
//     ```

//     第二步使用混入：

//     ​	全局混入：```Vue.mixin(xxx)```
//     ​	局部混入：```mixins:['xxx']	```
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