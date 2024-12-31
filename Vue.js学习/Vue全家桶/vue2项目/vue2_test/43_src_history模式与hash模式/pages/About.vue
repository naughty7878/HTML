
<template>
    <h2>我是About的内容</h2>
</template>



<script>
export default {
    name: "About",
    mounted() {
        console.log("About组件挂载完毕了");
        window.aboutRoute = this.$route;
        window.aboutRouter = this.$router;
    },
    beforeDestroy() {
        console.log("About组件即将被销毁了");
    },
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter");
        // 去哪里
        console.log("to", to);
        // 来自哪里
        console.log("from", from);
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") === "atguigu") {
                next();
            } else {
                alert("学校名不对，无权限查看");
            }
        } else {
            next();
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log("beforeRouteLeave");
        // 去哪里
        console.log("to", to);
        // 来自哪里
        console.log("from", from);
        // 修改文档title
        // document.title = to.meta.title || "系统";
        // 放行
        next();
    },
};
</script>


<style scoped>
</style>>


