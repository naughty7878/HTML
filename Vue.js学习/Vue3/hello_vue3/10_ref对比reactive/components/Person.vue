<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <br>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  name: 'Person'-->
<!--}-->
<!--</script>-->
<script lang="ts" setup>
import {reactive, ref} from "vue";
// 数据
let car = reactive({brand: '奔驰', price: 100})
let sum = ref(0)

// 方法
function changeBrand() {
  car.brand = '宝马'
}
function changePrice() {
  car.price += 10
}
function changeCar() {
  // car = {brand: '奥托', price: 10}  // 这样写页面不更新
  // car = reactive({brand: '奥托', price: 10})  // 这样写也页面不更新

  // 下面写法页面可以更新
  car = Object.assign(car, {brand: '奥托', price: 10})
}

function changeSum() {
  sum.value += 1
  // sum = ref(9) //错误写法
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