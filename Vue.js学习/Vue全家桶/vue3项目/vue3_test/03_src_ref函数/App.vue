<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>工作种类：{{job.type}}</h2>
    <h2>工作薪水：{{job.salary}}</h2>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
    name: "App",
    setup() {
        // 数据
        let name = ref("张三");
        let age = ref(18);
        let job = ref({
            type: '前端工程师',
            salary: '30K',
        })

        // 方法
        function changeInfo() {
            name.value = "李四";
            age.value = 48;
            job.value.type = "后端工程师"
            console.log("name", name);
            console.log("job", job);
        }

        // 返回一个对象（常用）
        return {
            name,
            age,
            job,
            changeInfo,
        };
    },
};
</script>

<style>
</style>
