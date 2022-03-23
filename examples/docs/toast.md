## Toast 提示

常用于主动操作后的反馈提示

### 按需引入

```
import { Toast } from 'aex-ui';
Vue.prototype.$toast = Toast;
```

### 基本用法

从顶部出现，3 秒后自动消失

:::demo 

```html
<template>
    <aex-button :plain="true" @click="open1">打开消息提示</aex-button>
    <aex-button :plain="true" @click="open2">自定义样式</aex-button>
</template>

<script>
    export default {
        methods: {
            open1() {
                this.$toast('这是一条消息提示');
            },
            open2() {
                this.$toast({
                    message: '自定义样式',
                    customClass: 'toast-custom'
                });
            },
        }
    }
</script>
```

:::

### options 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string / VNode | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
