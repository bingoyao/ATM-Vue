/**
 * 根据需要加载和注册Element组件
 */
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Card,
  Input,
  Icon,
  Tooltip,
  Container,
  Header,
  Main,
  Image,
  Carousel,
  CarouselItem,
  Divider,
  Row,
  Col,
  Dialog,
  Table,
  TableColumn,
  Message,
  Upload,
  Link,
  Tag,
  Timeline,
  TimelineItem,
  Loading,
  Select,
  Option
} from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Tooltip)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Divider)
Vue.use(Col)
Vue.use(Row)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Link)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Select)
Vue.use(Option)


Vue.prototype.$message = Message
Vue.prototype.$loading = Loading


