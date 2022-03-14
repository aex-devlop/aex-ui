# Transition 过渡动画

Aex UI 过渡动画，可以直接使用。

### fade 淡入淡出

:::demo 提供 `aex-fade-in-linear` 和 `aex-fade-in` 两种效果。

```html
<template>
    <div>
        <aex-button @click="show = !show">点击查看效果</aex-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="aex-fade-in-linear">
                <div v-show="show" class="transition-box">.aex-fade-in-linear</div>
            </transition>
            <transition name="aex-fade-in">
                <div v-show="show" class="transition-box">.aex-fade-in</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show: true
        })
    }
</script>
```

:::

### zoom 缩放

:::demo 提供 `aex-zoom-in-center` ， `aex-zoom-in-top` 和 `aex-zoom-in-bottom` 三种效果。

```html
<template>
    <div>
        <aex-button @click="show2 = !show2">点击查看效果</aex-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="aex-zoom-in-center">
                <div v-show="show2" class="transition-box">.aex-zoom-in-center</div>
            </transition>

            <transition name="aex-zoom-in-top">
                <div v-show="show2" class="transition-box">.aex-zoom-in-top</div>
            </transition>

            <transition name="aex-zoom-in-bottom">
                <div v-show="show2" class="transition-box">.aex-zoom-in-bottom</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show2: true
        })
    }
</script>
```

:::

### collapse 展开折叠

使用 `aex-collapse-transition` 组件实现折叠展开效果。

:::demo

```html
<template>
    <div>
        <aex-button @click="show3 = !show3">点击查看效果</aex-button>

        <div style="margin-top: 20px; height: 200px;">
            <aex-collapse-transition>
                <div v-show="show3">
                    <div class="transition-box">aex-collapse-transition</div>
                    <div class="transition-box">aex-collapse-transition</div>
                </div>
            </aex-collapse-transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show3: true
        })
    }
</script>
```

:::

### 按需引入

```js
// fade/zoom 等
import 'aex-ui/lib/theme/base.css';
// collapse 展开折叠
import CollapseTransition from 'aex-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
