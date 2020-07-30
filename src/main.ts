import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue-tsx-support/enable-check'
import element from '@/plugin/element'
import filter from '@/filter'
import directive from '@/directive'

Vue.config.productionTip = false

Vue.use(element)
  .use(filter)
  .use(directive)

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
