<template>
  <div>
      <p class="msg">{{msg}}</p>
  </div>
</template>

<script>

// 配置对象(与vue一致)
export default {
  // data : {}
  // 必须写函数，返回一个对象
  data () {
    return {
      msg: 'Hello Vue Component'
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
