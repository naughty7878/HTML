<template>
  <h2>新闻</h2>
</template>

<script setup lang="ts">
// 生命周期函数
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

console.log('新闻-setup')

onBeforeMount(() => {
  console.log('新闻-挂载之前')
})
onMounted(() => {
  console.log('新闻-挂载完毕')
})
onBeforeUpdate(() => {
  console.log('新闻-更新之前')
})
onUpdated(() => {
  console.log('新闻-更新完毕')
})
onBeforeUnmount(() => {
  console.log('新闻-卸载之前')
})
onUnmounted(() => {
  console.log('新闻-卸载完毕')
})
</script>

<style scoped>

</style>