<template>
    <div>
        <!-- 使用组件 -->
        <Student name="李四" sex="女" :age="18"></Student>
    </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";

export default {
    name: "App",
    // 注册组件
    components: {
        Student,
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