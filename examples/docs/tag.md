# Tag 标签

### 按需引入

```
import { Tag } from 'aex-ui';
Vue.use(Tag)
```

### 基础用法

`type` 属性选择颜色体系: success/info/warning/danger, 也可以通过 `color` 属性来自定义背景色。   
`closable` 属性添加关闭按钮, 通过close 时间自行处理关闭事件

:::demo

```html
<aex-tag closable>Aex UI</aex-tag>
<aex-tag type="success" closable>Aex UI</aex-tag>
<aex-tag type="info" closable>Aex UI</aex-tag>
<aex-tag type="warning" closable>Aex UI</aex-tag>
<aex-tag type="danger" closable>Aex UI</aex-tag>
```

:::

### 尺寸

`size` 属性设置大小: default /medium / small / mini

:::demo

```html
<aex-tag>Aex UI</aex-tag>
<aex-tag size='medium'>Aex UI</aex-tag>
<aex-tag size='small'>Aex UI</aex-tag>
<aex-tag size='mini'>Aex UI</aex-tag>
```

:::

### 主题

`effect` 属性改变主题: light(默认) /dark / plain

:::demo

```html
<div style='marginBottom:20px'>
    <aex-tag effect='plain'>Aex UI</aex-tag>
    <aex-tag type="success" effect='plain'>Aex UI</aex-tag>
    <aex-tag type="info" effect='plain'>Aex UI</aex-tag>
    <aex-tag type="warning" effect='plain'>Aex UI</aex-tag>
    <aex-tag type="danger" effect='plain'>Aex UI</aex-tag>
</div>
<div>
    <aex-tag effect='dark'>Aex UI</aex-tag>
    <aex-tag type="success" effect='dark'>Aex UI</aex-tag>
    <aex-tag type="info" effect='dark'>Aex UI</aex-tag>
    <aex-tag type="warning" effect='dark'>Aex UI</aex-tag>
    <aex-tag type="danger" effect='dark'>Aex UI</aex-tag>
</div>
```

:::

### 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

:::demo

```html
<aex-tag style='marginRight:10px' :key="tag" v-for="tag in coins" closable @close="handleClose(tag)">
    {{tag}}
</aex-tag>
<aex-input style='width:100px' v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
</aex-input>
<aex-button v-else size="small" @click="showInput">Add Coin</aex-button>

<script>
    export default {
        data() {
            return {
                coins: ['BTC', 'ETH', 'GAT'],
                inputVisible: false,
                inputValue: ''
            };
        },
        methods: {
            handleClose(tag) {
                this.coins.splice(this.coins.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.coins.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
    }
</script>
```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| disable-transitions | 是否禁用渐变动画 | boolean | — | false |
| hit | 是否有边框描边 | boolean | — | false |
| color | 背景色 | string | — | — |
| size | 尺寸 | string | medium / small / mini | — |
| effect | 主题 | string | dark / light / plain | light |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |
