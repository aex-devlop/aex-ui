# Message 消息提示

常用于主动操作后的反馈提示   

### 按需引入

```
import { Message } from 'aex-ui';
Vue.prototype.$message = Message;
```

### 基本用法

从顶部出现，3 秒后自动消失

:::demo 

```html
<template>
    <aex-button :plain="true" @click="open">打开消息提示</aex-button>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$message('这是一条消息提示');
            },
        }
    }
</script>
```

:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 

```html
<template>
    <div style='display:flex;'>
        <aex-button type='success' style='marginRight:10px' @click="open2">成功</aex-button>
        <aex-button type='warning' style='marginRight:10px' @click="open3">警告</aex-button>
        <aex-button type='outline' style='marginRight:10px' @click="open1">消息</aex-button>
        <aex-button type='danger' style='marginRight:10px' @click="open4">错误</aex-button>
    </div>
</template>

<script>
    export default {
        methods: {
            open1() {
                this.$message('这是一条消息提示');
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success',
                });
            },

            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            }
        }
    }
</script>
```

:::

### 可关闭

可以添加关闭按钮。   
默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 `showClose` 字段。此外，Message 拥有可控的 `duration` ，设置0为不会被自动关闭，默认为 3000 毫秒。
:::demo 

```html
<template>
    <div style='display:flex;'>
        <aex-button style='marginRight:10px' @click="open2">可关闭</aex-button>
    </div>
</template>

<script>
    export default {
        methods: {
            open2() {
                this.$message({
                    message: '这是一条成功消息,可手动关闭Message',
                    type: 'success',
                    showClose: true,
                    duration: 5000
                });
            },

        }
    }
</script>
```

:::

### 文字居中

使用 center 属性让文字水平居中
:::demo 

```html
<template>
    <div style='display:flex;'>
        <aex-button style='marginRight:10px' @click="open2">文字居中</aex-button>
    </div>
</template>

<script>
    export default {
        methods: {
            open2() {
                this.$message({
                    message: '这是一条成功消息,文字居中',
                    type: 'success',
                    center: true
                });
            },

        }
    }
</script>
```

:::

### 使用 HTML 片段

支持传入 HTML 片段, 将 `dangerouslyUseHTMLString` 属性设置为 true，message 就会被当作 HTML 片段处理
:::demo 

```html
<template>
    <div style='display:flex;'>
        <aex-button style='marginRight:10px' @click="open2">HTML片段</aex-button>
    </div>
</template>

<script>
    export default {
        methods: {
            open2() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: `<span>这是<b>Html</b>字符串</span>`
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
| type | 主题 | string | success/warning/info/error | info |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文字是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |
| offset | Message 距离窗口顶部的偏移量 | number | — | 66 |

### 方法

调用 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |
