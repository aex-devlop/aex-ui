# Number 相关

### 引入

```
import { exponentToNumber, clearzero, zeroize, thousands } from 'aex-ui/src/utils/number'
```

### exponentToNumber

```js
/**
 * @description 把有可能是科学技术法的数字转换为 数字字符串
 * @param {string | Number} number
 * @returns {string}
 * @example 9.2e-7 --> 0.00000092
 */
exponentToNumber(number)
```

### clearzero

```js
/**
 * @description 去掉小数位多余的0
 * @param {string} number 要处理的数字字符串
 * @return {string}
 */
clearzero(number)
```

### zeroize

```js
/**
 * @description 小数位处理 少则补0多则截取, 包含了科学计数的处理
 * @param {string} number 要处理的数字字符串
 * @param {string} digits 要保留的位数
 * @param {boolean} isFill 是否要自动补0 默认true
 * @return {string}
 */
zeroize(number, digits, isFill = true)
```

### thousands

```js
/**
 * @description 把数字转换为千分位分割
 * @param {string | Number } num 要转换的数字或数字字符串
 * @param {string } [lang] 要根据语言区分 分隔符, 例如 vi-VN 转换后  1.222.33,05，默认null 直接从Cookie 里获取 AEX_language
 * @returns {string}
 * @example 1234567.89 --> 1,234,567.89
 */
thousands(number, lang)
```
