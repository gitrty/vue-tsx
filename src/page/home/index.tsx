import { Vue, Component } from 'vue-property-decorator'
import Com from './component/com'
import Cookies from 'js-cookie'

@Component({
  components: {
    Com
  }
})
export default class Home extends Vue {
  render() {
    return (
      <div>
        <div>home组件</div>
        <Com
          msg={'父组件发送给子组件的数据'}
          onFun={(i: number) => {
            console.info(i)
          }}
        />
      </div>
    )
  }
}
