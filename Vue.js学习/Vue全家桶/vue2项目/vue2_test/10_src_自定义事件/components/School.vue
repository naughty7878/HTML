<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名字给APP</button>
    </div>
</template>


<script>
export default {
    name: "School",
    props: ["getSchoolName"],
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
        sendSchoolName() {
            this.getSchoolName(this.name)
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
</style>
