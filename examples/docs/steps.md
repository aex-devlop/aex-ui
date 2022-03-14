# Steps 步骤条

### 按需引入

```
import { Steps } from 'aex-ui';
Vue.use(Steps)
```

### 基础用法

`active` 属性: 接受一个 `Number` ，表明步骤的 index，从 0 开始   
`title` 属性: 设置标题，也可以通过具名slot来设置   
`description` 属性: 设置描述，也可以通过具名slot来设置   
:::demo 

```html
<aex-steps :active="active">
    <aex-step title="步骤 1" :description='getDesc(1)'></aex-step>
    <aex-step title="步骤 2" :description='getDesc(2)'></aex-step>
    <aex-step title="步骤 3" :description='getDesc(3)'></aex-step>
</aex-steps>

<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>

<script>
    export default {
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            getDesc(index) {
                if ((this.active + 1) == index) {
                    return '处理中'
                }
                if ((this.active + 1) < index) {
                    return '待处理'
                }
                if ((this.active + 1) > index) {
                    return '已完成'
                }
            }
        }
    }
</script>
```

:::

### 自定义颜色

`finishColor` 属性: 自定义完成时的颜色, 默认颜色: `#3378ff`

:::demo 

```html
<aex-steps :active="active" finishColor='#fa6400'>
    <aex-step title="步骤 1" description='这里是描述1'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3'></aex-step>
</aex-steps>

<aex-button style="margin-top: 20px;" type='warning' @click="next">下一步</aex-button>

<script>
    export default {
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>
```

:::

### 文字排版方向

`text-direction` : 文字的方向, 属性可选值： `vertical, horizontal` , 默认 `vertical`

:::demo 

```html
<aex-steps :active="active" text-direction='horizontal'>
    <aex-step title="步骤 1" description='这里是描述1'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3'></aex-step>
</aex-steps>

<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>

<script>
    export default {
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>
```

:::

### 完成时icon

`space` 属性: 需要定宽的步骤条时设置，它接受 `Number` ，单位为 `px` , 如果不设置，则为自适应。   
`finish-status` 属性：用来设置步骤完成时要展示的状态，单个设置可以用 step 的 `status` 属性

:::demo 

```html
<aex-steps :space='120' :active="active" finished-icon="aex-icon-check" finishColor='#fa6400'>
    <aex-step title="步骤 1" :description='getDesc(1)'></aex-step>
    <aex-step title="步骤 2" :description='getDesc(2)'></aex-step>
    <aex-step title="步骤 3" :description='getDesc(3)'></aex-step>
</aex-steps>

<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>

<script>
    export default {
        data() {
            return {
                active: 0
            };
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            getDesc(index) {
                if ((this.active + 1) == index) {
                    return '处理中'
                }
                if ((this.active + 1) < index) {
                    return '待处理'
                }
                if ((this.active + 1) > index) {
                    return '已完成'
                }
            }
        }
    }
</script>
```

:::

### 居中展示

`align-center` 属性: 设置为剧中展示

:::demo 

```html
<aex-steps :active="2" align-center text-direction='horizontal'>
    <aex-step title="步骤 1" description='这里是描述1'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3'></aex-step>
</aex-steps>
```

:::

### 带图标

`icon` 属性: 给每个步骤设置不同的图标, 也可以通过具名slot来设置

:::demo 

```html
<aex-steps :active="2" align-center>
    <aex-step title="步骤 1" description='这里是描述1' icon='aex-icon-order'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2' icon='aex-icon-dig'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>
</aex-steps>
```

:::

### 竖直方向

`direction` 属性设置为 `vertical` 即可

:::demo 

```html
<aex-steps :active="1" :space='100' direction='vertical'>
    <aex-step title="步骤 1" description='这里是描述1' icon='aex-icon-order'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2' icon='aex-icon-dig'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>
</aex-steps>
```

:::

### 点风格

`dot` 属性设置为 `true` 即可

:::demo 

```html
<aex-steps :active="2" dot finishColor='#fa6400' text-direction='horizontal'>
    <aex-step title="步骤 1" description='这里是描述1'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3'></aex-step>
</aex-steps>
```

:::

### 简洁风格

`simple` 属性设置为 `true` 即可

:::demo 

```html
<aex-steps :active="2" simple>
    <aex-step title="步骤 1" description='这里是描述1' icon='aex-icon-order'></aex-step>
    <aex-step title="步骤 2" description='这里是描述2' icon='aex-icon-dig'></aex-step>
    <aex-step title="步骤 3" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>
</aex-steps>
```

:::

### 条状风格

`strip` 属性设置为 `true` 即可

:::demo 

```html
<aex-steps :active="active" strip>
    <aex-step title="步骤 1"></aex-step>
    <aex-step title="步骤 2"></aex-step>
    <aex-step title="步骤 3"></aex-step>
</aex-steps>
<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>

<script>
    export default {
        data() {
            return {
                active: 1
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>
```

:::

### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| dot | 是否应用点风格 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |
| finishColor | 自定义完成时的颜色 | boolean | - | false |

### Step Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | - |

### Step Slot

| name | 说明  |
|----|----|
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |
