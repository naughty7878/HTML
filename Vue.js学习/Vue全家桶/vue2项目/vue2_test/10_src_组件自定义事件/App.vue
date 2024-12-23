<template>
    <div id="app" class="app">
        <h2>{{ msg }}, 学生姓名是：</h2>
        <!-- 使用组件 -->

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>

        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on）
        <Student @atguigu="getStudentName" @demo="showDemo"></Student>
        <!-- <Student @atguigu.once="getStudentName"></Student> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="student" @click.native="show"></Student> -->
    </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
// css 冲突时，根据引入顺序 Student 中的css会覆盖 School 中的css

export default {
    name: "App",
    // 注册组件
    components: {
        Student,
        School,
    },
    data() {
        return {
            msg: "你好呀",
        };
    },
    mounted() {
        // 这种也能绑定自定义事件
        // this.$refs.student.$on("atguigu", this.getSchoolName);
        // 只触发一次
        // this.$refs.student.$once("atguigu", this.getSchoolName);
    },
    methods: {
        getSchoolName(name) {
            console.log("App收到了学校名：", name);
        },
        getStudentName(name) {
            console.log("demo被调用了", name);
        },
        showDemo() {
            console.log("showDemo被调用了");
        },
        show(){
            alert(123)
        },
    },
};
</script>

<style scoped>
/* scoped : 表明样式只对当前组件生效，其他组件或子组件不生效 */
.app {
    background-color: gray;
    padding: 10px;
}
</style>