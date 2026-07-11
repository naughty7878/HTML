<template>
  <ul class="news-detail">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

let route = useRoute();
let {query} = toRefs(route);
console.log(route)
</script>

<style scoped>
.news-detail {
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0;
  display: grid;
  align-content: start;
  gap: 14px;
  list-style: none;
}

.news-detail li {
  position: relative;
  padding: 14px 16px 14px 18px;
  border: 1px solid #e4ece8;
  border-radius: 8px;
  color: #2f3f38;
  font-size: 16px;
  line-height: 1.6;
  background: linear-gradient(90deg, #f7fbf8 0%, #ffffff 100%);
}

.news-detail li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 12px;
  width: 4px;
  border-radius: 999px;
  background: #64967e;
}

.news-detail li:first-child {
  color: #315f4a;
  font-weight: 700;
}

@media (max-width: 680px) {
  .news-detail li {
    padding-right: 12px;
    font-size: 15px;
  }
}
</style>
