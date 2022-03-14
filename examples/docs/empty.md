## Empty 空数据

```
import { Empty } from 'aex-ui';
Vue.use(Empty)
```

### 基本用法

组件提供 15种类型供选择, (现有的图片比例都是10:9 的比例)   
组件的默认宽度是200px, 可直接通过 style 修改

:::demo

```html
<template>
    <aex-row :gutter='30'>
        <aex-col :span='4' style='marginBottom:30px' v-for='item in types' :key='item'>
            <aex-text title='h3' style='marginBottom:5px'>{{item}}</aex-text>
            <aex-empty image-width="100px" :type="item" @click='handleClick' />
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                types: [
                    'coming_soon',
                    'no_address',
                    'no_assests',
                    'no_block',
                    'no_comment',
                    'no_coupon',
                    'no_data',
                    'no_follow',
                    'no_login',
                    'no_network',
                    'no_news',
                    'no_optional_coin',
                    'no_order',
                    'no_record',
                    'no_result'
                ]
            }
        },
        methods: {
            handleClick() {
                this.$message('Empty data callback!!!')
            }
        }
    }
</script>
```

:::

### 自定义文字

`text` : 属性，自定义文字, 
`button-text` : 属性，自定义按钮文字，不写就没有按钮   
或者通过 slot='text' 自定义

:::demo

```html
<template>
    <aex-row>
        <aex-col :span='12'>
            <aex-empty image-width="100px" type="coming_soon" @click='handleClick' text='有点击事件' button-text='点击回调' />
        </aex-col>
        <aex-col :span='12'>
            <aex-empty image-width="100px" type="coming_soon" text='没有有点击事件' />
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$message('Empty data callback!!!')
            }
        }
    }
</script>
```

:::

### 参数

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 空数据类型 | string | 见顶部 types | - |
| image-width | - | string | - | 100% |
| image-height | - | string | - | auto |
| text | 文字 | string | - | - |
| button-text | 按钮文字 | string | - | auto |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 按钮点击 | - |

### Slots

| 名称    | 说明         |
|---------|-------------|
| text | 自定义底部文字 |
