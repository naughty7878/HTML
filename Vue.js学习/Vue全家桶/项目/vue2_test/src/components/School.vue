<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>


<script>
// 引入一个混合
import { mix } from "../mixin";
export default {
    name: "School",
    data() {
        console.log("vc", this);
        return {
            name: "尚硅谷",
            address: "深圳",
        };
    },
    mixins: [mix],
    mounted() {
        console.log('我是School')
    },
};
</script>

