<template>
   <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos" />
    </div>
  </div>
</template>

<script>
// 1、引入组件
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'

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
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
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
      handler: function (newValue) {
        // 将todos最新值保存到 LocalStorage
        window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      }
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
