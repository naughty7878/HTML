<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>求和Sum2为：{{ sum2 }}</h2>
    <h2>当前car为：{{ car }}</h2>
    <h2>当前car2为：{{ car2 }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeSum2">sum2+1</button>
    <button @click="changeBrand">修改car品牌</button>
    <button @click="changeBrand2">修改car2品牌</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, readonly, reactive, shallowReadonly} from "vue";
// 数据
const sum = ref(0)
const sum2 = readonly(sum)
let car = reactive({
  brand: '奔驰',
  price: 100
})
let car2 = readonly(car)

// 方法
function changeSum() {
  sum.value += 1
}
function changeSum2() {
  // 无法修改只读变量
  // sum2.value += 1
}
function changeBrand() {
  car.brand = '宝马'
}
function changeBrand2() {
  // 无法修改只读变量
  // car2.brand = '宝马'
}


</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>