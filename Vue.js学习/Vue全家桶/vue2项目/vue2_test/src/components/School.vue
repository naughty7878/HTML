<template>
    <!-- 组件的结构 -->
    <div class="bg">
        <h2 @click="showName" class="title">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>


<script>
export default {
    name: "School",
    data() {
        return {
            name: "尚硅谷",
            address: "深圳",
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
/* scoped : 表明样式只对当前组件生效，其他组件或子组件不生效 */
/* 组件的样式 */
.school {
    background-color: orange;
}
.bg {
    background-color: orange;
}
</style>
