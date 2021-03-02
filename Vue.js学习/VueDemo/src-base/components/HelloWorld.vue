<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
// 向外默认暴露组件
export default {
  data () {
    return {
      msg: 'Hello Vue Componment'
    }
  }
}
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
