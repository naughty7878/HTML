const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决：error  Component name "Student" should always be multi-word
  lintOnSave: false, //关闭语法检查
})
