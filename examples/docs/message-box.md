# MessageBox 提示弹框

适合展示较为简单的提示/确认信息。如果需要弹出较为复杂的内容，请使用 aex-dialog组件。   
组件默认宽度380px，可以通过添加customClass 来修改

### 按需引入

```
import { MessageBox } from 'aex-ui';
Vue.prototype.$msgbox = MessageBox;
```

### 基础用法

`blockButton` 属性弹窗底部按钮设置为100%宽度   
 部分场景不需要标题， `title` 属性不写即可
:::demo 

```html
<template>
    <aex-button type='outline' @click="open1">基础用法</aex-button>
    <aex-button type='outline' @click="open2">设置Options</aex-button>
    <aex-button type='outline' @click="open3">按钮100%</aex-button>
    <aex-button type='outline' @click="open4">无标题</aex-button>
</template>

<script>
    export default {
        methods: {
            open1() {
                this.$msgbox('API Key跟您的账号安全紧密相关，凡知晓您API', 'API确认');
            },

            open2() {
                this.$msgbox({
                    title: 'API确认',
                    message: 'API Key跟您的账号安全紧密相关，凡知晓您API',
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            open3() {
                this.$msgbox({
                    title: 'API确认2',
                    message: 'API Key跟您的账号安全紧密相关，凡知晓您API',
                    blockButton: true
                });
            },
            open4() {
                this.$msgbox('API Key跟您的账号安全紧密相关，凡知晓您API');
            },
        }
    }
</script>
```

:::

### 确认弹框

询问是/否进行此操作时会用到此对话框。

调用 `showCancelButton` 属性添加取消按钮。可以用了 Promise 来处理后续callback。
:::demo 

```html
<template>
    <aex-button type='outline' @click="open">确认弹框</aex-button>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$msgbox({
                    title: '认证',
                    message: '请使用手机扫描下方二维码，打开实名认证界面。',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    showCancelButton: true,
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                }).catch(() => {});
            }
        }
    }
</script>
```

:::

### 使用 HTML 

`dangerouslyUseHTMLString` 属性设置为 `true` ，来使用html 构造message 内容。   
这里也只能使用原生的html 字符串，如果要使用更复杂的内容/组件，请使用 `Dialog` 组件
:::demo 

```html
<template>
    <aex-button type='outline' @click="open">使用 HTML</aex-button>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$msgbox({
                    title: 'HTML',
                    message: `<div>
                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML
                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML
                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML
                </div>`,
                    confirmButtonText: '确定',
                    dangerouslyUseHTMLString: true,
                    callback: action => {
                        this.$message({
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>
```

:::

### 居中布局 

`center` 属性设置为 `true` 即可开启居中布局
:::demo 

```html
<template>
    <aex-button type='outline' @click="open">居中布局</aex-button>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$msgbox({
                    title: '居中布局',
                    message: '居中布局居中布局居中布局居中布局居中布局',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true,
                    blockButton: true,
                    callback: action => {
                        this.$message({
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        }
    }
</script>
```

:::

### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | MessageBox 标题 | string | — | — |
| message | MessageBox 消息正文内容 | string / VNode | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | MessageBox 的自定义类名 | string | — | — |
| callback | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调 | function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法 | — | — |
| showClose | MessageBox 是否显示右上角关闭按钮 | boolean | — | true |
| beforeClose | MessageBox 关闭前的回调，会暂停实例的关闭 | function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例 | — | — |
| distinguishCancelAndClose | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分 | boolean | — | false |
| lockScroll | 是否在 MessageBox 出现时将 body 滚动锁定 | boolean | — | true |
| showCancelButton | 是否显示取消按钮 | boolean | — | false |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
| cancelButtonClass | 取消按钮的自定义类名 | string | — | — |
| confirmButtonClass | 确定按钮的自定义类名 | string | — | — |
| closeOnClickModal | 是否可通过点击遮罩关闭 MessageBox | boolean | — | true |
| closeOnPressEscape | 是否可通过按下 ESC 键关闭 MessageBox | boolean | — | true |
| closeOnHashChange | 是否在 hashchange 时关闭 MessageBox | boolean | — | true |
| center | 是否居中布局 | boolean | — | false |
| roundButton | 是否使用圆角按钮 | boolean | — | false |
| blockButton | 按钮是否占满空间 | boolean | — | false |
