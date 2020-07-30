import { VueConstructor } from 'vue'
function filterA(a: number, b: number) {
  return a + b
}
export default {
  install(Vue: VueConstructor) {
    Vue.filter('filterA', filterA)
  }
}
