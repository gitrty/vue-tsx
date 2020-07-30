import { Vue, Component } from 'vue-property-decorator'
import Com1 from './component/com1'

@Component({
    components: {
        Com1
    }
})

export default class Home extends Vue {
    render() {
        return (
            <div>
                <div>home组件</div>
                <Com1 msg={'父组件发送给子组件的数据'} onFun={(i: number) => { console.info(i) }} />
            </div>
        )
    }
}