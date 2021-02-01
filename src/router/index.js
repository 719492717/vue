import Home from '@/App.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  //这里可以用懒加载的import方式使用路由
  // {
  //   path: '/',
  //   component: import("../App.vue")
  // }
]

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const router = new Router({
  routes // (缩写) 相当于 routes: routes
})
export default router
