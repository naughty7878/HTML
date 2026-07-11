<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :key="index" :src="dog">
    <br>
    <button @click="getDog()">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup>
import useSum from "@/hooks/useSum.ts";
import useDog from "@/hooks/useDog.ts";

const {sum, changeSum} = useSum();
const {dogList, getDog} = useDog();

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

img {
  height: 200px;
  margin-right: 5px;
}
</style>