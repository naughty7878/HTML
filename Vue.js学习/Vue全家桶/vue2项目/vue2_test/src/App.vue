<template>
    <div>
        <h2 class="title">HELLO</h2>
        <!-- 使用组件 -->
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
// css 冲突时，根据引入顺序 Student 中的css会覆盖 School 中的css

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

<style scoped>
/* scoped : 表明样式只对当前组件生效，其他组件或子组件不生效 */
    .title {
        color: red;
    }
</style>