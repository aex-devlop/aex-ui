# OS 平台相关

### 引入

```
import { isPC, isMobile, isAndroid, isPhone, isWindowsPhone, isSymbian, isTablet, isIE, isEdge, isFirefox, isChrome,getDeviceInfo } from 'aex-ui/src/utils/os'
```

:::tip
is开头的用于判断当前平台的类型的标示，返回一个布尔值
:::

```js
/**
 * @description 获取平台的信息
 * @param {string | Number} number
 * @returns {object} {deviceType,OS,OSVersion,Browser,BrowserVersion,netWork,orientation}
 */
getDeviceInfo()
```
