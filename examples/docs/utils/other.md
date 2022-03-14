# 其他

### 引入

```
import { importCDN } from 'aex-ui/src/utils/cdn'
import { getUrlParam } from 'aex-ui/src/utils/url'
import { randomString } from 'aex-ui/src/utils/util'
```

### importCDN

:::tip
此方法会在 head 中插入一个 script 标签
:::

```js
/**
 * @description 获取cdn 链接
 * @param {string} CDNUrl cdn 链接
 * @param {string?} name 文件声明的全局变量名,如果没有 name,那就直接添加script 标签完事
 * @return {promise} 
 */
importCDN(CDNUrl, name)

示例：

// cnd 文件 https://aexphoto-1251755124.file.myqcloud.com/js/config/layout.js
var CND_HEADER_CONF = [1, 2, 3]

// 引入
importCDN('https://aexphoto-1251755124.file.myqcloud.com/js/config/layout.js', 'CND_HEADER_CONF').then(res => {
    console.log(res) // ---> [1, 2, 3]
})
```

### getUrlParam

```js
/**
 * @description 获取url里的参数
 * @param {string} key 参数名字
 * @return {string}
 * @example http://aex.uidoc.com?aex-lang=zh-CN --> zh-CN
 */
getUrlParam(key)
```

### randomString

```js
/**
 * @description 生成随机字符串
 * @param {string} length 生成的字符串长度
 * @param {string} chars 字符串范围, 默认：0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
 * @return {string} 
 */
randomString(length, chars)
```
