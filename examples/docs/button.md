# Button 按钮

### 按需引入

```
import { Button } from 'aex-ui';
Vue.use(Button)
 // ButtonGroup 根据需要引入
```

:::tip
目前按钮组件整理了四个高度(48px, 40px, 36px, 32px, 28px)的常用分类，宽度根据需要可通过 `width` 或者 `style` 属性调节， 自由设定   
按钮内置了防抖处，可以把 `isDebounce` 属性设置为 `true` 启用
:::

### 基本用法

:::demo 

```html
<template>
    <aex-row>
        <aex-col :span='12'>
            <aex-button>默认按钮</aex-button>
            <aex-button icon='aex-icon-search' circle />
            <aex-button round>圆弧</aex-button>
            <aex-button loading>loading</aex-button>
        </aex-col>
        <aex-col :span='12'>
            <aex-button block>宽度100%</aex-button>
        </aex-col>
    </aex-row>
</template>
```

:::

### 基本尺寸分类

按钮 组件提供四种高度分类，由 `size` 属性指定, 分别为 `large, default, medium, small, mini` ，默认值为 `default` ，四种高度分别都有预设默认宽度:
* large: 370px * 48px
* default: 120px * 40px
* medium: 80px * 36px
* small: 80px * 32px
* mini: 80px * 28px
:::demo 

```html
<template>
    <div>
        <aex-button size='large'>large</aex-button>
        <aex-button>default</aex-button>
        <aex-button size='medium'>medium</aex-button>
        <aex-button size='small'>small</aex-button>
        <aex-button size='mini'>mini</aex-button>
    </div>
</template>
```

:::

### 功能颜色分类

按钮 组件提供四种颜色分类，由 `type` 属性指定, 分别为 `primary, outline, secondary, tertiary, success,warning,danger,text,text-secondary ` ，默认值为 `primary`

:::demo 

```html
<template>
    <div>
        <aex-button type='primary'>主按钮</aex-button>
        <aex-button type='outline'>副按钮</aex-button>
        <aex-button type='secondary'>次按钮</aex-button>
        <aex-button type='tertiary'>非重要按钮</aex-button>
        <aex-button type='success'>买入/成功</aex-button>
        <aex-button type='warning'>警告按钮</aex-button>
        <aex-button type='danger'>卖出/失败</aex-button>
        <aex-button type='text'>文字按钮</aex-button>
        <aex-button type='text-secondary'>次文字按钮</aex-button>
    </div>
</template>
```

:::

### 结束状态

结束状态，由 `finish` 属性指定，默认值为 `false`

:::demo 

```html
<template>
    <div>
        <aex-button type='primary' finish>主按钮</aex-button>
        <aex-button type='outline' finish>副按钮</aex-button>
        <aex-button type='secondary' finish>次按钮</aex-button>
        <aex-button type='tertiary' finish>非重要按钮</aex-button>
        <aex-button type='success' finish>买入/成功</aex-button>
        <aex-button type='warning' finish>警告按钮</aex-button>
        <aex-button type='danger' finish>卖出/失败</aex-button>
        <aex-button type='text' finish>文字按钮</aex-button>
        <aex-button type='text-secondary' finish>次文字按钮</aex-button>
    </div>
</template>
```

:::

### 禁用

按钮 组件提供四种颜色分类，由 `disabled` 属性指定，默认值为 `false`

:::demo 

```html
<template>
    <div>
        <aex-button type='primary' disabled>主按钮</aex-button>
        <aex-button type='outline' disabled>副按钮</aex-button>
        <aex-button type='secondary' disabled>次按钮</aex-button>
        <aex-button type='tertiary' disabled>非重要按钮</aex-button>
        <aex-button type='success' disabled>买入/成功</aex-button>
        <aex-button type='warning' disabled>警告按钮</aex-button>
        <aex-button type='danger' disabled>卖出/失败</aex-button>
        <aex-button type='text' disabled>文字按钮</aex-button>
        <aex-button type='text-secondary' disabled>次文字按钮</aex-button>
    </div>
</template>
```

:::

### 图标按钮

按钮 组件提供四种颜色分类，由 `disabled` 属性指定，默认值为 `false`

:::demo 

```html
<template>
    <div>
        <aex-button icon='aex-icon-search'>搜索</aex-button>
    </div>
</template>
```

:::

### 按钮组

提供 `aex-button-group` 组件 包裹按钮形成按钮组

:::demo 

```html
<template>
    <div>
        <aex-button-group>
            <aex-button type='primary'>主按钮1</aex-button>
            <aex-button type='primary'>主按钮2</aex-button>
        </aex-button-group>
        <aex-button-group>
            <aex-button type='success'>success</aex-button>
            <aex-button type='danger'>danger</aex-button>
        </aex-button-group>
        <aex-button-group>
            <aex-button type='outline'>主按钮1</aex-button>
            <aex-button type='secondary'>主按钮2</aex-button>
        </aex-button-group>
    </div>
</template>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size     | 尺寸           | string | medium, default, small, mini | default |
| width     | 宽度           | string | - | - |
| type | 类型 | string | primary, outline, secondary, tertiary, success, warning, danger, text, text-secondary | primary |
| disabled | 禁用 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| icon | 图标类名 | string | — | - |
| isDebounce | 是否防抖 | boolean | - | true |
