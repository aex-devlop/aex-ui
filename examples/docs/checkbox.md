# Checkbox 多选框

### 按需引入

```
import { Checkbox } from 'aex-ui';
Vue.use(Checkbox)
```

### 基础用法(单选)

在 `aex-checkbox` 使用 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean` ，选中为 `true` , 反之为 `false` 。   
也可以通过 `true-label` 和 `false-label` 分别设置 `选中时的值` 和 `没有选中时的值`

disabled 属性 禁用

:::demo

```html
<template>
    <aex-checkbox v-model="checked">选项1</aex-checkbox>
    <aex-checkbox v-model="checked1" disabled>备选项2</aex-checkbox>
    <aex-checkbox v-model="checked2" disabled>备选项3</aex-checkbox>
    <aex-checkbox v-model="checked3" true-label='选中了' false-label='不选这个' @change='_onChange'>备选项4</aex-checkbox>
</template>
<script>
    export default {
        data() {
            return {
                checked: true,
                checked1: false,
                checked2: true,
                checked3: '选中了'
            };
        },
        methods: {
            _onChange(val) {
                console.log(val)
            }
        },
    };
</script>
```

:::

### 多选

使用 `checkbox-group` 元素包裹，把多个 checkbox 管理为一组，并在 `checkbox-group` 组件上使用 `v-model` 绑定 `数组类型` 的变量，选中的内容会添加到绑定的 `数组` 中.   
跟单独使用不一样的是: 某个 `aex-checkbox` 选中时，返回的是对应的 `label` 的值，并把返回值装入绑定的 数组里
`change` 属性可以监听变化   
`min` 和 `max` 属性能够限制可以被勾选的项目的数量
:::demo

```html
<template>
    <aex-checkbox-group v-model="checkList" @change='_onChange' :min='0' :max='3'>
        <aex-checkbox label="多选 A"></aex-checkbox>
        <aex-checkbox label="多选 B"></aex-checkbox>
        <aex-checkbox label="多选 C"></aex-checkbox>
        <aex-checkbox label="多选 D"></aex-checkbox>
        <aex-checkbox label="多选 E"></aex-checkbox>
        <aex-checkbox label="多选 F"></aex-checkbox>
    </aex-checkbox-group>
</template>

<script>
    export default {
        data() {
            return {
                checkList: []
            };
        },
        methods: {
            _onChange(val) {
                console.log(val)
            }
        },
    };
</script>
```

:::

### 按钮样式

把aex-checkbox 换成 aex-checkbox-button元素即可实现 按钮样式
`size` 属性设置 大小 default / medium / small / mini
:::demo

```html
<template>
    <aex-checkbox-group v-model="checkList" style="margin-bottom: 20px">
        <aex-checkbox-button label="多选 A"></aex-checkbox-button>
        <aex-checkbox-button label="多选 B"></aex-checkbox-button>
        <aex-checkbox-button label="多选 C"></aex-checkbox-button>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="medium" style="margin-bottom: 20px">
        <aex-checkbox-button label="多选 A"></aex-checkbox-button>
        <aex-checkbox-button label="多选 B"></aex-checkbox-button>
        <aex-checkbox-button label="多选 C"></aex-checkbox-button>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="small" style="margin-bottom: 20px">
        <aex-checkbox-button label="多选 A"></aex-checkbox-button>
        <aex-checkbox-button label="多选 B"></aex-checkbox-button>
        <aex-checkbox-button label="多选 C"></aex-checkbox-button>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="mini">
        <aex-checkbox-button label="多选 A"></aex-checkbox-button>
        <aex-checkbox-button label="多选 B"></aex-checkbox-button>
        <aex-checkbox-button label="多选 C"></aex-checkbox-button>
    </aex-checkbox-group>
</template>

<script>
    export default {
        data() {
            return {
                checkList: ['多选 A']
            };
        },
    };
</script>
```

:::

### 边框样式

添加 `border` 属性可以渲染为带有边框的单选框   
`size` 属性设置 大小 default / medium / small / mini
:::demo

```html
<template>
    <aex-checkbox-group v-model="checkList" style="margin-bottom: 20px">
        <aex-checkbox border label="多选 A"></aex-checkbox>
        <aex-checkbox border label="多选 B"></aex-checkbox>
        <aex-checkbox border label="多选 C"></aex-checkbox>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="medium" style="margin-bottom: 20px">
        <aex-checkbox border label="多选 A"></aex-checkbox>
        <aex-checkbox border label="多选 B"></aex-checkbox>
        <aex-checkbox border label="多选 C"></aex-checkbox>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="small" style="margin-bottom: 20px">
        <aex-checkbox border label="多选 A"></aex-checkbox>
        <aex-checkbox border label="多选 B"></aex-checkbox>
        <aex-checkbox border label="多选 C"></aex-checkbox>
    </aex-checkbox-group>
    <aex-checkbox-group v-model="checkList" size="mini">
        <aex-checkbox border label="多选 A"></aex-checkbox>
        <aex-checkbox border label="多选 B"></aex-checkbox>
        <aex-checkbox border label="多选 C"></aex-checkbox>
    </aex-checkbox-group>
</template>

<script>
    export default {
        data() {
            return {
                checkList: ['多选 A']
            };
        },
    };
</script>
```

:::

### 全选/全取消

通过 `indeterminate` 属性配合可实现全选效果，值为 `true` 表示有选择但是没有全部选择, 值为 `false` 时表示全部选择了或者全部取消了 

:::demo

```html
<template>
    <aex-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</aex-checkbox>
    <div style="margin: 15px 0;"></div>
    <aex-checkbox-group v-model="checkedCoins" @change="handleCheckedCitiesChange">
        <aex-checkbox v-for="coin in coins" :label="coin" :key="coin">{{coin}}</aex-checkbox>
    </aex-checkbox-group>
</template>
<script>
    export default {
        data() {
            return {
                checkAll: false,
                checkedCoins: ['BTC'],
                coins: ['BTC', 'ETH', 'GAT', 'BCH', 'LTC', ],
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCoins = val ? this.coins : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.coins.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.coins.length;
            }
        }
    };
</script>
```

:::

### Checkbox Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值（只有在 `checkbox-group` 或者绑定对象类型为 `array` 时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Checkbox 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

### Checkbox Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #3378ff   |

### Checkbox-group Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在 `checkbox-group` 或者绑定对象类型为 `array` 时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
