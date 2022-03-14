# Dom 相关

### 引入

```
import { hasClass, addClass, removeClass, on, off, once } from 'aex-ui/src/utils/dom'
```

### hasClass

#### 查看某元素是否包含指定的 class

```js
/**
 * @param  el 指定的dom元素
 * @param {string} cls class名称 
 * @return {Boolean}
 */
hasClass(el, cls)
```

### addClass

#### 给dom元素添加class

```js
/**
 * @param el 指定的dom元素
 * @param {string} cls class名称 
 */
addClass(el, cls)
```

### removeClass

#### dom元素删除置顶的class

```js
/**
 * @param el 指定的dom元素
 * @param {string} cls class名称 
 */
removeClass(el, cls)
```

### on

#### 设置事件监听

```js
/**
 * @param el 指定的dom元素
 * @param {string} event 事件名称
 * @param {function} handler 执行函数
 */
on(el, event, handler)
```

### off

#### 移除事件监听

```js
/**
 * @param el 指定的dom元素
 * @param {string} event 事件名称
 * @param {function} handler 执行函数
 */
off(el, event, handler)
```

### once

#### 事件监听 只执行一次

```js
/**
 * @param el 指定的dom元素
 * @param {string} event 事件名称
 * @param {function} handler 执行函数
 */
once(el, event, handler)
```
