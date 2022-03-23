
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */
/* 这里是通过 './build/bin/build-entry.js' 自动生成的，不要改动！！！ */

import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Text from '../packages/text/index.js';
import Message from '../packages/message/index.js';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Icon from '../packages/icon/index.js';
import Backtop from '../packages/backtop/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
import MessageBox from '../packages/message-box/index.js';
import Dialog from '../packages/dialog/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Loading from '../packages/loading/index.js';
import Popover from '../packages/popover/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Avatar from '../packages/avatar/index.js';
import Image from '../packages/image/index.js';
import Carousel from '../packages/carousel/index.js';
import CarouselItem from '../packages/carousel-item/index.js';
import Steps from '../packages/steps/index.js';
import Step from '../packages/step/index.js';
import Dropdown from '../packages/dropdown/index.js';
import DropdownItem from '../packages/dropdown-item/index.js';
import DropdownMenu from '../packages/dropdown-menu/index.js';
import Tabs from '../packages/tabs/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Menu from '../packages/menu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import MenuItemGroup from '../packages/menu-item-group/index.js';
import Submenu from '../packages/submenu/index.js';
import Input from '../packages/input/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import DatePicker from '../packages/date-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import TimePicker from '../packages/time-picker/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import Tag from '../packages/tag/index.js';
import Radio from '../packages/radio/index.js';
import RadioButton from '../packages/radio-button/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import Select from '../packages/select/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import Cascader from '../packages/cascader/index.js';
import CascaderPanel from '../packages/cascader-panel/index.js';
import Switch from '../packages/switch/index.js';
import Slider from '../packages/slider/index.js';
import InputNumber from '../packages/input-number/index.js';
import Pagination from '../packages/pagination/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import Empty from '../packages/empty/index.js';
import Alert from '../packages/alert/index.js';
import Breadcrumb from '../packages/breadcrumb/index.js';
import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
import Notification from '../packages/notification/index.js';
import Skeleton from '../packages/skeleton/index.js';
import SkeletonItem from '../packages/skeleton-item/index.js';
import Collapse from '../packages/collapse/index.js';
import CollapseItem from '../packages/collapse-item/index.js';
import Upload from '../packages/upload/index.js';
import Progress from '../packages/progress/index.js';
import Toast from '../packages/toast/index.js';
import LoadMore from '../packages/load-more/index.js';
import Clickoutside from '../packages/clickoutside/index.js';
import locale from 'aex-ui/src/locale';
import CollapseTransition from 'aex-ui/src/transitions/collapse-transition';

const components = [
  Button,
  ButtonGroup,
  Text,
  Row,
  Col,
  Icon,
  Backtop,
  Dialog,
  Tooltip,
  Popover,
  Form,
  FormItem,
  Avatar,
  Image,
  Carousel,
  CarouselItem,
  Steps,
  Step,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Input,
  Autocomplete,
  DatePicker,
  TimeSelect,
  TimePicker,
  Scrollbar,
  Tag,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Select,
  Option,
  OptionGroup,
  Cascader,
  CascaderPanel,
  Switch,
  Slider,
  InputNumber,
  Pagination,
  Table,
  TableColumn,
  Empty,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Skeleton,
  SkeletonItem,
  Collapse,
  CollapseItem,
  Upload,
  Progress,
  LoadMore,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  // 注入语言包
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  // 循环注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);
  Vue.use(Clickoutside);

  // 如果有需要可以在这里全局注入opts，例如：Vue.use(AexUi,opts)
  Vue.prototype.$AEXUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // 这里放置的都是原型方法
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  Vue.prototype.$toast = Toast;
  

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Button,
  ButtonGroup,
  Text,
  Message,
  Row,
  Col,
  Icon,
  Backtop,
  InfiniteScroll,
  MessageBox,
  Dialog,
  Tooltip,
  Popover,
  Form,
  FormItem,
  Avatar,
  Image,
  Carousel,
  CarouselItem,
  Steps,
  Step,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Input,
  Autocomplete,
  DatePicker,
  TimeSelect,
  TimePicker,
  Scrollbar,
  Tag,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Select,
  Option,
  OptionGroup,
  Cascader,
  CascaderPanel,
  Switch,
  Slider,
  InputNumber,
  Pagination,
  Table,
  TableColumn,
  Empty,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
  Skeleton,
  SkeletonItem,
  Collapse,
  CollapseItem,
  Upload,
  Progress,
  Toast,
  LoadMore,
  Clickoutside
};
