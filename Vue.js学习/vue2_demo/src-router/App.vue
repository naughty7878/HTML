<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">去首页</router-link>
    <router-link to="/hello">去Hello</router-link>
    <!-- 路由视图 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
