# InfiniteScroll 无限滚动

### 按需引入

```
import { InfiniteScroll } from 'aex-ui';
Vue.use(InfiniteScroll)
```

滚动至底部时，自动加载更多数据。   
<aex-text type='info'>(要给需要滚动的容器设置好 overflow, 和height，如果没有设置会一直向上寻找，直到 Document)</aex-text>

### 基础用法

在要实现滚动加载的列表上上添加 `v-infinite-scroll` ，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
:::demo

```html
<template>
    <aex-scrollbar tag="div" wrap-class='infinite-list'>
        <div v-infinite-scroll="load">
            <aex-text title='h3' v-for="i in count" class="infinite-list-item">{{ i }}</aex-text>
        </div>
    </aex-scrollbar>
</template>

<script>
    export default {
        data() {
            return {
                count: 10
            }
        },
        methods: {
            load() {
                this.count += 2
            }
        }
    }
</script>
<style lang='less'>
    .infinite-list {
        height: 300px;
        overflow-x: hidden;

        .infinite-list-item {
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: @--color-primary-light-2;
            color: @--color-primary-dark-1;

            &+.infinite-list-item {
                margin-top: 10px;
            }
        }
    }
</style>
```

:::

### 禁用自动加载

组件提供 `infinite-scroll-disabled` 属性禁止执行加载，一般用于后端数据没有时，设置为 `true` 即可
:::demo

```html
<template>
    <aex-scrollbar tag="div" wrap-class='infinite-list-wrapper'>
        <ul class="list" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
            <li v-for="i in count" class="list-item">{{ i }}</li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </aex-scrollbar>
</template>

<script>
    export default {
        data() {
            return {
                count: 10,
                loading: false
            }
        },
        computed: {
            noMore() {
                return this.count >= 20
            },
            disabled() {
                return this.loading || this.noMore
            }
        },
        methods: {
            load() {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>
<style>
    .infinite-list-wrapper {
        height: 300px;
        text-align: center;

        .list {
            padding: 0;
            margin: 0;
            list-style: none;
        }

        .list-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            background: @--color-gray-light-6;
            color: @--color-gray-light-1;

            &+.list-item {
                margin-top: 10px;
            }
        }
    }
</style>
```

:::

### 参数

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | 是否禁用           | boolean      | - |false |
| infinite-scroll-delay   | 节流时延，单位为ms   | number       |   - |200   |
| infinite-scroll-distance| 触发加载的距离阈值，单位为px | number   |- |0 |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。| boolean | - |true |
