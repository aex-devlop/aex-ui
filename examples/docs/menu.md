# Menu 导航菜单

### 按需引入

```
import { Menu,MenuItem,Submenu } from 'aex-ui';
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu) // 根据需要引入
```

:::tip
`<aex-menu>` 添加 `router` 属性，开启vue-router模式，    
同时 `<aex-menu-item>` 的 `index` 属性直接写对应的 router path即可, 相当于 `<router-link/>` ，   
也可以给他 `<aex-menu-item>` 设置 `route` 属性（Vue Router 路径对象）
:::

### 顶部导航栏

:::demo 

```html
<template>
    <aex-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <aex-menu-item index="1">处理中心</aex-menu-item>
        <aex-submenu index="2">
            <template slot="title">我的工作台</template>
            <aex-menu-item index="2-1">选项1</aex-menu-item>
            <aex-menu-item index="2-2">选项2</aex-menu-item>
            <aex-menu-item index="2-3">选项3</aex-menu-item>
            <aex-submenu index="2-4">
                <template slot="title">选项4</template>
                <aex-menu-item index="2-4-1">选项1</aex-menu-item>
                <aex-menu-item index="2-4-2">选项2</aex-menu-item>
                <aex-menu-item index="2-4-3">选项3</aex-menu-item>
            </aex-submenu>
        </aex-submenu>
        <aex-menu-item index="3" disabled>消息中心</aex-menu-item>
        <aex-menu-item index="4">订单管理</aex-menu-item>
        <aex-submenu>
            <template slot="title">自定义弹出菜单</template>
            <div>这里随便写</div>
        </aex-submenu>
    </aex-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>
```

:::

### 侧边栏

:::demo 

```html
<template>
    <aex-row>
        <aex-col :span='6'>
            <div style='width:220px;background: #fafbfd'>
                <aex-menu :default-active="activeIndex" @select="handleSelect">
                    <aex-menu-item index="1">处理中心</aex-menu-item>
                    <aex-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <aex-menu-item index="2-1">选项1</aex-menu-item>
                        <aex-menu-item index="2-2">选项2</aex-menu-item>
                        <aex-menu-item index="2-3">选项3</aex-menu-item>
                        <aex-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <aex-menu-item index="2-4-1">选项1</aex-menu-item>
                            <aex-menu-item index="2-4-2">选项2</aex-menu-item>
                            <aex-menu-item index="2-4-3">选项3</aex-menu-item>
                        </aex-submenu>
                    </aex-submenu>
                    <aex-menu-item index="3" disabled>消息中心</aex-menu-item>
                    <aex-menu-item index="4">订单管理</aex-menu-item>
                </aex-menu>
            </div>
        </aex-col>
        <aex-col :span='6'>
            <div style='width:220px;background: #fafbfd'>
                <aex-menu center :default-active="activeIndex" @select="handleSelect">
                    <aex-menu-item-group>
                        <div slot="title"><i class="aex-icon-yield" style='marginRight:6px;marginLeft:-40px'></i>资产管理</div>
                        <aex-menu-item index="1">我的资产</aex-menu-item>
                        <aex-menu-item index="2">我的订单</aex-menu-item>
                        <aex-menu-item index="3">交易优惠</aex-menu-item>
                    </aex-menu-item-group>
                    <aex-menu-item-group>
                        <div slot="title"><i class="aex-icon-order" style='marginRight:6px;marginLeft:-40px'></i>账户信息</div>
                        <aex-menu-item index="4">身份认证</aex-menu-item>
                        <aex-menu-item index="5">收款设置</aex-menu-item>
                        <aex-menu-item index="6">安全中心</aex-menu-item>
                    </aex-menu-item-group>
                </aex-menu>
            </div>
        </aex-col>
    </aex-row>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>
```

:::

### Menu Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal / vertical   | vertical |
| collapse  | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean  |   —   | false |
| background-color  | 菜单的背景色（仅支持 hex 格式） | string |   —   | #ffffff |
| text-color  | 菜单的文字颜色（仅支持 hex 格式） | string |   —   | #303133 |
| active-text-color  | 当前激活菜单的文字颜色（仅支持 hex 格式） | string |   —   | #409EFF |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| menu-trigger  | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | hover / click | hover |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |
| collapse-transition  | 是否开启折叠动画 | boolean   | — | true   |
| center  | 是否居中 | boolean   | — | false   |

### Menu Methods

| 方法名称      | 说明    | 参数      |
|---------- |-------- |---------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close  | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path  |
| open  | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path  |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path  |

### SubMenu Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string/null  | — | null |
| popper-class | 弹出菜单的自定义类名 | string | — | — |
| show-timeout | 展开 sub-menu 的延时 | number | — | 300 |
| hide-timeout | 收起 sub-menu 的延时 | number | — | 300 |
| disabled  | 是否禁用 | boolean | — | false |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean | — | 一级子菜单：true / 非一级子菜单：false |

### Menu-Item Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |
| route     | Vue Router 路径对象 | Object | — | — |
| disabled  | 是否禁用 | boolean | — | false |

### Menu-Group Attribute

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |
