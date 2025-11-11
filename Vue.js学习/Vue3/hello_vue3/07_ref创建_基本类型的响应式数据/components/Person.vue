<template>
  <div class="person">
    <!-- 模板里面无需写value -->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeNmae">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  name: 'Person'-->
<!--}-->
<!--</script>-->
<script lang="ts" setup>
// 数据
// ref包括的数据是响应式的
import {ref} from "vue";

let name = ref('张三')
let age = 18
let tel = '13888888888'

console.log('name', name)
console.log('age', age)
console.log('tel', tel)
// 函数
function changeNmae() {
  // js里面需要写value
  name.value = 'zhang-san'
}

function changeAge() {
  age += 1
}

function showTel() {
  alert(tel)
}

// 交出去
// return {name, age, changeNmae, changeAge, showTel}
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
</style>