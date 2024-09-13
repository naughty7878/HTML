<template>
    <!-- 组件的结构 -->
    <div class="bg">
        <h2 @click="showName" class="title">学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
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
    methods: {
        showName() {
            alert(this.name);
        },
    },
};
</script>

<style scoped>
/* 组件的样式 */
.student {
    background-color: skyblue;
}
.bg {
    background-color: skyblue;
}
</style>
