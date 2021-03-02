<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 左边 -->
      <Add />
      <!-- 右边 -->
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
// 1、引入组件
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
  // 2、映射组件标签
  components: {
    Add,
    List
  },
  data () {
    return {
      comments: [
        {
          name: 'Bob',
          content: 'Vue 还不错'
        },
        {
          name: 'Cat',
          content: 'Vue So Easy'
        },
        {
          name: 'Tom',
          content: 'Vue So So'
        }
      ]
    }
  }
}
</script>

<style>
</style>
