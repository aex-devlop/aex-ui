# Select 选择器

### 按需引入

```
import { Select,Option } from 'aex-ui';
Vue.use(Select)
Vue.use(Option)
```

### 基础用法（单选）

`v-model` 的值为当前被选中的 `aex-option` 的 value 属性值   
aex-select, 设置 `clearable` 属性，添加清除按钮   
aex-select, 设置 `size` 属性，调整大小，default/medium/samll/mini  
aex-option，设定 `disabled` 值为 true，即可禁用该选项   

:::demo

```html
<template>
    <aex-select v-model="value" placeholder="请选择" clearable>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
    <aex-select v-model="value" placeholder="请选择" clearable size='medium'>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
    <aex-select v-model="value" placeholder="请选择" clearable size='small'>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
    <aex-select v-model="value" placeholder="请选择" clearable size='mini'>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'btc',
                    label: 'BTC',
                }, {
                    value: 'eth',
                    label: 'ETH'
                }, {
                    value: 'gat',
                    label: 'GAT'
                }, {
                    value: 'ltc',
                    label: 'LTC',
                    disabled: true
                }, {
                    value: 'usdt',
                    label: 'USDT'
                }],
                value: ''
            }
        }
    }
</script>
```

:::

### 多选  

aex-select, 设置 `multiple` 属性，启用多选, 此时 `v-model` 的值为当前选中值所组成的数组   
若容器宽度不够，多选会换行，可设置 `collapse-tags` 属性隐藏多余的tag

:::demo

```html
<template>
    <aex-select v-model="value" placeholder="请选择" multiple>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
    <aex-select v-model="value1" placeholder="请选择" multiple collapse-tags>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled='item.disabled'>
        </aex-option>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'btc',
                    label: 'BTC',
                }, {
                    value: 'eth',
                    label: 'ETH'
                }, {
                    value: 'gat',
                    label: 'GAT'
                }, {
                    value: 'ltc',
                    label: 'LTC',
                    disabled: true
                }, {
                    value: 'usdt',
                    label: 'USDT'
                }],
                value: [],
                value1: [],
            }
        }
    }
</script>
```

:::

### 自定义option

使用 `aex-option` 的 slot 即可自定义

:::demo

```html
<template>
    <aex-select v-model="value" placeholder="请选择" filterable default-first-option>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #999; font-size: 12px">{{ item.value }}</span>
        </aex-option>
        <i slot='prefix' class='aex-input__icon aex-icon-value'></i>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
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
                    value: '0',
                    label: 'USDT'
                }],
                value: [],
                value1: [],
            }
        }
    }
</script>
```

:::

### 分组option

使用 `aex-option-grou` 包裹 `aex-option` 分组

:::demo

```html
<template>
    <aex-select v-model="value" placeholder="请选择">
        <aex-option-group v-for="group in options" :key="group.label" :label="group.label">
            <aex-option v-for="item in group.children" :key="item.value" :label="item.label" :value="item.value">
            </aex-option>
        </aex-option-group>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                        label: '主板',
                        children: [{
                            value: 'btc',
                            label: 'BTC',
                        }, {
                            value: 'eth',
                            label: 'ETH'
                        }, ]
                    },
                    {
                        label: '创新板',
                        children: [{
                            value: 'gat',
                            label: 'GAT'
                        }, {
                            value: 'ltc',
                            label: 'LTC',
                            disabled: true
                        }, {
                            value: 'usdt',
                            label: 'USDT'
                        }]
                    },
                ],
                value: [],
            }
        }
    }
</script>
```

:::

### 带输入搜索  

aex-select, 添加 `filterable` 属性即可启用搜索功能, 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项   
`filter-method` 可以用来自行处理搜索的逻辑。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。   
`default-first-option` ，在该属性打开的情况下，输入搜索后，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。
:::demo

```html
<template>
    <aex-select v-model="value" placeholder="输入搜索" filterable default-first-option>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </aex-option>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'btc',
                    label: 'BTC',
                }, {
                    value: 'eth',
                    label: 'ETH'
                }, {
                    value: 'gat',
                    label: 'GAT'
                }, {
                    value: 'ltc',
                    label: 'LTC',
                }, {
                    value: 'usdt',
                    label: 'USDT'
                }],
                value: [],
                value1: [],
            }
        },
    }
</script>
```

:::

### 远程搜索  

aex-select, 添加 `filterable` 和 `remote` 为 `true` 同时传入一个remote-method, 属性可启用远程搜索功能   
remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值
:::demo

```html
<template>
    <aex-select v-model="value" placeholder="输入搜索" filterable remote :remote-method="remoteMethod" :loading="loading">
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </aex-option>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                options: [],
                value: [],
                vlist: [{
                    value: 'btc',
                    label: 'BTC',
                }, {
                    value: 'eth',
                    label: 'ETH'
                }, {
                    value: 'gat',
                    label: 'GAT'
                }, {
                    value: 'ltc',
                    label: 'LTC',
                }, {
                    value: 'usdt',
                    label: 'USDT'
                }],
            }
        },
        methods: {
            remoteMethod(val) {
                if (val !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.vlist.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(val.toLowerCase()) > -1;
                        });
                    }, 1000);
                } else {
                    this.options = [];
                }
            }
        },
    }
</script>
```

:::

### 创建选项

创建并选中选项中不存在的条目   
使用 `allow-create` 属性即可通过在输入框中输入文字来创建新的条目。注意此时 `filterable` 必须为真
:::demo

```html
<template>
    <aex-select v-model="value" placeholder="创建选项" multiple filterable allow-create default-first-option>
        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </aex-option>
    </aex-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'btc',
                    label: 'BTC',
                }, {
                    value: 'eth',
                    label: 'ETH'
                }, {
                    value: 'gat',
                    label: 'GAT'
                }, {
                    value: 'ltc',
                    label: 'LTC',
                }, {
                    value: 'usdt',
                    label: 'USDT'
                }],
                value: [],
                value1: [],
            }
        },
    }
</script>
```

:::

:::tip
如果 Select 的绑定值为对象类型，请务必指定 `value-key` 作为它的唯一性标识。
:::

### Select Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 是否可以清空选项 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| autocomplete | select input 的 autocomplete 属性 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字，也可以使用 `slot="empty"` 设置 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字，也可以使用 `slot="empty"` 设置 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean | - | false |

### Select Events

| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Select Slots

|   name  | 说明     |
|---------|---------|
|    —    | Option 组件列表 |
| prefix  | Select 组件头部内容 |
| empty | 无选项时的列表 |
| footer | 自定义下拉选项底部 |

### Option Group Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

### Option Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |
