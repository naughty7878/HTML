<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大十倍后：{{ bigSum }}</h2>
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
import {storeToRefs} from "pinia";

const countStore = useCountStore();
// 使用storeToRefs只会关注store种的数据，不会对方法进行ref包裹
const { sum, bigSum } = storeToRefs(countStore);

// 数据
let n = ref((1))

// 方法
function add() {
  countStore.increment(n.value)
}

function minus() {
  countStore.sum -= n.value;
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