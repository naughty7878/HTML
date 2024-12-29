
<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
        <h3>我在{{$store.state.school}}，学习{{$store.state.subject}}</h3>

        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>



<script>
export default {
    name: "Count",
    data() {
        return {
            n: 1, // 用户选择的数字
            // sum: 0, // 当前的和
        };
    },
    methods: {
        increment() {
            // this.sum += this.n;
            this.$store.dispatch("jia", this.n);
        },
        decrement() {
            // this.sum -= this.n;
            // this.$store.dispatch("jian", this.n);
            this.$store.commit("JIAN", this.n);
        },
        incrementOdd() {
            // if (this.sum % 2) {
            //     this.sum += this.n;
            // }
            // if (this.$store.state.sum % 2) {
            //     this.$store.dispatch("jia", this.n);
            // }
            this.$store.dispatch("jiaOdd", this.n);
        },
        incrementWait() {
            // setTimeout(() => {
            //     // this.sum += this.n;
            //     this.$store.dispatch("jia", this.n);
            // }, 1000);
            this.$store.dispatch("jiaWait", this.n);
        },
    },
};
</script>


<style scoped>
</style>>


