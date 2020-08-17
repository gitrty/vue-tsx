import { Vue, Component } from 'vue-property-decorator'
import Cookies from 'js-cookie'
import Dialog from '@/common/dialog'

@Component({
  components: {
    Dialog
  }
})

export default class About extends Vue {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}
