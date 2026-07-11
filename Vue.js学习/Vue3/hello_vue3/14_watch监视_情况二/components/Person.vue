<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
// 数据
let person = ref({
  name: '张三',
  age: 18
})
// 方法
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {name: '李四', age: 20}
}
// 情况二：监视【ref】定义的【对象类型】数据
// 监视的是对象地址值的变化
// watch(person, (newVal, oldVal) => {
//   console.log('person变化了', newVal, oldVal)
// })
// deep 深度监视
// immediate 立刻监视
watch(person, (newVal, oldVal) => {
  console.log('person变化了', newVal, oldVal)
}, {deep: true, immediate: true})
</script>

<style scoped>
.person {
  background: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 10px;
}

li {
  font-size: 20px;
}
</style>