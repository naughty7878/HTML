<template>
    <ul>
        <li :style="{opacity}">欢迎学习</li>
        <li>
            news001
            <input type="text" />
        </li>
        <li>
            news002
            <input type="text" />
        </li>
        <li>
            news003
            <input type="text" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "News",
    // beforeDestroy() {
    //     console.log("New组件即将被销毁~");
    //     clearInterval(this.timer);
    // },
    // mounted() {
    //     // console.log("mounted");
    //     this.timer = setInterval(() => {
    //         console.log("@");
    //         this.opacity -= 0.01;
    //         if (this.opacity <= 0) this.opacity = 1;
    //     }, 16);
    // },
    activated() {
        // 激活的
        console.log("New组件激活了~");
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    deactivated() {
        // 失活的
        console.log("New组件失活了~");
        clearInterval(this.timer);
    },
    data() {
        return {
            opacity: 1,
        };
    },
};
</script>

<style>
</style>