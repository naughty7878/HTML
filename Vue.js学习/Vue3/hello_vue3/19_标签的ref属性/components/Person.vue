<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

let title1 = ref()
let title2 = ref()
let title3 = ref()

function showLog() {
  // 通过ref获取元素
  console.log(title1.value)
  console.log(title2.value)
  console.log(title3.value)
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