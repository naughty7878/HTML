<template>
   <div class="todo-container">
    <div class="todo-wrap">
      <!-- <TodoHeader :addTodo="addTodo" /> -->
      <!-- 给TodoHeader对象绑定addTodo事件监听 -->
      <!-- <TodoHeader @addTodo="addTodo" /> -->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" />
      <!-- <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos" /> -->
      <TodoFooter>
        <input type="checkbox" v-model="checkAll" slot="checkAll"/>
        <span slot="size">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>

import PubSub from 'pubsub-js'

// 1、引入组件
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'

import storageUtils from './utils/storageUtils.js'

// 配置对象(与vue一致)
export default {
  // 2、映射组件标签
  components: {
    TodoHeader,
    TodoFooter,
    TodoList
  },
  // data : {}
  // 必须写函数，返回一个对象
  data () {
    return {
      // 数据在那个组件，更新数据的行为就应该在那个组件
      // todos: [
      //   {title: '吃饭', complete: false},
      //   {title: '睡觉', complete: true},
      //   {title: 'coding', complete: false}
      // ]

      // 从LocalStorage 读取 todos
      // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      todos: storageUtils.readTodos()
    }
  },

  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },

    checkAll: {
      get () { // 决定是否勾选
        return this.completeSize === this.todos.length && this.completeSize > 0
      },

      set (value) { // 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
        this.selectAllTodos(value)
      }
    }
  },

  // mounted 执行异步代码块
  mounted () {
    // 给 <TodoHeader /> 绑定addTodo 事件监听
    // this.$on('addTodo', this.addTodo) // 给app绑定了监听
    this.$refs.header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  methods: {
    // 添加
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    // 删除
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有完成的
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选或者全不选
    selectAllTodos (isSelectAll) {
      this.todos.forEach(todo => {
        todo.complete = isSelectAll
      })
    }
  },
  watch: {
    // 监视
    todos: {
      deep: true, // 深度监视
      // handler: function (newValue) {
      //   // 将todos最新值保存到 LocalStorage
      //   window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      // }
      handler: storageUtils.saveTodos
    }
  }
}
</script>

<style>

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
