# Switch 开关

### 按需引入

```
import { Switch } from 'aex-ui';
Vue.use(Switch)
```

### 基本用法

:::demo

```html
<aex-row>
    <aex-col :span='3'>
        <aex-switch v-model="value" />
    </aex-col>
    <aex-col :span='3'>
        <aex-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" showInnerText />
    </aex-col>
    <aex-col :span='3'>
        <aex-switch v-model="value" show-inner-icon />
    </aex-col>
    <aex-col :span='3'>
        <aex-switch v-model="value" disabled />
    </aex-col>
    <aex-col :span='3'>
        <aex-switch v-model="value" active-text='打开' inactive-text='关闭' />
    </aex-col>
    <aex-col :span='3'>
        <aex-switch v-model="value" active-icon-class='aex-icon-invite' inactive-icon-class='aex-icon-huoli' />
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                value: true
            }
        }
    };
</script>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| width  | switch 的宽度（像素）    | number   | — | 40 |
| show-inner-icon  | 内部展示的图标     | boolean   | - | false |
| show-inner-text  | 内部展示的文字（和show-inner-icon 只能选其一）    | boolean   | - | false |
| active-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `active-text` | string   | — | — |
| inactive-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text` | string   | — | — |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-value  | switch 打开时的值    | boolean / string / number | — | true |
| inactive-value  | switch 关闭时的值    | boolean / string / number | — | false |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name            | switch 对应的 name 属性    | string   | — | — |
| validate-event  | 改变 switch 状态时是否触发表单的校验     | boolean   | - | true |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 Switch 获取焦点 | - |
