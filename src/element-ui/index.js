/* ** TOP SECRET ** */

import Vue from 'vue'
import {
  Loading,
  MessageBox,
  Message,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Select,
  Option,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Alert,
  Radio,
  RadioGroup,
  RadioButton,
  Transfer,
  Row,
  Col,
  Aside,
  Card,
  Upload,
  Tabs,
  TabPane,
  ColorPicker,
  Image,
  Popconfirm,
  Switch,
  Checkbox
} from 'element-ui'

import './element.scss'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Alert)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Transfer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Aside)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(ColorPicker)
Vue.use(Image)
Vue.use(Popconfirm)
Vue.use(Switch)
Vue.use(Checkbox)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.prototype.$ELEMENT = { size: 'small' }
