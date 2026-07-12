<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts" setup>
import useMsgRef from "@/hooks/useMsgRef.ts";

let {msg} = useMsgRef('hello', 2000)

</script>

<style scoped>
.app {
  background-color: #f5f5f5;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>