<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"/><br>
    名：<input type="text" v-model="lastName"/><br>
    <button @click="changeFullName">将全名改为李四</button><br>
    全名：<span>{{ fullName }}</span><br>
    全名：<span>{{ fullName }}</span><br>
    全名：<span>{{ fullName }}</span><br>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

let firstName = ref('张')
let lastName = ref('三')

// 定义一个计算属性，只读的
// let fullName = computed(() => {
//   console.log('firstName.value + \'-\' + lastName.value', firstName.value + '-' + lastName.value)
//   return firstName.value + '-' + lastName.value
// })

// 定义一个计算属性，可读可写
let fullName = computed({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(val) {
    // console.log(val)
    const [str1, str2] = val.split(' ');
    firstName.value = str1 || '';
    lastName.value = str2 || '';
  }
})

function changeFullName() {
  fullName.value = '李 四'
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