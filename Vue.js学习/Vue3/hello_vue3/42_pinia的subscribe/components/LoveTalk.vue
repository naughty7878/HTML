<template>
  <div class="talk">
    <button @click="talkStore.getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {nanoid} from 'nanoid'
import {useTalkStore} from "@/store/loveTalk.ts";
import {storeToRefs} from "pinia";

const talkStore = useTalkStore();

talkStore.$subscribe((mutation, state) => {
  console.log("talkStore里面的数据变化了", mutation, state);
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
})

</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>