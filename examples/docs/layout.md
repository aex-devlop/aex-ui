# 栅格布局

采用24 分栏设计，迅速简便地创建布局

### 按需引入

```
import { Row,Col } from 'aex-ui';
Vue.use(Row)
Vue.use(Col)
```

### 基础布局

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
:::demo 

```html
<template>
    <aex-row style='margin-bottom:20px'>
        <aex-col :span="24">
            <div style='height:40px;background:#99BBFF' />
        </aex-col>
    </aex-row>

    <aex-row style='margin-bottom:20px'>
        <aex-col :span="12">
            <div style='height:40px;background:#99BBFF' />
        </aex-col>
        <aex-col :span="12">
            <div style='height:40px;background:#EAF1FF' />
        </aex-col>
    </aex-row>

    <aex-row style='margin-bottom:20px'>
        <aex-col :span="8">
            <div style='height:40px;background:#99BBFF' />
        </aex-col>
        <aex-col :span="8">
            <div style='height:40px;background:#B2E8DD' />
        </aex-col>
        <aex-col :span="8">
            <div style='height:40px;background:#FDD0B2' />
        </aex-col>
    </aex-row>

</template>
```

:::

### 分栏间隔

通过 组件aex-row的 `gutter` 属性 设置分栏之间存在间隔。
:::demo 

```html
<template>

    <aex-row :gutter='14'>
        <aex-col :span="8">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="8">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="8">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
    </aex-row>

</template>
```

:::

### 分栏偏移

通过制定 aex-col 组件的 `offset` 属性可以指定分栏偏移的栏数
:::demo 

```html
<template>

    <aex-row :gutter='14'>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="4" :offset='4'>
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
    </aex-row>

</template>
```

:::

### 对齐方式

通过 flex 布局来对分栏进行灵活的对齐。   
将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过:   
* justify 属性 start, center, end, between, around 来指定子元素的【横向】排版方式。
* align 属性 top, center, bottom 来指定子元素的【纵向】排版方式
:::demo 

```html
<template>

    <aex-row :gutter='14' type='flex' style='margin-bottom:20px'>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
    </aex-row>

    <aex-row :gutter='14' type='flex' justify="around" style='margin-bottom:20px'>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
    </aex-row>

    <aex-row :gutter='14' type='flex' justify="between" align='center'>
        <aex-col :span="4">
            <div style='height:40px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="4">
            <div style='height:60px;background:#DBDEE6' />
        </aex-col>
        <aex-col :span="4">
            <div style='height:80px;background:#DBDEE6' />
        </aex-col>
    </aex-row>

</template>
```

:::

### 响应式布局

响应式设计，预设了五个响应尺寸： `xs、sm、md、lg , xl`

:::demo 

```html
<template>

    <aex-row :gutter='14'>
        <aex-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" style='margin-bottom:20px'>
            <div style='height:40px;background:#DBDEE6'></div>
        </aex-col>
        <aex-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" style='margin-bottom:20px' class='hidden-md'>
            <div style='height:40px;background:#DBDEE6;lineHeight:40px;textAlign:center'>md尺寸时隐藏</div>
        </aex-col>
        <aex-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" style='margin-bottom:20px'>
            <div style='height:40px;background:#DBDEE6'></div>
        </aex-col>
    </aex-row>

</template>
```

:::

### 基于断点的隐藏类

需要单独引入样式：

```js
import 'aex-ui/lib/theme/display.css';
```

`hidden-xs` : 在 xs 尺寸时隐藏   
`hidden-sm` : 在 sm 尺寸时隐藏   
`hidden-sm-down` : 在 sm 及以下尺寸时隐藏   
`hidden-sm-up` : 在 sm 及以上尺寸时隐藏   
`hidden-md` : 在 md 尺寸时隐藏   
`hidden-md-down` : 在 md 及以下尺寸时隐藏   
`hidden-md-up` : 在 md 及以上尺寸时隐藏   
`hidden-lg` : 在 lg 尺寸时隐藏   
`hidden-lg-down` : 在 lg 及以下尺寸时隐藏   
`hidden-lg-up` : 在 lg 及以上尺寸时隐藏   
`hidden-xl` : 在 xl 尺寸时隐藏 

### Row 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/around/between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | 0 - 24 | 24 | 
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | 0 - 24 | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | 0 - 24 | — |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | 0 - 24 | — |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | 0 - 24 | — |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | 0 - 24 | — |
| tag | 自定义元素标签 | string | * | div |
