# 快速上手

## 安装依赖

```
yarn add aex-ui

```

## 更新依赖

```
yarn upgrade aex-ui
```

## 本地安装

将代码clone 到本地, 然后修改package.json，然后 yarn 安装即可:

```
git clone https://github.com/aex-devlop/aex-ui.git

  "dependencies": {
    "aex-ui": "file:./aex-ui", 添加此行，file: 换成你本地的路径
    ...
  },
```

## 引入 Aex UI

### 完整引入

在 main.js 中写入以下内容

```
import Vue from 'vue';
import AexUI from 'aex-ui';
import 'aex-ui/lib/theme/index.css';
import App from './App.vue';

Vue.use(AexUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入(推荐)

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的   
1. 安装 babel-plugin-component

```
yarn add babel-plugin-component -D
```

2. 将 .babelrc 修改为：

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "aex-ui",
        "styleLibraryName": "theme"
      }
    ]
  ]
}
```

3. 在 main.js 中引入所需组件

```
import Vue from 'vue';
import { Button } from 'aex-ui';
import App from './App.vue';

Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 使用

引入之后就可以在.vue 文件中使用:

```
<template>
    <div id="app">
        <aex-button></aex-button>
    </div>
</template>
```
