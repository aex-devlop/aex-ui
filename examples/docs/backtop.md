# Backtop 回到顶部

返回页面顶部的操作按钮

### 按需引入

```
import { Backtop } from 'aex-ui';
Vue.use(Backtop)
```

### 基础用法

滑动页面即可看到右下方的按钮。
:::demo

```html
<template>
    <aex-backtop target='.doc-components__content'></aex-backtop>
</template>
```

:::

### 自定义显示内容

显示区域被固定为 60px \* 60px 的区域, 其中的内容可支持自定义。
:::demo

```html
<template>
    <aex-backtop :bottom="120" target='.doc-components__content'>
        UP
    </aex-backtop>
</template>
```

:::

### 参数

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| target            | 触发滚动的对象, 指定在某个区域内, class / id        | string          |        |        |
| visibility-height | 滚动高度达到此参数值才出现       | number |        | 200    |
| right             | 控制其显示位置, 距离页面右边距   | number |        | 40     |
| bottom            | 控制其显示位置, 距离页面底部距离 | number |        | 40     |

### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| click  | 点击按钮触发的事件 | 点击事件 |
