import {defineStore} from "pinia";

export const useCountStore = defineStore("count", {
    // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions: {
        increment(value) {
            console.log("increment被调用了", value)
            this.sum += value
        }
    },
    // 存储数据的地方
    state() {
        return {
            sum: 6
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
})