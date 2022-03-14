# Loading 加载

### 按需引入

```
import { Loading } from 'aex-ui';
Vue.use(Loading)

如果要通过服务的方式调用则使用一下方式引入：
Vue.prototype.$loading = Loading.service;
```

:::tip
提供了两种调用 Loading 的方法：   
指令(推荐): 对于自定义指令 `v-loading` ，只需要绑定 `Boolean` 即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加 `body` 修饰符，可以使遮罩插入至 DOM 中的 body 上。    
服务: 通过 this.$loading(options)来调用
:::

### 容器内使用

::: demo

```html
<template>
    <div v-loading="true" style='width:300px; padding:90px 0;textAlign:center; backgroundColor:#ccc'>
        内容区域
    </div>
</template>
```

:::

### 自定义

在绑定了 `v-loading` 指令的元素上添加:   
`aex-loading-text` 属性，其值会被渲染为加载文案，并显示在加载图标的下方。   
`aex-loading-spinner` 属性设定图标类名   
`aex-loading-background` 属性设定背景色值。
::: demo

```html
<template>
    <div style='width:300px; padding:90px;textAlign:center;' v-loading="true" aex-loading-text="拼命加载中" aex-loading-spinner="aex-icon-loading" aex-loading-background="rgba(0, 0, 0, 0.2)" />
</template>
```

:::

### 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector` 以获取到对应 DOM 节点 | object/string | — | document.body |
| body | 同 `v-loading` 指令中的 `body` 修饰符 | boolean | — | false |
| fullscreen | 同 `v-loading` 指令中的 `fullscreen` 修饰符 | boolean | — | true |
| lock | 同 `v-loading` 指令中的 `lock` 修饰符 | boolean | — | false |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| spinner | 自定义加载图标类名 | string | — | — |
| background | 遮罩背景色 | string | — | — |
| customClass | Loading 的自定义类名 | string | — | — |
