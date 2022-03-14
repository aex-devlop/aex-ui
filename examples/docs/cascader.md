# Cascader 级联选择

### 按需引入

```
import { Cascader } from 'aex-ui';
Vue.use(Cascader)
```

### 基础用法

`props` 添加 `expandTrigger` 属性，可以控制子菜单打开方式（ `click/hover` ），默认 `click`

`size` 控制大小， medium / small / mini   
`clearable` 属性，添加清空按钮   
`disabled` , 禁用有两种方式:    
--- 可以通过给optino项添加 `disabled: true` .   
--- 可以通过给props 添加 `disabled` 来禁用.
`show-all-levels` 属性: 是否显示完整的路径，设置为false则仅显示最后一级
:::demo

```html
        <aex-cascader clearable v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover' }"></aex-cascader>
        <aex-cascader v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover' }" size='medium'></aex-cascader>
        <aex-cascader v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover' }" size='small' :show-all-levels='false' placeholder='仅显示最后一级' />
        <aex-cascader v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover',disabled: 'is_disabled' }" size='mini'></aex-cascader>
        <script>
            export default {
                data() {
                    return {
                        options: [{
                                value: 'fontend',
                                label: '前端',
                                children: [{
                                        value: 'js',
                                        label: 'js'
                                    },
                                    {
                                        value: 'css',
                                        label: 'css',
                                        disabled: true // option里 设置禁用
                                    },
                                    {
                                        value: 'vue',
                                        label: 'vue',
                                        children: [{
                                                value: 'aex-ui',
                                                label: 'aex-ui'
                                            },
                                            {
                                                value: 'element',
                                                label: 'element'
                                            },
                                            {
                                                value: 'iview',
                                                label: 'iview'
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                value: 'backtend',
                                label: '后端',
                                children: [{
                                        value: 'php',
                                        label: 'php',
                                        is_disabled: true // 可以通过
                                    },
                                    {
                                        value: 'go',
                                        label: 'go'
                                    },
                                    {
                                        value: 'java',
                                        label: 'java'
                                    },
                                ],
                            },
                        ],
                        value: '',
                    };
                },
                methods: {
                    handleChange(value) {
                        console.log(value);
                    },
                },
            };
        </script>
```

:::

### 多选

`props` 添加 `multiple:true` 属性，开启多选模式，是 `tag` 组件来展示选中项   
默认会展示所有已选中的选项的Tag，你可以使用collapse-tags来折叠Tag
:::demo

```html
        <aex-cascader clearable v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover',multiple:true }"></aex-cascader>
        <aex-cascader clearable v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover',multiple:true }" collapse-tags></aex-cascader>
        <script>
            export default {
                data() {
                    return {
                        options: [{
                                value: 'fontend',
                                label: '前端',
                                children: [{
                                        value: 'js',
                                        label: 'js'
                                    },
                                    {
                                        value: 'css',
                                        label: 'css',
                                        disabled: true // option里 设置禁用
                                    },
                                    {
                                        value: 'vue',
                                        label: 'vue',
                                        children: [{
                                                value: 'aex-ui',
                                                label: 'aex-ui'
                                            },
                                            {
                                                value: 'element',
                                                label: 'element'
                                            },
                                            {
                                                value: 'iview',
                                                label: 'iview'
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                value: 'backtend',
                                label: '后端',
                                children: [{
                                        value: 'php',
                                        label: 'php',
                                        is_disabled: true // 可以通过
                                    },
                                    {
                                        value: 'go',
                                        label: 'go'
                                    },
                                    {
                                        value: 'java',
                                        label: 'java'
                                    },
                                ],
                            },
                        ],
                        value: '',
                    };
                },
                methods: {
                    handleChange(value) {
                        console.log(value);
                    },
                },
            };
        </script>
```

:::

### 选择任意一级选项

`props` 添加 `checkStrictly: true` 属性，可以选择任意级别的节点项，
:::demo

```html
<aex-cascader clearable v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover',checkStrictly: true }" />
<aex-cascader clearable v-model="value" :options="options" @change="handleChange" :props="{ expandTrigger: 'hover',multiple:true,checkStrictly: true }" />
<script>
    export default {
        data() {
            return {
                options: [{
                        value: 'fontend',
                        label: '前端',
                        children: [{
                                value: 'js',
                                label: 'js'
                            },
                            {
                                value: 'css',
                                label: 'css',
                                disabled: true // option里 设置禁用
                            },
                            {
                                value: 'vue',
                                label: 'vue',
                                children: [{
                                        value: 'aex-ui',
                                        label: 'aex-ui'
                                    },
                                    {
                                        value: 'element',
                                        label: 'element'
                                    },
                                    {
                                        value: 'iview',
                                        label: 'iview'
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'backtend',
                        label: '后端',
                        children: [{
                                value: 'php',
                                label: 'php',
                                is_disabled: true // 可以通过
                            },
                            {
                                value: 'go',
                                label: 'go'
                            },
                            {
                                value: 'java',
                                label: 'java'
                            },
                        ],
                    },
                ],
                value: '',
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
        },
    };
</script>
```

:::

### 动态加载子项

当选中某一级时，动态加载该级下的选项：   
通过 `lazy` 开启动态加载   
并通过 `lazyload` 来设置加载数据源的方法: function(node, resolve)， node 为当前点击的节点， resolve 为数据加载完成的回调(必须调用)  
为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。
:::demo

```html
<aex-cascader :props="props"></aex-cascader>

<script>
    let id = 0;

    export default {
        data() {
            return {
                props: {
                    lazy: true,
                    lazyLoad(node, resolve) {
                        const {
                            level
                        } = node;
                        console.log('===', node)
                        setTimeout(() => {
                            const nodes = Array.from({
                                    length: level + 1
                                })
                                .map(item => ({
                                    value: ++id,
                                    label: `选项${id}`,
                                    leaf: level >= 3 // level 从0 开始这里会有4层
                                }));
                            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                            resolve(nodes);
                        }, 1000);
                    }
                }
            };
        }
    };
</script>
```

:::

### 搜索

将 `filterable` 赋值为 `true` 即可打开搜索功能，默认会匹配节点的 `label` 或所有父节点的 `label` (由 `show-all-levels` 决定)中包含输入值的选项。   
可以用 `filter-method` 自定义搜索逻辑，接受一个函数，第一个参数是节点 `node` ，第二个参数是搜索关键词 `keyword` ，通过返回布尔值表示是否命中。
:::demo

```html
  <aex-cascader placeholder="单选搜索" :options="options" filterable></aex-cascader>
  <aex-cascader placeholder="多选搜索" :options="options" :props="{ multiple: true }" filterable></aex-cascader>
  <script>
      let id = 0;

      export default {
          data() {
              return {
                  options: [{
                          value: 'fontend',
                          label: '前端',
                          children: [{
                                  value: 'js',
                                  label: 'js'
                              },
                              {
                                  value: 'css',
                                  label: 'css',
                                  disabled: true // option里 设置禁用
                              },
                              {
                                  value: 'vue',
                                  label: 'vue',
                                  children: [{
                                          value: 'aex-ui',
                                          label: 'aex-ui'
                                      },
                                      {
                                          value: 'element',
                                          label: 'element'
                                      },
                                      {
                                          value: 'iview',
                                          label: 'iview'
                                      },
                                  ],
                              },
                          ],
                      },
                      {
                          value: 'backtend',
                          label: '后端',
                          children: [{
                                  value: 'php',
                                  label: 'php',
                                  is_disabled: true // 可以通过
                              },
                              {
                                  value: 'go',
                                  label: 'go'
                              },
                              {
                                  value: 'java',
                                  label: 'java'
                              },
                          ],
                      },
                  ],
                  value: '',
              };
          }
      };
  </script>
```

:::

### 自定义节点展示

可以通过 `scoped slot` 对级联选择器的备选项的节点内容进行自定义，   
scoped slot会传入两个字段 `node` 和 `data` ，分别表示当前节点的 Node 对象和数据。
:::demo

```html
  <aex-cascader placeholder="单选搜索" :options="options" filterable>
      <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <!-- 不是叶子节点，就展示下级的数量 -->
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
  </aex-cascader>
  <script>
      let id = 0;

      export default {
          data() {
              return {
                  options: [{
                          value: 'fontend',
                          label: '前端',
                          children: [{
                                  value: 'js',
                                  label: 'js'
                              },
                              {
                                  value: 'css',
                                  label: 'css',
                                  disabled: true // option里 设置禁用
                              },
                              {
                                  value: 'vue',
                                  label: 'vue',
                                  children: [{
                                          value: 'aex-ui',
                                          label: 'aex-ui'
                                      },
                                      {
                                          value: 'element',
                                          label: 'element'
                                      },
                                      {
                                          value: 'iview',
                                          label: 'iview'
                                      },
                                  ],
                              },
                          ],
                      },
                      {
                          value: 'backtend',
                          label: '后端',
                          children: [{
                                  value: 'php',
                                  label: 'php',
                                  is_disabled: true // 可以通过
                              },
                              {
                                  value: 'go',
                                  label: 'go'
                              },
                              {
                                  value: 'java',
                                  label: 'java'
                              },
                          ],
                      },
                  ],
                  value: '',
              };
          }
      };
  </script>
```

:::

### 面板

只是没有了下拉选择器及其下拉框的相关属性，其它属性则与下拉选择器一样
:::demo

```html
  <aex-cascader-panel :options="options" />
  <script>
      let id = 0;

      export default {
          data() {
              return {
                  options: [{
                          value: 'fontend',
                          label: '前端',
                          children: [{
                                  value: 'js',
                                  label: 'js'
                              },
                              {
                                  value: 'css',
                                  label: 'css',
                                  disabled: true // option里 设置禁用
                              },
                              {
                                  value: 'vue',
                                  label: 'vue',
                                  children: [{
                                          value: 'aex-ui',
                                          label: 'aex-ui'
                                      },
                                      {
                                          value: 'element',
                                          label: 'element'
                                      },
                                      {
                                          value: 'iview',
                                          label: 'iview'
                                      },
                                  ],
                              },
                          ],
                      },
                      {
                          value: 'backtend',
                          label: '后端',
                          children: [{
                                  value: 'php',
                                  label: 'php',
                                  is_disabled: true // 可以通过
                              },
                              {
                                  value: 'go',
                                  label: 'go'
                              },
                              {
                                  value: 'java',
                                  label: 'java'
                              },
                          ],
                      },
                  ],
                  value: '',
              };
          }
      };
  </script>
```

:::

### Cascader Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | - | — | — |
| options | 可选项数据源，键名可通过 `Props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |
| size | 尺寸 | string | medium / small / mini | — |
| placeholder | 输入框占位文本 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空选项 | boolean | — | false |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | — | true |
| collapse-tags | 多选模式下是否折叠Tag | boolean | - | false |
| separator | 选项分隔符 | string | — | 斜杠' / ' |
| filterable | 是否可搜索选项 | boolean | — | — |
| filter-method | 自定义搜索逻辑，第一个参数是节点 `node` ，第二个参数是搜索关键词 `keyword` ，通过返回布尔值表示是否命中 | function(node, keyword) | - | - |
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | — | 300 |
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function(value) | — | — |
| popper-class | 自定义浮层类名   | string | —  | — |

### Cascader Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |
| blur | 当失去焦点时触发 | (event: Event) |
| focus | 当获得焦点时触发 | (event: Event) |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值 |

### Cascader Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 获取选中的节点 | (leafOnly) 是否只是叶子节点，默认值为 `false` |

### Cascader Slots

| 名称     | 说明 |
|---------|-------------|
| - | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty  | 无匹配选项时的内容 |

### CascaderPanel Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 选中项绑定值 | - | — | — |
| options | 可选项数据源，键名可通过 `Props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |

### CascaderPanel Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |

### CascaderPanel Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 `false` |
| clearCheckedNodes | 清空选中的节点 | - |

### CascaderPanel Slots

| 名称     | 说明 |
|---------|-------------|
| - | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |

### Props

| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| expandTrigger | 次级菜单的展开方式 | string | click / hover | 'click' |
| multiple | 是否多选 | boolean | - | false |
| checkStrictly | 是否严格的遵守父子节点不互相关联 | boolean | - | false |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean | - | true |
| lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | boolean | - | false |
| lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 | function(node, resolve)， `node` 为当前点击的节点， `resolve` 为数据加载完成的回调(必须调用) | - | - |
| value    | 指定选项的值为选项对象的某个属性值 | string | — | 'value' |
| label    | 指定选项标签为选项对象的某个属性值 | string | — | 'label' |
| children | 指定选项的子选项为选项对象的某个属性值 | string | — | 'children' |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | — | 'disabled' |
| leaf     | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string | — | 'leaf' |
