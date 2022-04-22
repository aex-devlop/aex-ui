# Aex-UI

## 安装依赖

```

yarn install
```

> 关于windows系统用户可能会出现的问题：由于gulp-less@5.0.0的版本需要python进行编译，可能在yarn install的时候提示没有python执行环境。在此你需要用"管理员权限"打开powershell，然后执行npm install windows-build-tools -g，会自动安装所需要的编译工具。安装完成后会自动重启电脑。然后就可以正常执行yarn install了。

***

## 新建组件

```

yarn new:comp [组件名称]
例如：yarn new:comp button
```

> 自动生成组件模版包含以下文件：

* packages/组件模版
* packages/theme/src/组件样式模版
* examples/docs/组件文档模版
* 把组件样式模版导入 packages/theme/src/index.less
* 把组件路径导入/components.json

***

## 开发 （localhost:8085）

### 组件开发模式

```
yarn dev:play
```

* 入口文件：/examples/play/index.js （已全局引入组件）
* 调试目录：/examples/play/App.vue

### 文档开发模式

```
yarn dev
```

* 入口文件：/examples/main.js （已全局引入组件）
* 路由文件：/examples/route.config.js
* 文档目录：/examples/docs/

***

## 打包

### 打包组件库

```
yarn build:lib

输出目录: /lib
```

### 打包文档网页

```
yarn build:doc

输出目录: /examples/aex-ui/
```

<!-- "deploy": "chmod +x ./deploy.sh && ./deploy.sh", -->
<!-- copy-to-clipboard -->
<!-- https://github.com/sudodoki/copy-to-clipboard#readme -->
  <!-- // "pagination": "./packages/pagination/index.js" -->
