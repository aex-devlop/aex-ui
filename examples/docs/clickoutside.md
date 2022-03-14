# Clickoutside 点击元素外面触发的事件

### 按需引入

```
import { Clickoutside } from 'aex-ui';
Vue.use(Clickoutside)
```

### 基础用法

在要绑定的元素上添加 `v-clickoutside` ，并赋值相应的方法，。
:::demo

```html
<template>
    <div style='border:1px solid #ccc;height:100px;width:200px;textAlign:center;lineHeight:100px' @click='_clickinside' v-clickoutside="_clickoutside">
        点击元素里面
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 10
            }
        },
        methods: {
            _clickinside() {
                this.$message('你点击元素里面了')
            },
            _clickoutside() {
                this.$message.warning('你点击到元素【外面】了')
            }
        }
    }
</script>
```
