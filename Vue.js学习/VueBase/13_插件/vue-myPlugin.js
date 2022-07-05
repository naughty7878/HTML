// 匿名函数自调用
(function (window) {
  // 向外暴露的插件对象
  const MyPlugin = {}
  // 插件对象必须要有install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    // 给vue添加一个添加一个全局方法
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    // 给vue添加一个my-directive指令
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 4. 添加实例方法
    // 给vue实例添加方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  // 向外暴露
  window.MyPlugin = MyPlugin
})(window)
