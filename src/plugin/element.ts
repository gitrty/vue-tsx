import Vue, { VueConstructor } from 'vue'
import {
  Button,
  Message,
  Card,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Popover,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Row,
  Col,
  Dialog
} from 'element-ui'
export default {
  install(Vue: VueConstructor) {
    Vue.use(Button)
      .use(Card)
      .use(Table)
      .use(TableColumn)
      .use(Form)
      .use(FormItem)
      .use(Input)
      .use(Dropdown)
      .use(DropdownItem)
      .use(DropdownMenu)
      .use(Popover)
      .use(Menu)
      .use(MenuItem)
      .use(Submenu)
      .use(MenuItemGroup)
      .use(Row)
      .use(Col)
      .use(Dialog)
  }
}
Vue.prototype.$message = Message
