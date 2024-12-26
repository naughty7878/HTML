<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
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
    mounted() {
        console.log("School", this.x)
        this.$bus.$on('hello', (data) => {
            console.log('我是School组件，收到了数据', data);
        })
    },
    methods: {
    },
    beforeDestroy() {
        // 记得销毁
        this.$bus.$off('hello')
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
