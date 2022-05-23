# Input 输入框

### 按需引入

```
import { Input } from 'aex-ui';
Vue.use(Input)
```

组件默认宽度100%，可使用容器包裹，或者设置style 来设置宽度

### 基础用法

通过 `size` 属性 设置高度 `default:40px, medium:36px, small:32px, mini:28px` ，   
通过 `disabled` 属性 设置是否禁用   
通过 `clearable` 属性 设置是否显示清楚按钮   
通过 `show-password` 属性 设置是否显示密码 显/隐 按钮   

:::demo

```html
<aex-row :gutter='30'>
    <aex-col :span='4'>
        <aex-input v-model="input" placeholder="请输入内容" @keyup.enter='onKeyup' @keydown.tab='onKeydown'></aex-input>
    </aex-col>
    <aex-col :span='4'>
        <aex-input v-model="input1" placeholder="禁用" disabled size='medium'></aex-input>
    </aex-col>
    <aex-col :span='4'>
        <aex-input v-model="input2" placeholder="带有清空按钮" clearable size='small'></aex-input>
    </aex-col>
    <aex-col :span='4'>
        <aex-input v-model="input3" placeholder="密码框" show-password size='mini'></aex-input>
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
            }
        },
        methods: {
            onKeyup(e) {
                console.log('onKeyup', e)
            },
            onKeydown(e) {
                console.log('onKeydown', e)
            }
        },
    }
</script>
```

:::

### 带 icon 的输入框 (前缀/后缀内容)

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。   
当通过 slot显示图标时，需要给 i元素添加 `aex-input__icon` 类或自行设置样式    
也可以通过slot 可以添加其他任意你想要内容【目前只有30px 的宽度，如需要可自行通过样式覆盖修改】
:::demo

```html
<aex-row :gutter='30'>
    <aex-col :span='5'>
        <aex-input v-model="input" placeholder="搜索" prefix-icon="aex-icon-search"></aex-input>
    </aex-col>
    <aex-col :span='5'>
        <aex-input v-model="input1" placeholder="请输入金额" suffix-icon='aex-icon-lock'></aex-input>
    </aex-col>
    <aex-col :span='5'>
        <aex-input v-model="input2" placeholder="slot 方式">
            <i slot='prefix' class='aex-input__icon aex-icon-search'></i>
        </aex-input>
    </aex-col>
    <aex-col :span='5'>
        <aex-input v-model="input3" placeholder="自定义" prefix-icon='aex-icon-lock'>
            <span slot='suffix' class='aex-input__icon'>BTC/USDT</span>
        </aex-input>
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
            }
        }
    }
</script>
```

:::

### 文本域

通过 `rows` 属性控制文本域高度
通过 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，   
并且 autosize 还可以设定为一个对象，指定最小高度和最大高度 例如:autosize="{ minRows: 2, maxRows: 4}"   
通过
:::demo 

```html
<aex-row :gutter='20'>
    <aex-col :span='6'>
        <aex-input type="textarea" :rows="2" placeholder="rows='2'" v-model="textarea" />
    </aex-col>
    <aex-col :span='6'>
        <aex-input type="textarea" autosize placeholder="autosize" v-model="textarea1" />
    </aex-col>
    <aex-col :span='6'>
        <aex-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder=':autosize="{ minRows: 2, maxRows: 4}"' v-model="textarea2" />
    </aex-col>
    <aex-col :span='6'>
        <aex-input type="textarea" placeholder='请输入内容' v-model="textarea3" maxlength="120" show-word-limit />
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                textarea: '',
                textarea1: '',
                textarea2: '',
                textarea3: '',
            }
        }
    }
</script>
```

:::

### 输入长度限制

通过 `maxlength` ， `minlength` ， 用来限制输入框的字符长度；
通过 `show-word-limit` , 属性来显示字数统计。

:::demo 

```html
<aex-row :gutter='20'>
    <aex-col :span='6'>
        <aex-input placeholder="只能输入10个字符" v-model="textarea" maxlength="10" />
    </aex-col>
    <aex-col :span='6'>
        <aex-input type="textarea" placeholder='请输入内容' v-model="textarea1" maxlength="120" show-word-limit />
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                textarea: '',
                textarea1: '',
            }
        }
    }
</script>
```

:::

:::

### 复合型输入框 （添加前置或后置元素）

通过slot `prepend` ， `append` ， 用来添加前置或后置元素

:::demo 

```html
<aex-row :gutter='20'>
    <aex-col :span='8'>
        <aex-input placeholder='请输入内容' v-model="input">
            <aex-button width='50px' slot="append" icon="aex-icon-search"></aex-button>
        </aex-input>
    </aex-col>
    <aex-col :span='8'>
        <aex-input placeholder="限额 15 - 7,000" v-model="input1" style="width:400px">
            <template slot="prepend">
                <aex-select v-model="inputSelect" placeholder="请选择" style="width:120px">
                    <aex-option label="按金额购买" value="1" />
                    <aex-option label="按数量购买" value="2" />
                </aex-select>
            </template>
            <span slot="suffix" class="aex-input__icon">USDT</span>
        </aex-input>
    </aex-col>
    <aex-col :span='8'>
        <aex-input placeholder="0.00" v-model="input2">
            <template slot="prepend">
                <aex-select v-model="value" placeholder="请选择" filterable default-first-option style="width:120px">
                    <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        <span style="float: left"><i class='aex-icon-value' />&nbsp;{{ item.label }}</span>
                        <span style="float: right; color: #999; font-size: 12px">{{ item.value }}</span>
                    </aex-option>
                    <i slot='prefix' class='aex-input__icon aex-icon-value'></i>
                </aex-select>
            </template>
            <!-- <span slot="suffix" class="aex-input__icon">全部</span> -->
            <aex-button width='50px' slot="append">全部</aex-button>
        </aex-input>
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                inputSelect: '1',
                options: [{
                    value: '1',
                    label: 'BTC',
                }, {
                    value: '2',
                    label: 'ETH'
                }, {
                    value: '98',
                    label: 'GAT'
                }, {
                    value: '0',
                    label: 'LTC',
                    disabled: true
                }, {
                    value: '3',
                    label: 'USDT'
                }],
                value: [],
            }
        }
    }
</script>
```

:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 原生 input 的 type 值 | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | medium / small / mini  | — |
| prefix-icon   | 输入框头部图标    | string          | — | — |
| suffix-icon   | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| tabindex | 输入框的tabindex | string | - | - |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |

### Input Slots

| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |
| keyup | 键盘up事件 | — |
| keydown | 键盘down事件 | — |

### Input Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |
