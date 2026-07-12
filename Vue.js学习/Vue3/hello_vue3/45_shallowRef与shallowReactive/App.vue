<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, shallowRef, shallowReactive} from "vue";
// 数据
const sum = ref(0)
let person = reactive({name: '张三', age: 18})

// 方法
function changeSum() {
  sum.value += 1
}
function changeName() {
  person.name = '李四'
}
function changeAge() {
  person.age += 1
}
function changePerson() {
  person = Object.assign(person, {name: '王五', age: 21})
}
</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>