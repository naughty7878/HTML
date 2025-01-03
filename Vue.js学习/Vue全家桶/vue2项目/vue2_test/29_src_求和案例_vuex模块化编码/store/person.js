
// 人员管理相关的配置

import axios from 'axios'
import { nanoid } from "nanoid";

export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('http://localhost:8080')
                .then(response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: nanoid() })
                })
                .catch(error => {
                    alert(error.message)
                })
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了', state, value)
            state.personList.unshift(value)
        },
    },
    state: {
        personList: [{
            id: '001', name: '张三'
        }]
    },
    getters: {
        firstPersonName(stata) {
            return stata.personList[0].name
        },
    },
}
