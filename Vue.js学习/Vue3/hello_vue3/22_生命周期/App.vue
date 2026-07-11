<template>
  <div class="app">
    <Person v-if="isShow"/>
  </div>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue'
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

const isShow = ref(true)

// 生命周期函数
console.log('父---setup')

onBeforeMount(() => {
  console.log('父---挂载之前')
})
onMounted(() => {
  console.log('父---挂载完毕')
})
onBeforeUpdate(() => {
  console.log('父---更新之前')
})
onUpdated(() => {
  console.log('父---更新完毕')
})
onBeforeUnmount(() => {
  console.log('父---卸载之前')
})
onUnmounted(() => {
  console.log('父---卸载完毕')
})
</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>