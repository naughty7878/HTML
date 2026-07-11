<template>
  <div class="news">
    <!-- 导航区 -->
    <ul class="news-list">
      <li v-for="news in newsList" :key="news.id" class="news-item">
        <!-- 第一种写法 -->
<!--        <RouterLink-->
<!--            class="news-link"-->
<!--            active-class="active"-->
<!--            :to="`/news/newDetail/${news.id}/${news.title}/${news.content}`"-->
<!--        >-->
<!--          {{ news.title }}-->
<!--        </RouterLink>-->
        <!-- 第一种写法 -->
        <RouterLink
            class="news-link"
            active-class="active"
            :to="{
              name: `xinwenxiangqing`,
              params: {
                id: news.id,
                title: news.title,
                content: news.content,
              }
            }"
        >
          {{ news.title }}
        </RouterLink>

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
  {id: '003', title: '好消息', content: '快放假了'}
])
</script>

<style scoped>
/* 新闻 */
.news {
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: minmax(180px, 260px) 1fr;
  gap: 20px;
  background: #f7faf8;
  border-radius: 10px;
}

.news-list {
  margin: 0;
  list-style: none;
  padding: 12px;
  border: 1px solid #dce9e2;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(46, 82, 64, 0.08);
}

.news-item + .news-item {
  margin-top: 10px;
}

.news-link {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #3f715b;
  background: #f2f7f4;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.news-link:hover,
.news-link:focus-visible,
.news-link.active {
  color: #ffffff;
  background: #64967e;
  box-shadow: 0 8px 16px rgba(100, 150, 126, 0.22);
  transform: translateY(-1px);
}

.news-content {
  min-width: 0;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #dce9e2;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(46, 82, 64, 0.08);
  overflow: auto;
}

@media (max-width: 680px) {
  .news {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 100%;
  }

  .news-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
  }

  .news-item + .news-item {
    margin-top: 0;
  }
}
</style>
