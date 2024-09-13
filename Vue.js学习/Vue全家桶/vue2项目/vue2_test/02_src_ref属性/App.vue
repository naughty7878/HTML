<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点我显示上方DOM元素</button>
        <!-- 使用组件 -->
        <School ref="sch"></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
// 在脚手架中 "./School.vue" "./School" 都可以
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: "App",
    // 注册组件
    components: {
        School,
        Student,
    },
    data() {
        return {
            msg: "欢迎学习Vue",
        };
    },
    methods: {
        showDom() {
            console.log(this);
            console.log(this.$refs);
            // DOM元素: <h1 v-text="msg" ref="title"></h1>
            console.log(this.$refs.title);
            // VueComponent: 学校vc对象
            console.log(this.$refs.sch);
        },
    },
};
</script>

<style>
</style>