<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo" />
    <!-- 3、使用组件标签 -->
    <HelloWorld />
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
      <Add :addComment="addComment"/>
      <!-- 右边 -->
      <!-- 组件变量传递 -->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
// 1、引入组件
import HelloWorld from './components/HelloWorld.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'

// 配置对象(与vue一致)
export default {
  // 2、映射组件标签
  components: {
    HelloWorld,
    Add,
    List
  },
  // data : {}
  // 必须写函数，返回一个对象
  data () {
    return {
      // 数据在那个组件，更新数据的行为就应该在那个组件
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
  },
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 删除指定下标的评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
}
</style>
