<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>


<script>
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
        };
    },
    mounted() {
        console.log("Student", this.x);
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello', this.name);
        },
    },
};
</script>

<style scoped>
/* 组件的样式 */
.student {
    background-color: skyblue;
}
</style>
