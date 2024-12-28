<template>
    <div>
        <h1>Test2</h1>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！Hello</h1>
        </transition>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊！1</h1>
            <h1 v-show="isShow" key="2">你好啊！2</h1>
        </transition-group>
    </div>
</template>



<script>
export default {
    name: "Test2",
    data() {
        return {
            isShow: true,
        };
    },
};
</script>


<style scoped>
h1 {
    background-color: orange;
    /* transition: 1s linear; */
}
/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
/* 激活样式 */
.hello-enter-active,
.hello-leave-active {
    transition: 1s linear;
}
</style>>

