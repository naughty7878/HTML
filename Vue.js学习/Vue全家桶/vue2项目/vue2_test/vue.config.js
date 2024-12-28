const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决：error  Component name "Student" should always be multi-word
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api': ''
        },
        // ws: true, // 用于支持websocket，默认true
        // changeOrigin: true, // 用于控制请求头中的Host值，默认true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo': ''
        },
      },
    }
  }
})
