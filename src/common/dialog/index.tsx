import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DiaLog extends Vue {
    // 标题
    @Prop({ required: false, default: 'tit' })
    readonly title?: string

    // 内容
    @Prop({ required: false, default: 'content' })
    readonly content?: string

    // 点击确定后的回调函数
    @Prop({ required: false, default: () => { } })
    readonly success?: Function

    // dialog显示状态
    private dialogVisible: boolean = true

    // 确定
    private determine(): void {
        this.dialogVisible = false
        if (typeof this.success === 'function') {
            this.success()
        }
    }

    render() {
        const { title, content, dialogVisible, determine } = this
        return (
            <el-dialog
                title={title}
                visible={dialogVisible}
                width="30%"
                before-close={() => { this.dialogVisible = false }}>
                <span>{content}</span>
                <span slot="footer" class="dialog-footer">
                    <el-button onClick={() => { this.dialogVisible = false }}>取 消</el-button>
                    <el-button type="primary" onClick={determine}>确 定</el-button>
                </span>
            </el-dialog>
        )
    }
}