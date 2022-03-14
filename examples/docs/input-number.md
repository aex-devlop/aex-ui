# InputNumber 计数器

### 按需引入

```
import { InputNumber } from 'aex-ui';
Vue.use(InputNumber)
```

### 基础用法

在 `aex-input-number` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。
:::demo 

```html
<template>
    <aex-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    };
</script>
```

:::

### 禁用状态

`disabled` 属性接受一个 `Boolean` ，设置为 `true` 即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性，不设置 `min` 和 `max` 时，最小值为 0。
:::demo 

```html
<template>
    <aex-input-number v-model="num" :disabled="true"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            }
        }
    };
</script>
```

:::

### 步数

允许定义递增递减的步数控制
设置 `step` 属性可以控制步长，接受一个 `Number` 。
:::demo 

```html
<template>
    <aex-input-number v-model="num" :step="2"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 5
            }
        }
    };
</script>
```

:::

### 严格步数

`step-strictly` 属性接受一个 `Boolean` 。如果这个属性被设置为 `true` ，则只能输入步数的倍数。
:::demo

```html
<template>
    <aex-input-number v-model="num" :step="2" step-strictly></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 2
            }
        }
    };
</script>
```

:::

### 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number` 。
:::demo 

```html
<template>
    <aex-input-number v-model="num" :precision="2" :step="0.1" :max="10"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            }
        }
    };
</script>
```

:::

:::tip
`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。
:::

### 尺寸

`medium` 、 `small` 、 `mini` 三种尺寸的数字输入框

:::demo

```html
<template>
    <aex-input-number v-model="num1"></aex-input-number>
    <aex-input-number size="medium" v-model="num2"></aex-input-number>
    <aex-input-number size="small" v-model="num3"></aex-input-number>
    <aex-input-number size="mini" v-model="num4"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num1: 1,
                num2: 1,
                num3: 1,
                num4: 1
            }
        }
    };
</script>
```

:::

### 按钮位置

设置 `controls-position` 属性可以控制按钮位置。
:::demo 

```html
<template>
    <aex-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></aex-input-number>
</template>
<script>
    export default {
        data() {
            return {
                num: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    };
</script>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value / v-model    | 绑定值         | number | — | 0 |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| step-strictly | 是否只能输入 step 的倍数 | boolean   | — | false |
| precision| 数值精度             | number   | — | — |
| size     | 计数器尺寸           | string   | large, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls | 是否使用控制按钮        | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| placeholder | 输入框默认 placeholder | string | - | - |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | currentValue, oldValue |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| select | 选中 input 中的文字 | — |
