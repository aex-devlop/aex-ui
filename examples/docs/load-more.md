## LoadMore 加载更多

### 按需引入

```
import { LoadMore } from 'aex-ui';
Vue.use(LoadMore)
```

### 基础用法

:::demo 

```html
<template>
    <aex-row>
        <aex-col :span='4'>
            <aex-load-more :loading="loading" :has-more="hasMore" @click="onLoad"></aex-load-more>
        </aex-col>
        <aex-col :span='4'>
            <aex-load-more :loading="loading" :has-more="hasMore" @click="onLoad">
                <span>自定义【点击加载文本】</span>
                <span slot="loading-text">自定义【加载中文本...】</span>
                <span slot="loaded-text">自定义【加载完毕文本...】</span>
            </aex-load-more>
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                hasMore: true,
                list: 1
            };
        },
        methods: {
            onLoad() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
                this.list++
                this.hasMore = this.list <= 3
            }
        },
    };
</script>
```

:::

### LoadMore Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| loading     | 是否加载中      | boolean          |  —  | false |
| has-more     | 是否还有数据      | boolean          | — | true |

### Slot

| 参数 | 说明 |
|--- | ---|
| — | 默认文本/组件 |
| loading-text | 加载中的文本/组件 |
| loaded-text | 加载完毕的文本/组件 |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击加载事件| — |
