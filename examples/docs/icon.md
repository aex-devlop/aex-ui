# Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `aex-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="aex-icon-close"></i>
<aex-button type="primary" icon="aex-icon-search">搜索</aex-button>
```

:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name" @click='copy(name)'>

      <span>
        <i :class="'aex-icon-' + name"></i>
        <span class="icon-name">{{'aex-icon-' + name}}</span>
      </span>

  </li>
</ul>
