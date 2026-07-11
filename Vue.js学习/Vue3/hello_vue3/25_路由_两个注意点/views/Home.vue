<template>
  <h2>首页</h2>
</template>

<script setup lang="ts">
// 生命周期函数
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

console.log('首页-setup')

onBeforeMount(() => {
  console.log('首页-挂载之前')
})
onMounted(() => {
  console.log('首页-挂载完毕')
})
onBeforeUpdate(() => {
  console.log('首页-更新之前')
})
onUpdated(() => {
  console.log('首页-更新完毕')
})
onBeforeUnmount(() => {
  console.log('首页-卸载之前')
})
onUnmounted(() => {
  console.log('首页-卸载完毕')
})
</script>

<style scoped>

</style>