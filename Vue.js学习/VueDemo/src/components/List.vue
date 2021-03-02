<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
// 1、引入组件
import Item from './Item.vue'
// 向外默认暴露组件
export default {
  // 声明接受属性,这个属性就会成为组件的对象属性
  props: ['comments'],
  components: {
    Item
  }
}
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
