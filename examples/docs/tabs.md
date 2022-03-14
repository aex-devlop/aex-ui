# Tabs 标签页

### 按需引入

```
import { Tabs,TabPane } from 'aex-ui';
Vue.use(Tabs)
Vue.use(TabPane)
```

### 基础用法

通过 `v-model` 属性来绑定 tab的切换数据，   
通过 `@tab-click` 来监听点击事件, 返回(el, event)=>void, el 是选中标签的实例，el.paneName 就是当前标签的 name / index(没有设置name时)   
添加 `slot='extra'` 来扩展头部操作 

:::demo 

```html
<template>
    <aex-tabs v-model="activeName" @tab-click="handleClick">
        <aex-button slot='extra'>Extra</aex-button>
        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>
        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>
        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>
        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>
        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>
        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>
    </aex-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
```

:::

### 选项卡样式

`type` 设置为card / border-card

:::demo 

```html
<template>
    <aex-tabs v-model="activeName" @tab-click="handleClick" type='card' style='marginBottom:20px'>
        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>
        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>
        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>
        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>
        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>
        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>
    </aex-tabs>
    <aex-tabs v-model="activeName" @tab-click="handleClick" type='border-card'>
        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>
        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>
        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>
        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>
        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>
        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>
    </aex-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
```

:::

### 位置

`tab-position` 设置为 `top/right/bottom/left` 来确定标签的位置，默认是 top

:::demo 

```html
<template>
    <aex-button-group style="margin-bottom: 30px;">
        <aex-button type='outline' @click='tabPosition="top"'>top</aex-button>
        <aex-button type='outline' @click='tabPosition="right"'>right</aex-button>
        <aex-button type='outline' @click='tabPosition="bottom"'>bottom</aex-button>
        <aex-button type='outline' @click='tabPosition="left"'>left</aex-button>
    </aex-button-group>
    <aex-tabs v-model="activeName" :tabPosition='tabPosition' style='height:300px'>
        <div slot="extra">extra</div>
        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>
        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>
        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>
        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>
        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>
        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>
    </aex-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first',
                tabPosition: 'top'
            };
        }
    };
</script>
```

:::

### 自定义标签页

可以通过具名 `slot="label"` 来实现自定义标签页的内容

:::demo 

```html
<template>
    <aex-tabs @tab-click="handleClick">
        <aex-tab-pane>
            <span slot="label"><i class='aex-icon-value' />资产总览</span>
            资产总览
        </aex-tab-pane>
        <aex-tab-pane>
            <span slot="label"><i class='aex-icon-assetsCNC' />币币账户</span>
            币币账户
        </aex-tab-pane>
        <aex-tab-pane label="流动性账户">流动性账户</aex-tab-pane>
        <aex-tab-pane label="合约账户">合约账户</aex-tab-pane>
        <aex-tab-pane label="理财账户">理财账户</aex-tab-pane>
        <aex-tab-pane label="质押资金">质押资金</aex-tab-pane>
    </aex-tabs>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
```

:::

### Tabs Attributes

| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model  | 绑定值，选中选项卡的 name  | string   |  —  |  第一个选项卡的 name |
| type     | 风格类型   | string   | card/border-card  |     —    |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| addable  | 标签是否可增加   | boolean   | — |  false  |
| editable  | 标签是否同时可增加和关闭   | boolean   | — |  false  |
| tab-position  | 选项卡所在位置 | string   |  top/right/bottom/left  |  top |
| stretch  | 标签的宽度是否自撑开 | boolean   |  -  |  false |
| before-leave | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | — | — |

### Tabs Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中时触发 | 被选中的标签 tab 实例 |
| tab-remove  | 点击 tab 移除按钮后触发  | 被删除的标签的 name |
| tab-add  | 点击 tabs 的新增按钮后触发  | — |
| edit  | 点击 tabs 的新增按钮或 tab 被关闭后触发  | (targetName, action) |

### Tabs Slot

| name | 说明  | 默认值 |
|----|----|---|
| extra | header 扩展 | null |

### Tab-pane Attributes

| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| disabled | 是否禁用 | boolean | — | false |
| name      | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| lazy  | 标签是否延迟渲染   | boolean   | — |  false  |
