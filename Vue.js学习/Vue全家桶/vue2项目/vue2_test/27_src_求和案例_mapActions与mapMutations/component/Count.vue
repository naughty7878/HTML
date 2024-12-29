
<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>

        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>



<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1, // 用户选择的数字
            // sum: 0, // 当前的和
        };
    },
    computed: {
        // 使用vuex中的mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),

        // 使用vuex中的mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(["sum", "school", "subject"]),

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
        // increment() {
        //     this.$store.commit("JIA", this.n);
        // },
        // decrement() {
        //     this.$store.commit("JIAN", this.n);
        // },

        // 使用vuex中的mapMutations生成方法，调用commit联系mutations（对象写法）
        ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
        
        // 使用vuex中的mapMutations生成方法，调用commit联系mutations（数组写法）
        // ...mapMutations(["JIA", "JIAN"]),

        // incrementOdd() {
        //     this.$store.dispatch("jiaOdd", this.n);
        // },
        // incrementWait() {
        //     this.$store.dispatch("jiaWait", this.n);
        // },

        // 使用vuex中的mapActions生成方法，调用dispatch联系actions（对象写法）
        ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
        
        // 使用vuex中的mapActions生成方法，调用commit联系mutations（数组写法）
        // ...mapActions(["jiaOdd", "j iaWait"]),
    },
};
</script>


<style scoped>
</style>>


