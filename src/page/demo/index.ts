import Vue from 'vue'
import Component from 'vue-class-component'

interface Chifan {
  (): string
}
@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Hello World!'
  created() {
    // console.info(123)
    this.chifan()
  }
  get newMessage() {
    return this.message + 'cherish'
  }
  chifan: Chifan = () => {
    // console.info(45)
    return '123'
  }
}
