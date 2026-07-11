<template>
  <div class="app">
    <Person :list="persons"/>
  </div>
</template>

<script lang="ts" setup>
import Person from './components/Person.vue'
import {reactive} from 'vue'
import {type Persons} from './types'

let persons = reactive<Persons>([
  {id: '001', name: '张三', age: 20},
  {id: '002', name: '李四', age: 18},
  {id: '003', name: '王五', age: 19}
])

</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>