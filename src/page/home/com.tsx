
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Component as tsc } from 'vue-tsx-support'
// 使用vue-tsx-support 中Component，可以更好的支持props和emit，防止命令行报错
// Prop 接收的数据和 Emit 发送的数据都需要定义类型，否则命令行会报错
interface Props {
    msg?: string
    onFun: (i: number) => void;
}

@Component
export default class Com1 extends tsc<Props> {
    @Prop({ required: false })
    readonly msg?: string;

    // 父组件通过 onFun 接收自定义事件
    @Emit('fun')
    public returnValue(): number {
        console.info(123)
        return 10
    }

    render() {
        const { msg, returnValue } = this
        return (
            <div>
                <div>子组件1</div>
                <div onClick={returnValue}>{msg}</div>
            </div>
        )
    }
}