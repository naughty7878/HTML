<template>
    <!-- 组件的结构 -->
    <li>
        <label>
            <!-- 不建议这样操作
            有点违反原则，数据在哪里，修改方法就在哪里-->
            <!-- <input type="checkbox" v-model="todo.done" /> -->

            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />

            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>


<script>
import pubsub from 'pubsub-js'

export default {
    name: "Item",
    // 声明接受tudo对象
    props: ["todo"],
    methods: {
        handleCheck(id) {
            // 通知todo对象数据操作
            // console.log(id);
            // this.checkTodo(id);
            this.$bus.$emit("checkTodo", id);
        },
        handleDelete(id) {
            if (confirm("确认删除吗？")) {
                // console.log(id);
                // this.deleteTodo(id);
                // this.$bus.$emit("deleteTodo", id);
                // 发布消息
                pubsub.publish('deleteTodo', id)
            }
        },
    },
};
</script>


<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover {
    background-color: mediumaquamarine;
}
li:hover button {
    display: block;
}
</style>
