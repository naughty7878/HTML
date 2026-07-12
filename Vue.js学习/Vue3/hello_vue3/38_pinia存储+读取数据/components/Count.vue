<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useCountStore} from "@/store/count.ts";

const countStore = useCountStore();
// 以下两种方式都可以拿到state数据
// console.log('countStore', countStore.sum);
// console.log('countStore', countStore.$state.sum);

// 数据
// let sum = ref(1)
let n = ref((1))

// 方法
function add() {
  // sum.value += n.value;
}

function minus() {
  // sum.value -= n.value;
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>