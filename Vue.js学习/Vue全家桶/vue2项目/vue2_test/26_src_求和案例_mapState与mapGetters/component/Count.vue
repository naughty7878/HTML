
<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{$store.state.subject}}</h3>

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
import { mapState, mapGetters } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1, // 用户选择的数字
            // sum: 0, // 当前的和
        };
    },
    computed: {
        // 自己写计算属性
        // he() {
        //     return this.$store.state.sum;
        // },

        // 使用vuex中的mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),

        // 使用vuex中的mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(["sum", "school", "subject"]),

        // 自己写计算属性
        // bigSum() {
        //     return this.$store.getters.bigSum;
        // }

        // 使用vuex中的mapGetters生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({ bigSum: "bigSum"}),

        // 使用vuex中的mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(["bigSum"]),
    },
    mounted() {
        const x = mapState({ he: "sum", xuexiao: "school", xueke: "subject" });
        console.log(x);
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


