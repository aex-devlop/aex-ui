# Autocomplete 输入建议

### 按需引入

```
import { Autocomplete } from 'aex-ui';
Vue.use(Autocomplete)
```

根据输入内容提供对应的输入建议   
组件已默认做了输入防抖处理，尤其对于需要远程获取数据的情景极大提高了搜索优化

通过 `fetch-suggestions` 是一个返回输入建议的方法属性：(inputVal, cb)=>{..., cb(data:[])}   
通过 `trigger-on-focus` 确认是否在输入框 focus 时显示建议列表，默认是true，若设置为false 则是在开始输入的时候显示   
通过 `slot-scope="{ _VALUE_ }"` 作用域插槽获取建议值，自定义列表展示的样式
:::demo 

```html
<aex-row :gutter='20'>
    <aex-col :span='8'>
        <aex-autocomplete v-model="state1" :fetch-suggestions="onSearch" placeholder="请输入内容" @select="handleSelect"></aex-autocomplete>
    </aex-col>
    <aex-col :span='8'>
        <aex-autocomplete v-model="state2" :fetch-suggestions="onSearch" placeholder="自定义展示模版" @select="handleSelect">
            <template slot-scope="{ _VALUE_ }">
                <span class="addr">{{ _VALUE_.value }}:{{ _VALUE_.name }}</span>
            </template>
        </aex-autocomplete>
    </aex-col>
</aex-row>

<script>
    export default {
        data() {
            return {
                suggestionsList: [],
                state1: '',
                state2: ''
            };
        },
        methods: {
            handleSelect(item) {
                console.log(item);
            },

            // 这里也可以直接从服务端获取数据
            onSearch(inputVal, cb) {
                var suggestionsList = this.suggestionsList;
                var results = inputVal ? suggestionsList.filter(this.createFilter(inputVal)) : suggestionsList;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            // 从列表里过滤搜索的数据
            createFilter(inputVal) {
                return (suggestionsList) => {
                    return (suggestionsList.value.toLowerCase().indexOf(inputVal.toLowerCase()) === 0);
                };
            },
            // 这里一般是后端获取的数据列表
            loadSuggestionsList() {
                return [{
                        "value": "USDT",
                        "name": 'usdt'
                    },
                    {
                        "value": "ETH",
                        "name": 'eth'
                    },
                    {
                        "value": "BTC",
                        "name": 'btc'
                    },
                    {
                        "value": "GAT",
                        "name": 'gat'
                    },
                    {
                        "value": "LTC",
                        "name": 'ltc'
                    },
                    {
                        "value": "BCH",
                        "name": 'bch'
                    },
                    {
                        "value": "BTS",
                        "name": 'bts'
                    },
                    {
                        "value": "BSV",
                        "name": 'bsv'
                    },
                    {
                        "value": "BTM",
                        "name": 'btm'
                    },
                    {
                        "value": "ADA",
                        "name": 'ada'
                    },
                ]
            }
        },
        mounted() {
            this.suggestionsList = this.loadSuggestionsList();
        }
    }
</script>
```

:::

### Autocomplete Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| placeholder   | 输入框占位文本   | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| value-key | 输入建议对象中用于显示的键名 | string | — | value |
| value         | 必填值，输入绑定值   | string  | — | — |
| debounce      | 获取输入建议的去抖延时 | number         | — | 300 |
| placement     | 菜单弹出位置 | string         | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它  | Function(inputVal, callback)  | — | — |
| popper-class | Autocomplete 下拉列表的类名 | string | — | — |
| trigger-on-focus | 是否在输入框 focus 时显示建议列表 | boolean | — | true |
| name | 原生属性 | string | — | — |
| select-when-unmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件 | boolean | — | false |
| label | 输入框关联的label文字 | string | — | — |
| prefix-icon | 输入框头部图标 | string | — | — |
| suffix-icon | 输入框尾部图标 | string | — | — |
| hide-loading | 是否隐藏远程加载时的加载图标 | boolean | — | false |
| popper-append-to-body | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| highlight-first-item | 是否默认突出显示远程搜索建议中的第一项 | boolean | — | false |

### Autocomplete Slots

| name | 说明 |
|------|--------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

### Autocomplete Scoped Slot

| name | 说明 |
|------|--------|
| — | 自定义输入建议，参数为 { item } |

### Autocomplete Events

| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| select | 点击选中建议项时触发 | 选中建议项 |
| change | 在 Input 值改变时触发 | (value: string \| number) |

### Autocomplete Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
