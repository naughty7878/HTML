<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
// 数据
let sum = ref(0)
// 方法
function changeSum() {
  sum.value += 1
}
// 情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log('sum变化了', newVal, oldVal)
  if (newVal >= 10) {
    // 停止监视
    stopWatch()
  }
})
console.log('stopWatch', stopWatch)
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