<template>
  <div class="person">
    <h2>姓名：{{name}}, n1 = {{n1}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, toRef, toRefs} from "vue";

// 数据
let person = reactive({
  name: '张三',
  age: 18
})

let {name, age} = toRefs(person);
let x = toRefs(person);
console.log(x);
let n1 = toRef(person, 'name');

// 方法
function changeName() {
  // person.name += '~'
  name.value += '~'
  n1.value += '~'
}
function changeAge() {
  // person.age += 1
  age.value += 1
}
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