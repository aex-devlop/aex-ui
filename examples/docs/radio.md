# Radio 单选框

### 按需引入

```
import { Radio,RadioGroup } from 'aex-ui';
Vue.use(Radio)
Vue.use(RadioGroup) // 根据需要引入
```

### 基础用法

`v-model` 绑定变量，选中的值为相应 `label` 属性的值, `label` 可以是 `String` 、 `Number` 或 `Boolean`

`disabled` 属性 禁用

:::demo 

```html
<template>
    <aex-radio v-model="radio1" label="1">BTC</aex-radio>
    <aex-radio v-model="radio1" label="1.1">ETH</aex-radio>
    <aex-radio v-model="radio2" label="2" disabled>GAT</aex-radio>
    <aex-radio v-model="radio2" label="2.2" disabled>GAT</aex-radio>
</template>

<script>
    export default {
        data() {
            return {
                radio1: '1',
                radio2: '2.2'
            };
        }
    }
</script>
```

:::

### 分组

如果有多个选项组，则使用 `aex-radio-group` 包裹来分组， 此时 `v-model` 则设置在 `aex-radio-group` 标签上即可，   
`change` 属性可以监听变化

:::demo 

```html
<template>
    <aex-radio-group v-model="radio" @change='_onChange'>
        <aex-radio :label="1">BTC</aex-radio>
        <aex-radio :label="2">ETH</aex-radio>
        <aex-radio :label="3">GAT</aex-radio>
    </aex-radio-group>
</template>

<script>
    export default {
        data() {
            return {
                radio: 1
            };
        },
        methods: {
            _onChange(val) {
                console.log(val)
            }
        },
    }
</script>
```

:::

### 按钮样式

把aex-radio 换成 aex-radio-button元素即可实现 按钮样式
`size` 属性设置 大小 default / medium / small / mini
:::demo 

```html
<template>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio">
            <aex-radio-button :label="1">BTC</aex-radio-button>
            <aex-radio-button :label="2">ETH</aex-radio-button>
            <aex-radio-button :label="3">GAT</aex-radio-button>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='medium'>
            <aex-radio-button :label="1">BTC</aex-radio-button>
            <aex-radio-button :label="2">ETH</aex-radio-button>
            <aex-radio-button :label="3">GAT</aex-radio-button>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='small'>
            <aex-radio-button :label="1">BTC</aex-radio-button>
            <aex-radio-button :label="2">ETH</aex-radio-button>
            <aex-radio-button :label="3">GAT</aex-radio-button>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='mini'>
            <aex-radio-button :label="1">BTC</aex-radio-button>
            <aex-radio-button :label="2">ETH</aex-radio-button>
            <aex-radio-button :label="3">GAT</aex-radio-button>
        </aex-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 1
            };
        },
    }
</script>
```

:::

### 带有边框的样式

添加 `border` 属性可以渲染为带有边框的单选框   
`size` 属性设置 大小 default / medium / small / mini

:::demo 

```html
<template>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio">
            <aex-radio :label="1" border style='width:120px'>BTC</aex-radio>
            <aex-radio :label="2" border>ETH</aex-radio>
            <aex-radio :label="3" border>GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='medium'>
            <aex-radio :label="1" border>BTC</aex-radio>
            <aex-radio :label="2" border>ETH</aex-radio>
            <aex-radio :label="3" border>GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='small'>
            <aex-radio :label="1" border>BTC</aex-radio>
            <aex-radio :label="2" border>ETH</aex-radio>
            <aex-radio :label="3" border>GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='mini'>
            <aex-radio :label="1" border>BTC</aex-radio>
            <aex-radio :label="2" border>ETH</aex-radio>
            <aex-radio :label="3" border>GAT</aex-radio>
        </aex-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 1
            };
        },
    }
</script>
```

:::

### 选择框的样式

添加 `checkbox` 属性可以渲染为选择框的样式  
`size` 属性设置 大小 default / medium / small / mini

:::demo 

```html
<template>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio">
            <aex-radio :label="1" checkbox>BTC</aex-radio>
            <aex-radio :label="2" checkbox>ETH</aex-radio>
            <aex-radio :label="3" checkbox>GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='medium'>
            <aex-radio :label="1" checkbox><i class='aex-icon-professional' style='marginRight:5px;fontSize:22px;verticalAlign:sub' />BTC</aex-radio>
            <aex-radio :label="2" checkbox><i class='aex-icon-professional' style='marginRight:5px;fontSize:22px;verticalAlign:sub' />ETH</aex-radio>
            <aex-radio :label="3" checkbox><i class='aex-icon-professional' style='marginRight:5px;fontSize:22px;verticalAlign:sub' />GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='small'>
            <aex-radio :label="1" checkbox>BTC</aex-radio>
            <aex-radio :label="2" checkbox>ETH</aex-radio>
            <aex-radio :label="3" checkbox>GAT</aex-radio>
        </aex-radio-group>
    </div>
    <div style='marginBottom:20px'>
        <aex-radio-group v-model="radio" size='mini'>
            <aex-radio :label="1" checkbox>BTC</aex-radio>
            <aex-radio :label="2" checkbox>ETH</aex-radio>
            <aex-radio :label="3" checkbox>GAT</aex-radio>
        </aex-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 1
            };
        },
    }
</script>
```

:::

### Radio Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
