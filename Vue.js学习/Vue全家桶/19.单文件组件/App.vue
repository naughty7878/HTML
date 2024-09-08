<template>
    <div>
        <!-- 使用组件 -->
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
// 在脚手架中 "./School.vue" "./School" 都可以
import School from "./School.vue";
import Student from "./Student.vue";

export default {
    name: "App",
    // 注册组件
    components: {
        School,
        Student,
    },
};
</script>

<style>
</style>