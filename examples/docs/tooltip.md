# Tooltip 文字提示

用于展示鼠标 hover 时的提示信息, 组件提供了 9 种不同方向的展示方式

### 按需引入

```
import { Tooltip } from 'aex-ui';
Vue.use(Tooltip)
```

### 基础用法

:::tip
使用 `content` 属性来决定 `hover` 时的提示信息。   
由 `placement` 属性决定展示效果： `placement` 属性值为： `方向-对齐位置` ；四个方向： `top` 、 `left` 、 `right` 、 `bottom` ；三种对齐位置： `start` , `end` ，默认为空。如 `placement="left-end"` ，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
:::

:::demo 

```html
<template>
    <aex-row :gutter='20' style='marginBottom:20px'>
        <aex-col :span='4' :offset='4'>
            <aex-tooltip content="提示文字" placement="top-start">
                <aex-button block size='medium'>top-start</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="top" :visible-arrow='false'>
                <aex-button block size='medium'>top</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="top-end" effect='light'>
                <aex-button block size='medium'>top-end</aex-button>
            </aex-tooltip>
        </aex-col>
    </aex-row>
    <aex-row :gutter='20' style='marginBottom:20px'>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="left-start">
                <aex-button block size='medium'>left-start</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4' :offset='12'>
            <aex-tooltip content="提示文字" placement="right-start">
                <aex-button block size='medium'>rigth-start</aex-button>
            </aex-tooltip>
        </aex-col>
    </aex-row>
    <aex-row :gutter='20' style='marginBottom:20px'>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="left">
                <aex-button block size='medium'>left</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4' :offset='12'>
            <aex-tooltip content="提示文字" placement="right">
                <aex-button block size='medium'>right</aex-button>
            </aex-tooltip>
        </aex-col>
    </aex-row>
    <aex-row :gutter='20' style='marginBottom:20px'>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="left-end">
                <aex-button block size='medium'>left-end</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4' :offset='12'>
            <aex-tooltip content="提示文字" placement="right-end">
                <aex-button block size='medium'>right-end</aex-button>
            </aex-tooltip>
        </aex-col>
    </aex-row>
    <aex-row :gutter='20' style='marginBottom:20px'>
        <aex-col :span='4' :offset='4'>
            <aex-tooltip content="提示文字" placement="bottom-start">
                <aex-button block size='medium'>bottom-start</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="bottom">
                <aex-button block size='medium'>bottom</aex-button>
            </aex-tooltip>
        </aex-col>
        <aex-col :span='4'>
            <aex-tooltip content="提示文字" placement="bottom-end">
                <aex-button block size='medium'>bottom-end</aex-button>
            </aex-tooltip>
        </aex-col>
    </aex-row>
</template>
```

:::

### 参数

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  默认提供的主题  | String            | dark/light | dark  |
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value / v-model |  状态是否可见  | Boolean           | — |  false |
|  disabled       |  Tooltip 是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | el-fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头 | Boolean | — | true |
| open-delay | 延迟出现，单位毫秒 | Number | — | 0 |
| manual | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | — | false |
| popper-class | 为 Tooltip 的 popper 添加类名 | String | — | — |
| enterable | 鼠标是否可进入到 tooltip 中 | Boolean | — | true |
