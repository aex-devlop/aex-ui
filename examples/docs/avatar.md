# Avatar 头像

### 按需引入

```
import { Avatar } from 'aex-ui';
Vue.use(Avatar)
```

### 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。
:::demo

```html
<template>
    <aex-row type='flex' align='center'>
        <aex-col :span='4'>
            <aex-text title='h4' style='marginBottom:10px'>自定义尺寸-圆形</aex-text>
            <aex-avatar :src='url' :size='80' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text title='h4' style='marginBottom:10px'>自定义尺寸-方形</aex-text>
            <aex-avatar :src='url' :size='60' shape='square' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text title='h4' style='marginBottom:10px'>默认尺寸+形状</aex-text>
            <aex-avatar :src='url' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text title='h4' style='marginBottom:10px'>默认头像</aex-text>
            <aex-avatar />
        </aex-col>
        <aex-col :span='4'>
            <aex-text title='h4' style='marginBottom:10px'>自定义默认头像</aex-text>
            <aex-avatar style='background:#dbdee6'>Gat</aex-avatar>
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://ss0.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2945080942,1723910562&fm=26&gp=0.jpg'
            }
        }
    }
</script>
```

:::

### 多种类型

支持：图片(url) , 图标(icon 类) , 字符 
:::demo

```html
<template>
    <aex-avatar :src='url' :size='80' />
    <aex-avatar icon='aex-icon-storage' :size='80' style='background:#dbdee6' />
    <aex-avatar :size='80' style='background:#dbdee6'>Gat</aex-avatar>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=623994087,1173615898&fm=26&gp=0.jpg"
            }
        }
    }
</script>
```

:::

### 头像加载失败设置

当展示类型为头像的时候，头像加载失败的 可设置一个默认头像，通过· `error` 返回true

:::demo

```html
<template>
    <div class="demo-type">
        <aex-avatar :size="60" src="https://xxx.jpg" @error="errorHandler" />
        <aex-avatar :size="60" src="https://xxx.jpg" @error="errorHandler" style='background:#dbdee6'>
            AEX
        </aex-avatar>
    </div>
</template>
<script>
    export default {
        methods: {
            errorHandler() {
                return true
            }
        }
    }
</script>
```

:::

### 参数

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | 设置头像的图标类型，参考 Icon 组件   | string          |        |        |
| size              | 设置头像的大小                     | number |  | 40  |
| shape             | 设置头像的形状  | string |    circle / square     |   circle  |
| src               | 图片头像的资源地址 | string |        |      |
| alt               | 描述图像的替换文本 | string |        |      |
| fit               | 当展示类型为图片的时候，设置图片如何适应容器框 | string |    fill / contain / cover / none / scale-down    |   cover   |

### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 |(e: Event)  |

### Slot

| 名称	 | 说明               |  
| ------ | ------------------ | 
| default  | 自定义头像展示内容 |
