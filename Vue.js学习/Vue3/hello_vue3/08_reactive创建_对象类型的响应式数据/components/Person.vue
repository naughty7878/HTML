<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  name: 'Person'-->
<!--}-->
<!--</script>-->
<script lang="ts" setup>
import {reactive} from "vue";
// 数据
let car = reactive({brand: '奔驰', price: 100})
let games = reactive([
  {id: '0001', name: 'LOL'},
  {id: '0002', name: 'Dota'},
  {id: '0003', name: 'CS'},
])

// 方法
function changePrice() {
  car.price += 10
  console.log(car.price)
}

function changeFirstGame() {
  if (games[0]) {  // 安全检查
    games[0].name = 'WOW';
  }
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