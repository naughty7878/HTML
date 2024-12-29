// 该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
// 引入插件vuex
import Vuex from 'vuex'
// 使用插件Vuex
Vue.use(Vuex)


// 准备actions -> 用于响应组件中的动作
const actions = {
    jia(context, value) {
        // context 上下文
        console.log('actions中的jia被调用了', context, value)
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions中的jian被调用了', context, value)
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了', context, value)
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了', context, value)
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    },
}

// 准备mutations -> 用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', state, value)
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了', state, value)
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的ADD_PERSON被调用了', state, value)
        state.personList.push(value) 
    },
}

// 准备state -> 用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [{
        id: '001', name: '张三'
    }]
}

// 准备state,非必须 -> 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

// 创建store，并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters, // 非必须 
})
