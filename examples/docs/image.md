# Image 图片

### 按需引入

```
import { Image } from 'aex-ui';
Vue.use(Image)
```

### 基本用法

可通过 `fit` 属性确定图片如何适应到容器框
:::demo

```html
<template>
    <aex-row :gutter='10'>
        <aex-col :span='4'>
            <aex-text>none</aex-text>
            <aex-image style='width:120px;height:120px' :src='url' fit='none' @complete='complete' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text>fill</aex-text>
            <aex-image style='width:120px;height:120px' :src='url' fit='fill' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text>contain</aex-text>
            <aex-image style='width:120px;height:120px' :src='url' fit='contain' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text>cover</aex-text>
            <aex-image style='width:120px;height:120px' :src='url' fit='cover' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text>scale-down</aex-text>
            <aex-image style='width:120px;height:120px' :src='url' fit='scale-down' />
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg'
            }
        },
        methods: {
            complete(img) {
                console.log('complete', img)
            }
        },
    }
</script>
```

:::

### 占位

通过具名 `slot = placeholder` 自定义加载中的占位内容   
通过 `slot = error` 可自定义加载失败的占位内容
:::demo 

```html
<template>
    <aex-row :gutter='10'>
        <aex-col :span='4'>
            <aex-text>默认展示</aex-text>
            <aex-image style='width:200px;height:200px' />
        </aex-col>
        <aex-col :span='4'>
            <aex-text>加载中</aex-text>
            <aex-image :src="url" fit='cover' style='width:200px;height:200px'>
                <!-- <div slot="placeholder">
                    加载中...
                </div> -->
            </aex-image>
        </aex-col>
        <aex-col :span='4'>
            <aex-text>加载失败</aex-text>
            <aex-image src="xxx" fit='cover' style='width:200px;height:200px'>
                <!-- <div slot="error" >
                    加载失败
                </div> -->
            </aex-image>
        </aex-col>
    </aex-row>
</template>
<script>
    export default {
        data() {
            return {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg'
            }
        }
    }
</script>
```

:::

### 懒加载

可通过 `lazy` 开启懒加载功能，当图片滚动到可视范围内才会加载。   
可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 `overflow` 值为 `auto` 或 `scroll` 的父元素。
:::demo 

```html
    <div style='width:400px;height:300px;overflow-y:auto;'>
        <aex-image style="width:100%;height: 100%" fit="cover" v-for="url in urls" :key="url" :src="url" lazy></aex-image>
    </div>

    <script>
        export default {
            data() {
                return {
                    urls: [
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic11.nipic.com%2F20101209%2F4394820_003423992807_2.jpg&refer=http%3A%2F%2Fpic11.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626933863&t=0caa3d62d0faa32d5fca5d1ac621c2c4',
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3438413553,834879777&fm=26&gp=0.jpg',
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2F2013%2F2%2F18%2Fu_20130218165304639264.jpg&refer=http%3A%2F%2Fcar0.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626933863&t=579c7c5134114fb2cfb72d7a88f3abd3',
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565173774,1989253727&fm=26&gp=0.jpg',
                        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg',
                    ],
                }
            }
        }
    </script>
```

:::

### 大图预览

可通过添加 `preview-src-list` 开启预览大图的功能。

:::demo 

```html
<div class="demo-image__preview">
    <aex-image style="width: 100px; height: 100px" fit='cover' :src="url" :preview-src-list="urls">
    </aex-image>
</div>

<script>
    export default {
        data() {
            return {
                url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg',
                urls: [
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic11.nipic.com%2F20101209%2F4394820_003423992807_2.jpg&refer=http%3A%2F%2Fpic11.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626933863&t=0caa3d62d0faa32d5fca5d1ac621c2c4',
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3438413553,834879777&fm=26&gp=0.jpg',
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2F2013%2F2%2F18%2Fu_20130218165304639264.jpg&refer=http%3A%2F%2Fcar0.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626933863&t=579c7c5134114fb2cfb72d7a88f3abd3',
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565173774,1989253727&fm=26&gp=0.jpg',
                    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg',
                ],
            }
        }
    }
</script>
```

:::

### 参数

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| src | - | string | — | - |
| fit | 确定图片如何适应容器框 | string | fill / contain / cover / none / scale-down | - |
| alt | - | string | - | - |
| referrer-policy | 原生 referrerPolicy | string | - | - |
| lazy | 是否开启懒加载 | boolean | — | false |
| scroll-container | 开启懒加载后，监听 scroll 事件的容器 | string / HTMLElement | — | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| preview-src-list | 开启图片预览功能 | Array | — | - |
| z-index | 设置图片预览的 z-index | Number | — | 2000 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| load | 图片加载成功触发 | (e: Event) |
| error | 图片加载失败触发 | (e: Error) |
| complete | 图片加载完成返回图片尺寸 | {width, height} |

### Slots

| 名称    | 说明         |
|---------|-------------|
| placeholder | 图片未加载的占位内容 |
| error | 加载失败的内容 |
