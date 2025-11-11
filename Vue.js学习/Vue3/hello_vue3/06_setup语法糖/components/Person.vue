<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeNmae">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person'
}
</script>
<script lang="ts" setup>
// 数据
let name = '张三'  // 注意此时的name不是响应式的
let age = 18
let tel = '13888888888'
// let x = this.d // 无法使用 data里面的 d，，因为setup比beforeCreate先执行


// 函数
function changeNmae() {
  name = 'zhang-san'
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