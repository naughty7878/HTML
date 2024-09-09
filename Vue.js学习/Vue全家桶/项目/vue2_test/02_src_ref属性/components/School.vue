<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我显示学校名</button>
    </div>
</template>


<script>
// 组件交互相关的代码(数据\方法等等)
// export default Vue.extend({
// Vue.extend(options) 可以省略，直接写 opotions 注册组件的时候vue会自动判断
export default {
    // 最好跟文件名一致
    name: "School",
    data() {
        return {
            schoolName: "尚硅谷",
            address: "深圳",
        };
    },
    methods: {
        showName() {
            console.log("showName", this);
            console.log("x", this.x);
            alert(this.schoolName);
        },
    },
};
</script>


<style>
/* 组件的样式 */
.school {
    background-color: orange;
}
</style>
