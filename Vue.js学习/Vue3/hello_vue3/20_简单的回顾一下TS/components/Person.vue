<template>
  <div class="person">

  </div>
</template>

<script lang="ts" setup>
import {type PersonInter, type Persons} from '@/types'

// 使用泛型
// let person:PersonInter = {id: '001', name:'张三', age: 20}

// let personList:Array<PersonInter> = [
//   {id: '001', name:'张三', age: 20},
//   {id: '002', name:'李四', age: 18},
//   {id: '003', name:'王五', age: 19}
// ]
let personList:Persons =  [
  {id: '001', name: '张三', age: 20},
  {id: '002', name: '李四', age: 18},
  {id: '003', name: '王五', age: 19}
]
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