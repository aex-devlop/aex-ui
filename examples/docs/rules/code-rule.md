# 命名规范

```
* 变量命名：      下划线 -----------------> let user_id = ''
* CSS-Class 命名：中划线 ----------------> .aex-button   
* 方法函数命名：   小驼峰 ----------------> getUserInfo()
* 文件夹命名：     中划线 ----------------> views/help-center
* 文件命名：      中划线 -----------------> views/help-center/help-center.vue
* 组件导出命名：   大驼峰 -----------------> ButtonGroup
```

# Css class 命名 采用 BEM的方式 (模块名 + 元素名 + 修饰器名)
* 基本机构： .block__element--modify   
* 状态切换：.is-状态
* 在日常的业务开发中，我们常用页面名字作为命名空间，写法：block = (页面名字+中划线+内部模块结构)

```
trade 页面，我们就把trade 作为 命名空间，
页面大体模块分为：trade-body 和 trade-footer

<div :class='[trade,is-drak:true]'>
    <div class='trade-body'>
        <div class='trade-body__left'></div>
        <div class='trade-body__mid'></div>
        <div class='trade-body__right--base'></div>
        <div class='trade-body__right--large'></div>
    </div>

    <div class='trade-footer'>
        <div class='trade-footer__current'></div>
        <div class='trade-footer__history'></div>
    </div>
</div>

<style lang='less'>
    .trade {
        &.is-drak {}
        &-body {
            &__left {}
            &__mid {}
            &__right {
                &--base {}
                &--large {}
            }
        }

        &-footer {
            &__current{}
            &__history{}
        }
    }
</style>
```

:::tip
BEM 好处在于使结构明晰，团队维护方便，但也有不好的地方是如果用不好，就会使class 名字变得太长；   
所以在实际业务开发中我们一般是用于一个页面的主要结构性模块，不必要太过深入细枝末节
:::
