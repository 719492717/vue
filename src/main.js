import iView from 'iview'
import Vue from 'vue'
import App from './App'
import router from './router'

//Vue.config.productionTip 在生产环境设置成false，开发环境设置成true; (可以查看警告信息)
Vue.config.productionTip = false
// 如果不想使用iview的UI,可以不使用
Vue.use(iView)

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default vm