<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>


<script>
// 组件交互相关的代码(数据\方法等等)
// export default Vue.extend({
// Vue.extend(options) 可以省略，直接写 opotions 注册组件的时候vue会自动判断
export default {
    // 最好跟文件名一致
    name: "Student",
    data() {
        return {
            studentName: "张三",
            age: 18,
        };
    }
};
</script>

