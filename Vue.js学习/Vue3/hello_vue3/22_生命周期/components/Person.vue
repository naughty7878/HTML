<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

// 数据
let sum = ref(0)
// 方法
function changeSum() {
  sum.value += 1
}
// 生命周期函数
console.log('setup')

onBeforeMount(() => {
  console.log('挂载之前')
})
onMounted(() => {
  console.log('挂载完毕')
})
onBeforeUpdate(() => {
  console.log('更新之前')
})
onUpdated(() => {
  console.log('更新完毕')
})
onBeforeUnmount(() => {
  console.log('卸载之前')
})
onUnmounted(() => {
  console.log('卸载完毕')
})
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