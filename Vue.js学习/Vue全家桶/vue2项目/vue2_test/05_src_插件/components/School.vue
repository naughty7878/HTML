<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2 @click="showName">学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="hello">点我测试hello方法</button>
    </div>
</template>


<script>
export default {
    name: "School",
    data() {
        console.log("vc", this);
        return {
            name: "尚硅谷abcdefg",
            address: "深圳",
        };
    },
    methods: {
        showName() {
            console.log("this", this);
            alert(this.name);
        },
    },
};
</script>

