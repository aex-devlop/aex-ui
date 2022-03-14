# Table 表格

### 按需引入

```
import { Table,TableColumn } from 'aex-ui';
Vue.use(Table)
Vue.use(TableColumn)
```

### 基础表格

在 `aex-table` 元素中绑定 `data` 对象数组，   
在 `aex-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，   
用 `label` 属性来定义表格的列名。   
用 `width` 属性来定义列宽。   
默认情况下若内容过多会折行显示，若需要单行显示可以在aex-table-column上设置 `show-overflow-tooltip` 为 `true` 时多余的内容会在 hover 时以 tooltip 的形式显示出来。   
 
`size` : 表格大小 defalut / medium / small / mini   
`align` : 给 `aex-table-column` 设置对齐方式，默认 `left` , 值有 `left, center, right`

:::demo 

```html
  <template>
      <aex-radio-group v-model="tableSize" size="small" style='marginBottom:10px'>
          <aex-radio-button label="">默认</aex-radio-button>
          <aex-radio-button label="medium">medium</aex-radio-button>
          <aex-radio-button label="small">small</aex-radio-button>
          <aex-radio-button label="mini">mini</aex-radio-button>
      </aex-radio-group>

      <aex-table :data="tableData" style="width: 100%" :size='tableSize'>
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种" width="180">
          </aex-table-column>
          <aex-table-column prop="type" label="类型" width='120' show-overflow-tooltip>
          </aex-table-column>
          <aex-table-column prop="num" label="数量" align='center'>
          </aex-table-column>
          <aex-table-column prop="status" label="状态" align='right'>
          </aex-table-column>
      </aex-table>
  </template>

  <script>
      export default {
          data() {
              return {
                  tableSize: '',
                  tableData: [{
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售',
                          num: '+14.93856200',
                          status: '已完成',
                      },
                      {
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售',
                          num: '+14.93856200',
                          status: '已完成',
                      },
                      {
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售',
                          num: '+14.93856200',
                          status: '已完成',
                      },
                      {
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售OTC交易-出售OTC交易-出售OTC交易-出售',
                          num: '+14.93856200',
                          status: '已完成',
                      },
                  ]
              }
          },
      }
  </script>
```

:::

### 空数据 / 加载中

数据为空时 默认展示 `Empty组件 no_record类型` :
可通过 `emptyType, emptyImageWidth, emptyImageHeight` 等参数自定义  
或者 通过 `slot="empty"` 的插槽方式自定义空数据   

`loading` 设置为 `true` 即可展示加载中  
:::demo 

```html
  <template>
      <aex-text title='h4'>默认空数据</aex-text>
      <aex-table :data="tableData" style="width: 100%">
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种">
          </aex-table-column>
          <aex-table-column prop="type" label="类型">
          </aex-table-column>
          <aex-table-column prop="num" label="数量">
          </aex-table-column>
          <aex-table-column prop="status" label="状态">
          </aex-table-column>
      </aex-table>

      <aex-text title='h4' style='marginTop:20px'>刷新按钮</aex-text>
      <aex-table :data="tableData" style="width: 100%" emptyButtonText='刷新' @emptyEvent='reLoad'>
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种">
          </aex-table-column>
          <aex-table-column prop="type" label="类型">
          </aex-table-column>
          <aex-table-column prop="num" label="数量">
          </aex-table-column>
          <aex-table-column prop="status" label="状态">
          </aex-table-column>
      </aex-table>

      <aex-text title='h4' style='marginTop:20px'>自定义空数据</aex-text>
      <aex-table :data="tableData" style="width: 100%">
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种">
          </aex-table-column>
          <aex-table-column prop="type" label="类型">
          </aex-table-column>
          <aex-table-column prop="num" label="数量">
          </aex-table-column>
          <aex-table-column prop="status" label="状态">
          </aex-table-column>
          <div slot="empty">这里自定义空数据～～～</div>
      </aex-table>

      <aex-text title='h4' style='marginTop:20px'>加载中</aex-text>
      <aex-table :data="tableData" style="width: 100%" emptyButtonText='刷新' @emptyEvent='reLoad' loading>
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种">
          </aex-table-column>
          <aex-table-column prop="type" label="类型">
          </aex-table-column>
          <aex-table-column prop="num" label="数量">
          </aex-table-column>
          <aex-table-column prop="status" label="状态">
          </aex-table-column>
      </aex-table>
  </template>

  <script>
      export default {
          data() {
              return {
                  tableData: []
              }
          },
          methods: {
              reLoad() {
                  this.$message('真的没有数据了！！！')
              }
          },
      }
  </script>
```

:::

### 带边框表格

`border` 属性 设置为 `true` 可设置为带边框的表哥
:::demo 

```html
  <template>
      <aex-table :data="tableData" style="width: 100%" border>
          <aex-table-column prop="date" label="日期" width="180">
          </aex-table-column>
          <aex-table-column prop="coin" label="币种" width="180">
          </aex-table-column>
          <aex-table-column prop="type" label="类型">
          </aex-table-column>
      </aex-table>
  </template>

  <script>
      export default {
          data() {
              return {
                  tableData: [{
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售'
                      },
                      {
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售'
                      },
                      {
                          date: '2016-05-02',
                          coin: 'GAT',
                          type: 'OTC交易-出售'
                      },
                  ]
              }
          }
      }
  </script>
```

:::

### 带斑马纹表格

使用带斑马纹的表格，用于区分出不同行的数据的视觉效果。   
`stripe` 属性可以创建带斑马纹的表格。它接受一个 `Boolean` ，默认为 `false` ，设置为 `true` 即为启用。
:::demo 

```html
<template>
    <aex-table :data="tableData" style="width: 100%" stripe>
        <aex-table-column prop="date" label="日期" width="180">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="180">
        </aex-table-column>
        <aex-table-column prop="type" label="类型">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                ]
            }
        }
    }
</script>
```

:::

### 带状态表格（自定义highlight）

`row-class-name` 属性来为 Table 中的某一行添加 class，来设置某一样的样式，一般用于表示某行数据的状态      
row-class-name: (row, rowIndex)=> string / string

:::demo

```html
<template>
    <aex-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <aex-table-column prop="date" label="日期" width="180">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="180">
        </aex-table-column>
        <aex-table-column prop="type" label="类型">
        </aex-table-column>
    </aex-table>
</template>

<style>
    .aex-table .warn {
        background-color: #feefe5;
    }

    .aex-table .success {
        background-color: #ebf7f4;
    }
</style>

<script>
    export default {
        methods: {
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warn';
                } else if (rowIndex === 2) {
                    return 'success';
                }
                return '';
            }
        },
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                ]
            }
        }
    }
</script>
```

:::

### 固定表头

纵向内容过多时，可选择固定表头。
在 `aex-table` 元素中定义了 `height` 属性即可, 当内容超过设定高度时，就会出现滚动条   
设置 `max-height` 也可以，
:::demo

```html
<template>
    <aex-table :data="tableData" style="width: 100%" height='200'>
        <aex-table-column prop="date" label="日期" width="180">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="180">
        </aex-table-column>
        <aex-table-column prop="type" label="类型">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售'
                    },
                ]
            }
        }
    }
</script>
```

:::

### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用 `fixed` 属性，它接受 Boolean 值或者 `left`  `right` ，表示左边固定还是右边固定。

```html
<template>
    <aex-table :data="tableData" border style="width: 800px">
        <aex-table-column fixed prop="date" label="日期" width="200">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="200">
        </aex-table-column>
        <aex-table-column prop="type" label="类型" width="200">
        </aex-table-column>
        <aex-table-column prop="num" label="数量" width="200">
        </aex-table-column>
        <aex-table-column prop="status" label="状态" width="200">
        </aex-table-column>
        <aex-table-column fixed="right" label="操作" width="160">
            <template slot-scope="scope">
                <aex-button @click="handleClick(scope.row)" type="text" size="mini">详情</aex-button>
                <aex-button type="text" size="mini">编辑</aex-button>
            </template>
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',

                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                ]
            }
        }
    }
</script>
```

:::

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。
在 aex-table-column 里面嵌套 aex-table-column，就可以实现多级表头。

:::demo 

```html
<template>
    <aex-table :data="tableData" border style="width: 100%">
        <aex-table-column prop="date" label="日期" width="200">
        </aex-table-column>

        <aex-table-column label="币种信息">
            <aex-table-column prop="coin" label="币种" width="200">
            </aex-table-column>
            <aex-table-column prop="type" label="类型">
            </aex-table-column>
            <aex-table-column prop="num" label="数量">
            </aex-table-column>
        </aex-table-column>
        <aex-table-column prop="status" label="状态">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',

                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                ]
            }
        }
    }
</script>
```

:::

### 单选

添加 `highlight-current-row` 属性即可实现单选。之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow` ， `oldCurrentRow` 。   
如果需要显示索引，可以增加一列 `aex-table-column` ，设置 `type` 属性为 `index` 即可显示从 1 开始的索引号。

:::demo 

```html
<template>
    <aex-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <aex-table-column type="index" label="序号" width="50">
        </aex-table-column>
        <aex-table-column prop="date" label="日期" width="200">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="200">
        </aex-table-column>
        <aex-table-column prop="type" label="类型" width="200">
        </aex-table-column>
        <aex-table-column prop="num" label="数量" width="200">
        </aex-table-column>
        <aex-table-column prop="status" label="状态" width="200">
        </aex-table-column>
    </aex-table>
    <div style="margin-top: 20px">
        <aex-button type='outline' @click="setCurrent(tableData[1])">选中第二行</aex-button>
        <aex-button type='outline' @click="setCurrent()">取消选择</aex-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',

                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                ],
                currentRow: null
            }
        },

        methods: {
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            }
        }
    }
</script>
```

:::

### 多选

额外添加一个 `aex-table-column` ，设 `type` 属性为 `selection` 即可实现多选

:::demo 

```html
<template>
    <aex-table ref="multipleTable" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <aex-table-column type="selection" width="55">
        </aex-table-column>
        <aex-table-column prop="date" label="日期" width="200">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="200">
        </aex-table-column>
        <aex-table-column prop="type" label="类型" width="200">
        </aex-table-column>
        <aex-table-column prop="num" label="数量">
        </aex-table-column>
        <aex-table-column prop="status" label="状态">
        </aex-table-column>
    </aex-table>
    <div style="margin-top: 20px">
        <aex-button width='200px' @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</aex-button>
        <aex-button @click="toggleSelection()">取消选择</aex-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',

                    },
                    {
                        date: '2016-05-02',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: '已完成',
                    },
                ],
                multipleSelection: []
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
```

:::

### 排序

`sortable` 属性即可实现以该列为基准的排序，接受一个 `Boolean` ，默认为 `false` 。   
可以通过 Table 的 `default-sort` 属性设置默认的排序列和排序顺序。   
可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。   
如果需要后端排序，需将 `sortable` 设置为 `custom` ，同时在 Table 上监听 `sort-change` 事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。   
`formatter` 属性，它用于格式化指定列的值，接受一个 `Function` ，会传入两个参数： `row` 和 `column` ，可以根据自己的需求进行处理。

:::demo

```html
<template>
    <aex-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <aex-table-column prop="date" label="日期" width="200" sortable>
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="200" sortable>
        </aex-table-column>
        <aex-table-column prop="type" label="类型" width="200" sortable>
        </aex-table-column>
        <aex-table-column prop="num" label="数量" sortable>
        </aex-table-column>
        <aex-table-column prop="status" label="状态" :formatter="formatter">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    },
                    {
                        date: '2016-05-02',
                        coin: 'BTC',
                        type: 'OTC交易-出售',
                        num: '+18.93856200',
                        status: 0,

                    },
                    {
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    },
                ],
            }
        },
        methods: {
            formatter(row, column) {
                return row.status == 1 ? '已完成' : '待处理';
            }
        }
    }
</script>
```

:::

### 筛选

在列中同时设置 `filters`  `filter-method` 属性即可开启该列的筛选:   
filters 是一个数组，是放置渲染筛选弹窗的列表的数据，格式[{key:xxx, value:xxx}, ...]   
`filter-method` 是一个方法，它用于决定某些数据是否显示，会传入三个参数： `value` , `row` 和 `column` 。(value, row, column)=> Boolean

:::demo 

```html
<template>
    <aex-button @click="resetDateFilter">清除日期过滤器</aex-button>
    <aex-button @click="clearFilter">清除所有过滤器</aex-button>
    <aex-table ref="filterTable" :data="tableData" style="width: 100%">
        <aex-table-column prop="date" label="日期" width="200" sortable column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}]" :filter-method="filterHandler">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="200" sortable :filters="[{ text: 'GAT', value: 'GAT' }, { text: 'BTC', value: 'BTC' }]" :filter-method="filterCoin" filter-placement="bottom-end">
        </aex-table-column>
        <aex-table-column prop="type" label="类型" width="200" sortable>
        </aex-table-column>
        <aex-table-column prop="num" label="数量" sortable>
        </aex-table-column>
        <aex-table-column prop="status" label="状态" :formatter="formatter">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    },
                    {
                        date: '2016-05-02',
                        coin: 'BTC',
                        type: 'OTC交易-出售',
                        num: '+18.93856200',
                        status: 0,

                    },
                    {
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    },
                ],
            }
        },
        methods: {
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterCoin(value, row) {
                return row.coin === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            }
        }
    }
</script>
```

:::

### 自定义列模板

自定义列的显示内容，可组合其他组件使用。
通过 `Scoped slot` 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
:::demo

```html
<template>
    <aex-table :data="tableData" style="width: 100%">
        <aex-table-column label="日期" width="180">
            <template slot-scope="scope">
                <i class="aex-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </aex-table-column>
        <aex-table-column label="币名" width="180">
            <template slot-scope="scope">
                <aex-popover trigger="hover" placement="left">
                    <aex-text title='h3'>币名: {{ scope.row.coin }}</aex-text>
                    <aex-text>类型: {{ scope.row.type }}</aex-text>
                    <aex-text>数量: {{ scope.row.num }}</aex-text>
                    <aex-tag slot="reference" size="medium">{{ scope.row.coin }}</aex-tag>
                </aex-popover>
            </template>
        </aex-table-column>
        <aex-table-column label="操作">
            <template slot-scope="scope">
                <aex-button size="mini" type='outline' @click="handleEdit(scope.$index, scope.row)">编辑</aex-button>
                <aex-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</aex-button>
            </template>
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    },
                    {
                        date: '2016-05-02',
                        coin: 'BTC',
                        type: 'OTC交易-出售',
                        num: '+18.93856200',
                        status: 0,

                    },
                    {
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    },
                ],
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
```

:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
通过设置 type="expand" 和 `Scoped slot` 可以开启展开行功能，    
`aex-table-column` 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 `Scoped slot` 相同。
:::demo 

```html
<template>
    <aex-table :data="tableData" style="width: 100%">
        <aex-table-column type="expand" label="展开" :width='200'>
            <template slot-scope="props">
                <aex-form label-position="left" inline>
                    <aex-form-item label="日期">
                        <span>{{ props.row.date }}</span>
                    </aex-form-item>
                    <aex-form-item label="类型">
                        <span>{{ props.row.type }}</span>
                    </aex-form-item>
                </aex-form>
            </template>
        </aex-table-column>
        <aex-table-column label="币种" prop="coin">
        </aex-table-column>
        <aex-table-column label="数量" prop="num">
        </aex-table-column>
        <aex-table-column label="状态" prop="status" :formatter="formatter">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    },
                    {
                        date: '2016-05-02',
                        coin: 'BTC',
                        type: 'OTC交易-出售',
                        num: '+18.93856200',
                        status: 0,

                    },
                    {
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    },
                ],
            }
        },
        methods: {
            formatter(row, column) {
                return row.status == 1 ? '已完成' : '待处理';
            },
        }
    }
</script>
```

:::

### 树形数据与懒加载

支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key` 。   
支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。 `children` 与 `hasChildren` 都可以通过 `tree-props` 配置。   
非异步加载的数据，可以使用 `default-expand-all` 默认展开所有的子节点
:::demo 

```html
<template>
    <div>
        <aex-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <aex-table-column prop="date" label="日期" sortable width="180">
            </aex-table-column>
            <aex-table-column prop="coin" label="币种" sortable width="180">
            </aex-table-column>
            <aex-table-column prop="type" label="类型" sortable width="180">
            </aex-table-column>
            <aex-table-column prop="num" label="数量">
            </aex-table-column>
        </aex-table>

        <aex-table :data="tableData1" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <aex-table-column prop="date" label="币种" width="180">
            </aex-table-column>
            <aex-table-column prop="coin" label="姓名" width="180">
            </aex-table-column>
            <aex-table-column prop="type" label="类型" width="180">
            </aex-table-column>
            <aex-table-column prop="num" label="数量">
            </aex-table-column>
        </aex-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-01',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+14.93856200',
                    status: 1,
                }, {
                    id: 2,
                    date: '2016-05-01',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+14.93856200',
                    status: 1,
                }, {
                    id: 3,
                    date: '2016-05-01',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+14.93856200',
                    status: 1,
                    children: [{
                        id: 31,
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    }]
                }, ],
                tableData1: [{
                        id: 1,
                        date: '2016-05-01',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+14.93856200',
                        status: 1,
                    },
                    {
                        id: 2,
                        date: '2016-05-02',
                        coin: 'BTC',
                        type: 'OTC交易-出售',
                        num: '+18.93856200',
                        status: 0,
                        hasChildren: true
                    },
                    {
                        id: 3,
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    },
                ],
            }
        },
        methods: {
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([{
                        id: 21,
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    }, {
                        id: 22,
                        date: '2016-05-03',
                        coin: 'GAT',
                        type: 'OTC交易-出售',
                        num: '+12.93856200',
                        status: 1,
                    }])
                }, 1000)
            }
        },
    }
</script>
```

:::

### 自定义表头

通过 `slot="header"` 来自定义表头。

:::demo 

```html
<template>
    <aex-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <aex-table-column label="日期" prop="date">
        </aex-table-column>
        <aex-table-column label="币种" prop="coin">
        </aex-table-column>
        <aex-table-column prop="type">
            <template slot="header" slot-scope="scope">
                <aex-tooltip content="这里就提示一下">
                    <span>类型 <i class='aex-icon-question-circle' /></span>
                </aex-tooltip>
            </template>
        </aex-table-column>
        <aex-table-column align="right">
            <template slot="header" slot-scope="scope">
                <aex-input v-model="search" size="mini" placeholder="输入搜索" />
            </template>
            <template slot-scope="scope">
                <aex-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</aex-button>
                <aex-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</aex-button>
            </template>
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '+12.93856200',
                    status: 1,
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
    }
</script>
```

:::

### 表尾合计行

 将 `show-summary` 设置为 `true` 就会在表格尾部展示合计行。   
 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 `sum-text` 配置），其余列会将本列所有数值进行求合操作，并显示出来。   
 也可以定义自己的合计逻辑。使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。
:::demo

```html
<template>
    <aex-table :data="tableData" border show-summary style="width: 100%">
        <aex-table-column prop="date" label="日期">
        </aex-table-column>
        <aex-table-column prop="coin" sortable label="币种">
        </aex-table-column>
        <aex-table-column prop="type" sortable label="类型">
        </aex-table-column>
        <aex-table-column prop="num" sortable label="数量">
        </aex-table-column>
    </aex-table>

    <aex-table :data="tableData" border height="200" :summary-method="getSummaries" show-summary style="width: 100%; margin-top: 20px">
        <aex-table-column prop="date" label="日期">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种">
        </aex-table-column>
        <aex-table-column prop="type" label="类型">
        </aex-table-column>
        <aex-table-column prop="num" label="num">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }]
            };
        },
        methods: {
            getSummaries(param) {
                const {
                    columns,
                    data
                } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = '';
                    }
                });

                return sums;
            }
        }
    };
</script>
```

:::

### 合并行或列

通过给 `table` 传入 `span-method` 方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行 `row` 、当前列 `column` 、当前行号 `rowIndex` 、当前列号 `columnIndex` 四个属性。    
该函数可以返回一个包含两个元素的数组:[ `rowspan` , `colspan` ]。 也可以返回一个键名为 `rowspan` 和 `colspan` 的对象。   
0 表示不合并，   
rowspan: 代表向下合并几行，   
colspan: 代表向右合并几行，
:::demo 

```html
<template>
    <div>
        <aex-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
            <aex-table-column prop="id" label="ID" width="180">
            </aex-table-column>
            <aex-table-column prop="amount1" sortable label="A">
            </aex-table-column>
            <aex-table-column prop="amount2" sortable label="B">
            </aex-table-column>
            <aex-table-column prop="amount3" sortable label="C">
            </aex-table-column>
        </aex-table>

        <aex-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
            <aex-table-column prop="id" label="ID" width="180">
            </aex-table-column>
            <aex-table-column prop="amount1" label="A">
            </aex-table-column>
            <aex-table-column prop="amount2" label="B">
            </aex-table-column>
            <aex-table-column prop="amount3" label="C">
            </aex-table-column>
        </aex-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }]
            };
        },
        methods: {
            arraySpanMethod({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0]; // 0 表示不合并，
                    }
                }
            },

            objectSpanMethod({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            }
        }
    };
</script>
```

:::

### 自定义索引

通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 `0` 开始）作为参数，返回值将作为索引展示。
:::demo 

```html
<template>
    <aex-table :data="tableData" style="width: 100%">
        <aex-table-column label="序号" type="index" :index="indexMethod">
        </aex-table-column>
        <aex-table-column prop="date" label="日期" width="180">
        </aex-table-column>
        <aex-table-column prop="coin" label="币种" width="180">
        </aex-table-column>
        <aex-table-column prop="type" label="类型">
        </aex-table-column>
        <aex-table-column prop="num" label="数量">
        </aex-table-column>
    </aex-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }, {
                    date: '2016-05-03',
                    coin: 'GAT',
                    type: 'OTC交易-出售',
                    num: '12.93856200',
                    status: 1,
                }],
            }
        },
        methods: {
            indexMethod(index) {
                return index * 2;
            }
        }
    };
</script>
```

:::

### Table Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string/number | — | — |
| max-height | Table 的最大高度。合法的值为数字或者单位为 px 的高度。 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String, Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问： `user.info.id` ，但不支持 `user.info[0].id` ，此种情况请使用 `Function` 。 | Function(row)/String | — | — |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的 `prop` 属性指定默认的排序的列， `order` 指定默认排序的顺序| Object | `order` : ascending, descending | 如果只指定了 `prop` , 没有指定 `order` , 则默认顺序是ascending |
| tooltip-effect | tooltip `effect` 属性 | String | dark/light | | dark |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |
| indent      | 展示树形数据时，树节点的缩进 | Number | — | 16 |
| lazy        | 是否懒加载子节点数据 | Boolean | — | — |
| load        | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | — |
| tree-props  | 渲染嵌套数据的配置选项 | Object | — | { hasChildren: 'hasChildren', children: 'children' } |

### Table Events

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | cellIndex, row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | cellIndex, row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | cellIndex, row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | cellIndex, row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, column, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |

### Table Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | - |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 | columnKey |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数 `prop` 属性指定排序列， `order` 指定排序顺序。 | prop: string, order: string |

### Table Slot

| name | 说明 |
|------|--------|
| append | 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。 |

### Table-column Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | string | selection/index/expand | — |
| index | 如果设置了 `type=index` ，可以通过传递 `index` 属性来自定义索引 | number, Function(index) | - | - |
| column-key | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | string | — | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一： `ascending` 表示升序， `descending` 表示降序， `null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| align | 对齐方式 | String | left/center/right | left |
| header-align | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | String | left/center/right | — |
| class-name | 列的 className | string | — | — |
| label-class-name | 当前列标题的自定义类名 | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key` ） | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-placement | 过滤弹出框的定位 | String | 与 Tooltip 的 `placement` 属性相同 | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |

### Table-column Scoped Slot

| name | 说明 |
|------|--------|
| — | 自定义列的内容，参数为 { row, column, $index } |
| header | 自定义表头的内容. 参数为 { column, $index } |
