# Dialog 模态对话框

Dialog 弹出一个模态对话框，适合需要定制性更大的场景

### 按需引入

```
import { Dialog } from 'aex-ui';
Vue.use(Dialog)
```

:::tip
通过设置 `visible` 属性 `true/false` ，来显示/隐藏   
`footer` 需要通过具名为 `footer` 的 `slot` 来自定义   
`title` 属性用于定义标题，它是可选的，默认值为空，也可通过具名为 `title` 的 `slot` 来自定义  
:::

### 基础用法

:::demo 

```html
<template>
    <aex-button type="text" @click="dialogVisible1 = true">基础用法</aex-button>
    <aex-dialog title="提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose" center>
        <span>这是一段信息</span>

        <span slot="footer">
            <aex-button size='mini' type='outline' @click="dialogVisible1 = false">取 消</aex-button>
            <aex-button size='mini' type="primary" @click="dialogVisible1 = false">确 定</aex-button>
        </span>
    </aex-dialog>

    <aex-button type="text" @click="dialogVisible2 = true">内容嵌套</aex-button>
    <aex-dialog title="提示" :visible.sync="dialogVisible2" width="30%">

        <aex-text v-show='step == 1'>第一部分内容...</aex-text>
        <aex-text v-show='step == 2'>第二部分内容...</aex-text>
        <span slot="footer">
            <aex-button size='small' type='outline' @click="prev" v-show='step > 1'>上一步</aex-button>
            <aex-button size='small' type='outline' @click="next" v-show='step == 1'>下一步</aex-button>
            <aex-button size='small' type="primary" @click="complete" v-show='step > 1'>确 定</aex-button>
        </span>
    </aex-dialog>

    <aex-button type="text" @click="dialogVisible3 = true" width='300px'>弹框最大高度600像素</aex-button>
    <aex-dialog title="提示" :visible.sync="dialogVisible3" width="30%" :before-close="handleClose">
        <aex-scrollbar tag="div" noresize wrap-style='height:470px;'>
            <aex-text v-for='i in 50' :key='i'>弹框最大高度600像素</aex-text>
        </aex-scrollbar>

        <span slot="footer">
            <aex-button size='mini' type='outline' @click="dialogVisible3 = false">取 消</aex-button>
            <aex-button size='mini' type="primary" @click="dialogVisible3 = false">确 定</aex-button>
        </span>
    </aex-dialog>

    <aex-button type="text" @click="dialogVisible4 = true">完全自定义内容</aex-button>
    <aex-dialog title="提示" :visible.sync="dialogVisible4" width="30%" :before-close="handleClose" center custom>
        <div style='background:#fff'>这里随便折腾</div>
    </aex-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible1: false,
                dialogVisible2: false,
                step: '1',
                dialogVisible3: false,
                dialogVisible4: false
            };
        },
        methods: {
            prev() {
                this.step--
            },
            next() {
                this.step++
            },
            complete() {
                this.dialogVisible2 = false
                this.step = 1
            },
            handleClose(done) {
                // this.$msgbox('确认关闭？')
                //     .then(_ => {
                //         done();
                //     })
                //     .catch(_ => {});
                done()
            }
        }
    };
</script>
```

:::

:::tip
Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。
:::

:::tip
如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Dialog 的 `open` 和 `close` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | string    | — | — |
| width     | Dialog 的宽度 | string    | — | 50% |
| fullscreen     | 是否为全屏 Dialog | boolean    | — | false |
| top       | Dialog CSS 中的 margin-top 值 | string | — | 15vh |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| modal-append-to-body     | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上   | boolean   | — | true |
| append-to-body     | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true   | boolean   | — | false |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 屏幕居中布局 | boolean | — | false |
| custom | 自定义内容 | boolean | — | false |
| destroy-on-close | 关闭时销毁 Dialog 中的元素 | boolean | — | false |

### Slot

| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| open  | Dialog 打开的回调 | — |
| opened  | Dialog 打开动画结束时的回调 | — |
| close  | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |
