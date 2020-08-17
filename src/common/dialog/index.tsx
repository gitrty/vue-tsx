import { Vue, Component, Prop } from 'vue-property-decorator'
// import { Component as tsc } from 'vue-tsx-support'

// interface Props {
//     title?: string
//     content?: string
// }

@Component
export default class DiaLog extends Vue {
    @Prop({ required: false, default: 'tit' })
    readonly title?: string

    @Prop({ required: false, default: 'content' })
    readonly content?: string

    @Prop({ required: false, default: () => { } })
    readonly success?: Function

    private dialogVisible: boolean = true

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