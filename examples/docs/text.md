# Text 文字

文本的基本格式。

### 按需引入

```
import { Text } from 'aex-ui';
Vue.use(Text)
```

:::tip
全局采用的默认字体为:   

font-family: RobotoRegular, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, Helvetica, Arial, monospace, sans-serif; 

RobotoRegular: 针对英文和数字    
PingFang SC: 针对汉字

:::

### 基本用法

`family` 设置字体，设置三种字体 `regular, medium, bold` , 默认 `regular`

也可以直接给元素添加类名: `font-family-regular, font-family-medium, font-family-bold`

:::demo 

```html
<template>
    <aex-text>regular: 基本用法，12323一般用于正文</aex-text>
    <aex-text family='medium'>medium: 基本用法，2223一般用于正文</aex-text>
    <aex-text family='bold'>bold: 基本用法，232323一般用于正文</aex-text>
</template>
```

:::

### 不同色值

aex-text 组件提供4种基础文字颜色和4种功能颜色，由 `type` 参数指定，默认值为 `default` 。

:::demo 

```html
<template>
    <aex-text type='dark' title='h4'>dark[#111D30]: 用于标题 和部分正文</aex-text>

    <aex-text>default[#3E495C]: 用于 正文</aex-text>

    <aex-text type='secondary'>secondary[#697384]: 一级描述</aex-text>

    <aex-text type='tertiary'>tertiary[#99A1B1]: 二级描述</aex-text>

    <aex-text type='success'>success[#3AB293]: Success</aex-text>

    <aex-text type='info'>info[#3378FF]: Info</aex-text>

    <aex-text type='warning'>warning[#FA6400]: Warning</aex-text>

    <aex-text type='danger'>danger[#E5575A]: Danger</aex-text>

</template>
```

:::

### 不同级别的标题

aex-text 组件提供4种快捷标题，由 `title` 参数指定，分别为 `h1,h2,h3,h4` 。

:::demo 

```html
<template>
    <aex-text type='dark' title='h1'>h1[26px]：标题</aex-text>

    <aex-text type='dark' title='h2'>h2[20px]：标题</aex-text>

    <aex-text type='dark' title='h3'>h3[18px]：标题</aex-text>

    <aex-text type='dark' title='h4'>h4[16px]：标题</aex-text>

</template>
```

:::

### 尺寸

aex-text 组件提供6种快捷尺寸，由 `size` 参数指定，分别为 `huge,bigger,large,medium,default,small,mini` 。

:::demo 

```html
<template>
    <aex-text size='huge'>尺寸[26px]： huge</aex-text>

    <aex-text size='bigger'>尺寸[20px]： bigger</aex-text>

    <aex-text size='large'>尺寸[18px]： large</aex-text>

    <aex-text size='medium'>尺寸[16px]： medium</aex-text>

    <aex-text>尺寸[14px]： default</aex-text>

    <aex-text size='small'>尺寸[13px]： small</aex-text>

    <aex-text size='mini'>尺寸[12px]： mini</aex-text>

</template>
```

:::

### Link 链接

aex-text 组件提供Link功能， 参数为 `href` ，有值时自动切换为a标签的链接，其他text参数可配合使用 。
:::demo 

```html
<template>
    <aex-text href='http://www.aex88.com'>默认链接</aex-text>
    <aex-text href='http://www.aex88.com' underline>带有hover下滑线的链接</aex-text>
</template>
```

:::

### 其他

:::demo 

```html
<template>
    <div style='width:100px'>
        <aex-text ellipsis>省略省略省略省略省略省略省略省略省略省略省略</aex-text>
    </div>
    <aex-text disabled>禁用色 disabled</aex-text>
</template>
```

:::

### 参数

| 参数       | 说明             | 类型        | 可选值                             | 默认值  |
|---------- |---------------   |----------  |----------------------------------|-------- |
| title| 标题样式               | string     | h1, h2, h3, h4                  | —        |
| type | 颜色主题               | string     | dark, default, secondary, tertiary | default |
| size | 字体尺寸               | string     | mini, small, default, medium, large, bigger, huge | default |
| disabled | 禁用               | boolean     | - | false |
| ellipsis | 自动溢出省略        | boolean     | - | false |
| href | Link URL              | string     | - | - |
| target | 同a便签属性              | string     | - | _self |
| underline | Link hover是否带下划线 | boolean  | - | false |
