# Carousel 轮播图

### 按需引入

```
import { Carousel,CarouselItem } from 'aex-ui';
Vue.use(Carousel)
Vue.use(Carousel,CarouselItem)
```

### 基础用法

:::demo

```html
<template>
    <aex-carousel height="200px">
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:red">1</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:blue">2</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:gray">3</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:#0098fa">4</div>
        </aex-carousel-item>
    </aex-carousel>
</template>

<style>
    .carousel-item-content {
        color: #fff;
        font-size: 40px;
        line-height: 200px;
        text-align: center;
        margin: 0;
        background: #999;
    }
</style>
```

:::

### 卡片化

:::demo

```html
<template>
    <aex-carousel height="200px" type='card'>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:red">1</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:blue">2</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:gray">3</div>
        </aex-carousel-item>
        <aex-carousel-item>
            <div class="carousel-item-content" style="background:#0098fa">4</div>
        </aex-carousel-item>
    </aex-carousel>
</template>

<style>
    .carousel-item-content {
        color: #fff;
        font-size: 40px;
        line-height: 200px;
        text-align: center;
        margin: 0;
        background: #999;
    }
</style>
```

:::

### 自定义样式

添加自定义Class 直接覆盖即可, 下方模拟aex 官网首页轮播图，修改下方指针样式

:::demo

```html
<template>
    <aex-carousel height="200px" arrow='never' trigger='click' class='custom'>
        <aex-carousel-item style='border-radius: 10px'>
            <img style='width:100%' src='https://aexphoto-1251755124.file.myqcloud.com/img/2021/06/d643478fcf6a246a991811a7ec12a48d.png'>
        </aex-carousel-item>
        <aex-carousel-item style='border-radius: 10px'>
            <img style='width:100%' src='https://aexphoto-1251755124.file.myqcloud.com/img/2021/06/6e40c554ab774810a17d858e7d4285e0.png'>
        </aex-carousel-item>
        <aex-carousel-item style='border-radius: 10px'>
            <img style='width:100%' src='https://aexphoto-1251755124.file.myqcloud.com/img/2021/06/83f6dbe4b70908d483e7bf85b03558bb.png'>
        </aex-carousel-item>
        <aex-carousel-item style='border-radius: 10px'>
            <img style='width:100%' src='https://aexphoto-1251755124.file.myqcloud.com/img/2021/06/a43e64a5baab8ab62a72faddf6f9382d.png'>
        </aex-carousel-item>
    </aex-carousel>
</template>

<style>
    .custom {
        .carousel-item-content {
            color: #fff;
            font-size: 40px;
            line-height: 200px;
            text-align: center;
            margin: 0;
            background: #999;
        }

        .aex-carousel__button {
            width: 4px;
            height: 8px;
            border-radius: 4px;
        }

        .aex-carousel__indicator.is-active .aex-carousel__button {
            height: 14px;
        }

        .aex-carousel__indicators {
            right: 12px;
            left: initial;
            transform: none;
        }
    }
</style>
```

:::

### 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 高度 | string | — | — |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | — | 0 |
| trigger | 指示器的触发方式 | string | click | — |
| autoplay | 是否自动切换 | boolean | — | true |
| interval | 自动切换的时间间隔，单位为毫秒 | number | — | 3000 |
| indicator-position | 指示器的位置 | string | outside/none | — |
| arrow | 切换箭头的显示时机 | string | always/hover/never | hover |
| type | 类型 | string | card | — |
| loop | 是否循环显示 | boolean | - | true |
| direction | 走马灯展示的方向 | string | horizontal/vertical | horizontal |

### Carousel Events

| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

### Carousel Methods

| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| setActiveItem | 手动切换幻灯片 | 需要切换的幻灯片的索引，从 0 开始；或相应 `el-carousel-item` 的 `name` 属性值 |
| prev | 切换至上一张幻灯片 | — |
| next | 切换至下一张幻灯片 | — |

### Carousel-Item

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 幻灯片的名字，可用作 `setActiveItem` 的参数 | string | — | — |
| label | 该幻灯片所对应指示器的文本 | string | — | — |
