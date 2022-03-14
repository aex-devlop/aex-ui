# Dropdown 下拉菜单

### 按需引入

```
import { Dropdown,DropdownItem } from 'aex-ui';
Vue.use(Dropdown)
Vue.use(DropdownItem)
```

### 基础用法

通过组件 `slot` 来设置下拉触发的元素（必须是一个元素或者或者组件）   
通过具名 `slot="dropdown"` 来设置下拉菜单。

`divided` : 设置分割线   
`disabled` : 禁用
:::demo 

```html
<aex-dropdown>
    <aex-text>下拉菜单 <i class="aex-icon-down" /></aex-text>
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
```

:::

### 不同尺寸/样式

通过 `size` 属性设置尺寸，组件提供了 默认/ medium / small / mini 三个尺寸
:::demo 

```html
<aex-dropdown split-button>
    默认尺寸
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
<aex-dropdown split-button size='medium' type='tertiary'>
    medium
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
<aex-dropdown split-button size='small' type='success'>
    small
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
<aex-dropdown split-button size='mini' type='outline'>
    mini
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
```

:::

### 触发对象

`split-button` 属性设置为true, 来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮

:::demo 

```html
<aex-dropdown split-button @click="handleClick">
    下拉菜单
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
<script>
    export default {
        methods: {
            handleClick() {
                this.$message('你点击了左侧按钮！')
            }
        }
    }
</script>
```

:::

### 触发事件

给 `aex-dropdown-item` 添加 `command` 指令 为 菜单项添加点击会触发事件   
然后在 `<aex-dropdown @command="handleCommand" >` 添加接收指令

:::demo 

```html
<aex-dropdown split-button @command="handleCommand" @click="handleClick">
    {{value}}
    <aex-dropdown-menu slot="dropdown">
        <aex-dropdown-item command="BTC 比特币">BTC 比特币</aex-dropdown-item>
        <aex-dropdown-item command="ETH 以太坊">ETH 以太坊</aex-dropdown-item>
        <aex-dropdown-item command="ADA 艾达币">ADA 艾达币</aex-dropdown-item>
        <aex-dropdown-item command="EOS 柚子" divided>EOS 柚子 </aex-dropdown-item>
        <aex-dropdown-item command="泰达币 USDT" disabled>泰达币 USDT</aex-dropdown-item>
    </aex-dropdown-menu>
</aex-dropdown>
<script>
    export default {
        data() {
            return {
                value: 'BTC 比特币'
            }
        },
        methods: {
            handleClick() {
                this.$message('你点击了左侧按钮！')
            },
            handleCommand(val) {
                this.value = val
            }
        }
    }
</script>
```

:::

### Dropdown Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | 菜单按钮类型，同 Button 组件(只在 `split-button` 为 true 的情况下有效)   | string  |          —             |    —     |
| size          | 菜单尺寸，在 `split-button` 为 true 的情况下也对触发按钮生效  | string | medium / small / mini | — |
| split-button  | 下拉触发元素呈现为按钮组    | boolean  |    —  |  false |
| placement    | 菜单弹出位置     | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | 触发下拉的行为     | string          | hover, click  | hover |
| hide-on-click | 是否在点击菜单项后隐藏菜单     | boolean          | — | true |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）| number          | — | 250 |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）| number          | — | 150 |
| tabindex      | Dropdown 组件的 tabindex | number | — | 0 |

### Dropdown Slots

| Name | 说明 |
|------|--------|
| default | 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件  |
| dropdown | 下拉列表， `<aex-dropdown-menu slot="dropdown">` 组件     |

### Dropdown Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | `split-button` 为 true 时，点击左侧按钮的回调 | — |
| command  | 点击菜单项触发的事件回调 | dropdown-item 的指令 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | 指令     | string/number/object          | — | — |
| disabled      | 禁用     | boolean          | — | false |
| divided       | 显示分割线     | boolean          | — | false |
| icon          | 图标类名 | string   |  —  |  —  |
