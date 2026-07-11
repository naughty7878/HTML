<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li  v-for="news in newsList" :key="news.id">
        <RouterLink :to="{name: 'xinwenxiangqing'}">{{news.title}}</RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";
  const newsList = reactive([
    {id: '001', title: '世界杯', content: '挪威夺冠'},
    {id: '002', title: '天气预报', content: '特大暴雨'},
    {id: '002', title: '好消息', content: '快放假了'}
  ])
</script>

<style scoped>
.news {
  display: flex;
}
</style>