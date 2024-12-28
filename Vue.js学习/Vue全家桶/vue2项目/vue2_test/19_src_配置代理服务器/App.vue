<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
                <button @click="getCars">获取汽车信息</button>

    </div>
</template> 

<script>
import axios from "axios";
export default {
    name: "App",
    methods: {
        getStudents() {
            console.log("获取学生信息");
            axios
                .get("http://localhost:8080/api/students")
                .then((response) => {
                    console.log("请求成功", response.data);
                })
                .catch((error) => {
                    console.log("请求失败", error.data);
                })
                .finally(() => {
                    console.log("操作完成");
                });
        },
        getCars() {
            console.log("获取汽车信息");
            axios
                .get("http://localhost:8080/demo/cars")
                .then((response) => {
                    console.log("请求成功", response.data);
                })
                .catch((error) => {
                    console.log("请求失败", error.data);
                })
                .finally(() => {
                    console.log("操作完成");
                });
        },
    },
};
</script>

<style>
</style>