# Scrollbar 滚动条

此组件的作用是为了美化滚动条

### 按需引入

```
import { Scrollbar } from 'aex-ui';
Vue.use(Scrollbar)
```

### 基础用法

给组件设置 `wrap-class 或者 wrap-style` , 需要设置 `height 或者 max-height` 即可
:::demo 

```html
<template>
    <!-- wrap-class='cus-scroll-wrap'  -->
    <aex-scrollbar tag="div" noresize wrap-style='height:180px;'>
        <aex-text v-for='i in 50' :key='i'>Scrollbar 展示 {{i}}</aex-text>
    </aex-scrollbar>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>
<style lang='less'>
    .cus-scroll-wrap {
        max-height: 200px
    }
</style>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| wrap-class | 设置滚动外框类   | string | — | — |
| wrap-style | 设置滚动外框行内样式   | string | — | — |
| view-class | 设置滚动体类 | string | - | - |
| view-style | 设置滚动体行内样式 | string | - | - |
| native | 是否展示滚动条 | boolean | — | false |
| noresize | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | boolean | — | false |
| tag | 滚动体渲染的标签 | boolean | — | div |
