import { VueConstructor } from 'vue'
export default {
  install(Vue: VueConstructor) {
    Vue.directive('focus', {
      inserted(el) {
        el.focus()
      }
    })
  }
}
