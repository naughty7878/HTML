<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2 @click="showName">学生名称：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>


<script>
export default {
    name: "Student",
    data() {
        console.log("vc", this);
        return {
            name: "张三",
            sex: "男",
        };
    },
    methods: {
        showName() {
            csl
            alert(this.name);

        },
    },
};
</script>

