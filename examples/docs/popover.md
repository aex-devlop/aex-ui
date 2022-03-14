# Popover 弹出框

### 按需引入

```
import { Popover } from 'aex-ui';
Vue.use(Popover)
```

### 基本用法

`trigger` 属性用于设置何时触发 Popover，支持四种触发方式： `hover` ， `click` ， `focus` 和 `manual` 。    
对于触发 Popover 的元素，有两种写法：使用 `slot="reference"` 的具名插槽，或使用自定义指令 `v-popover` 指向 Popover 的索引 `ref` 。

:::demo 

```html
<template>
    <aex-row>
        <aex-col :span='4'>
            <aex-popover placement="top-start" title="标题" width="100" trigger="hover" content="Popover 使用hover方式触发">
                <aex-button slot="reference">hover 激活</aex-button>
            </aex-popover>
        </aex-col>
        <aex-col :span='4'>
            <aex-popover placement="top" title="标题" width="100" trigger="click" content="Popover 使用click方式触发">
                <aex-button slot="reference">click 激活</aex-button>
            </aex-popover>
        </aex-col>
        <aex-col :span='4'>
            <aex-popover placement="top-start" title="标题" width="100" trigger="manual" content="Popover 使用manual方式触发" v-model="visible">
                <aex-button slot="reference" @click="visible = !visible">手动激活</aex-button>
            </aex-popover>
        </aex-col>
        <aex-col :span='4'>
            <aex-popover ref="popover" placement="top-start" title="标题" width="100" trigger="hover" content="Popover 指令绑定触发" />
            <aex-button v-popover:popover>指令绑定</aex-button>
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            };
        }
    };
</script>
```

:::

### Attributes

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | 触发方式 | String  | click/focus/hover/manual |    click    |
|  title              | 标题 | String | — | — |
|  content        |  显示的内容，也可以通过 `slot` 传入 DOM   | String            | — | — |
|  width        |  宽度  | String, Number            | — | 最小宽度 120px |
|  placement        |  出现位置  | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  Popover 是否可用  | Boolean           | — |  false |
|  value / v-model        |  状态是否可见  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头 | Boolean | — | true |
| popper-class | 为 popper 添加类名 | String | — | — |
| open-delay | 触发方式为 hover 时的显示延迟，单位为毫秒 | Number | — | — |
| close-delay | 触发方式为 hover 时的隐藏延迟，单位为毫秒 | number | — | 200 |
| tabindex   | Popover 组件的 tabindex | number | — | 0 |

### Slot

| 参数 | 说明 |
|--- | ---|
| — | Popover 内嵌 HTML 文本 |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| show | 显示时触发 | — |
| after-enter | 显示动画播放完毕后触发 | — |
| hide | 隐藏时触发 | — |
| after-leave | 隐藏动画播放完毕后触发 | — |
