<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2 @click="showName">学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>求和：{{num}}</h2>
        <button @click="add">number++</button>
        <button @click="sendStudentName">把学生名字给APP</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例（vc）</button>
    </div>
</template>


<script>
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
            num: 0,
        };
    },
    methods: {
        showName() {
            alert(this.name);
        },
        add() {
            console.log("add被调用了", this.num);
            this.num++;
        },
        sendStudentName() {
            // 出发Student 组件实例身上的atguigu事件
            this.$emit("atguigu", this.name);
            // this.$emit("demo");
        },
        unbind() {
            // 解绑组件的atguigu事件，解绑一个自定义事件
            this.$off("atguigu");
            // 解绑多个自定义事件
            // this.$off(["atguigu", "demo"]);
            // 解绑所有自定义事件
            // this.$off();
        },
        death() {
            // 销毁了当前Student组件的实例，销毁受所有Student实例的自定义事件都不奏效了
            this.$destroy();
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
