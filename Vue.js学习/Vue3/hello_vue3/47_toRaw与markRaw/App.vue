<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>person2：{{ person2 }}</h2>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
import {markRaw, reactive, toRaw} from "vue";
// 数据
let person = reactive({
  name: '张三',
  age: 18
})
let person2 = toRaw(person)

let car = markRaw({ brand: '奔驰', price: 100})
let car2 = reactive(car)

// 方法
function changeAge() {
  person.age += 1
}

console.log('响应式数据', person)
console.log('原始数据', person2)
console.log('数据car', car)
console.log('数据car2', car2)

</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>