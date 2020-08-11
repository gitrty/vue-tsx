import { Component, Vue, Watch } from 'vue-property-decorator'
import style from './index.module.scss'
import { jump } from '@/util'
// 左侧菜单栏
const menuList: Array<MenuList> = [
  {
    iClass: 'el-icon-document',
    spanText: 'home',
    url: 'home',
    children: [
      {
        iClass: 'el-icon-document',
        spanText: 'home',
        url: 'home'
      }
    ]
  },
  {
    iClass: 'el-icon-collection-tag',
    spanText: 'about',
    url: 'about',
    children: [
      {
        iClass: 'el-icon-collection-tag',
        spanText: 'about',
        url: 'about'
      }
    ]
  },
  {
    iClass: 'el-icon-tickets',
    spanText: 'demo',
    url: 'demo',
    children: [
      {
        iClass: 'el-icon-tickets',
        spanText: 'demo',
        url: 'demo'
      }
    ]
  }
]

@Component
export default class LeftMenu extends Vue {
  private defaultActive = ''

  @Watch('$route', { immediate: true })
  routeChange() {
    this.defaultActive = this.$route.name as string
  }

  render() {
    const { defaultActive } = this
    return (
      <el-menu
        text-color="#ffffff"
        active-text-color="#409EFF"
        class={style.menu}
        default-active={defaultActive}
        background-color="#545c64">
        {menuList.map((item, index) => (
          <el-submenu index={index.toString()}>
            <template slot="title">
              <i class={item.iClass}></i>
              <span>{item.spanText}</span>
            </template>
            {item.children &&
              item.children.map((cItem: any, cIndex: number) => (
                <el-menu-item-group>
                  <el-menu-item
                    index={cItem.url}
                    onClick={() => {
                      jump(cItem.url)
                    }}>
                    <i class={item.iClass}></i>
                    {cItem.spanText}
                  </el-menu-item>
                </el-menu-item-group>
              ))}
            {/* <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> */}
          </el-submenu>
        ))}
      </el-menu>
    )
  }
}
