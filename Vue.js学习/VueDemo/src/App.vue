<template>
   <div>
     <div v-if="!repoUrl">loading</div>
    <div v-else>most start repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
// 1、引入组件
// import TodoFooter from './components/TodoFooter.vue'
// 引入axios
import axios from 'axios'

// 配置对象(与vue一致)
export default {
  // 2、映射组件标签
  components: {

  },
  // data : {}
  // 必须写函数，返回一个对象
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 使用 vue-resource 发送 ajax 请求获取数据
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // this.$http.get(url).then(
    //   (response) => {
    //     // success callback
    //     console.log(response.data) // 返回结果数据
    //     const result = response.data
    //     const mostRepo = result.items[0]
    //     this.repoUrl = mostRepo.html_url
    //     this.repoName = mostRepo.name
    //   },
    //   (response) => {
    //     // error callback
    //     alert('请求失败')
    //   }
    // )

    // 使用 axios 发送 ajax 请求获取数据
    axios.get(url).then(
      response => {
        console.log(response.data) // 得到返回结果数据
        const result = response.data
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}
</script>

<style>

</style>
