## Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

### 按需引入

```
import { Breadcrumb,BreadcrumbItem } from 'aex-ui';
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
```

### 基础用法

 在 `aex-breadcrumb` 中使用 `aex-breadcrumb-item` 标签表示从首页开始的每一级。   
`separator` : 属性，在 `aex-breadcrumb` 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠 `/` 。
:::tip
开发实现: 在 `aex-breadcrumb-item` 把当前页面之前的都加上 to属性 或包裹 a 标签即可
:::
:::demo

```html
<aex-breadcrumb>
    <aex-breadcrumb-item to="/">一级页面</aex-breadcrumb-item>
    <aex-breadcrumb-item><a href="/">二级页面</a></aex-breadcrumb-item>
    <aex-breadcrumb-item>当前页面</aex-breadcrumb-item>
</aex-breadcrumb>
```

:::

### 图标分隔符

通过设置 `separator-class` 可使用相应的 `icon` 作为分隔符，此时 `separator` 设置失效
:::demo

```html
<aex-breadcrumb separator-class="aex-icon-right">
    <aex-breadcrumb-item :to="{ path: '/' }">一级页面</aex-breadcrumb-item>
    <aex-breadcrumb-item>二级页面</aex-breadcrumb-item>
    <aex-breadcrumb-item>当前页面</aex-breadcrumb-item>
</aex-breadcrumb>
```

:::

### Breadcrumb Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
| separator-class | 图标分隔符 class | string | — | - |

### Breadcrumb Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
