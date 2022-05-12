相关文档：

https://mikemcl.github.io/decimal.js/

# 为什么要使用 decimal.js ？

## 1，浮点/整 数精度计算会有溢出的可能

## 2，让公式计算的代码具有可读性（加减乘除 、大小等于 的操作）

## 3，能自定义处理各式小数精度（小数精确至多少位、是否四舍五入、是否保留小数点后的 0 值）

这里相对与原生 Math 或 Number 的处理方法，decimaljs 的使用比原生轻松很多。（比如：Number.prototype.toFixed() 的小数在四舍五入上总会让人摸不着头脑）

```
2.35.toFixed(1)           // 返回 '2.4'. Note it rounds up

2.55.toFixed(1)           // 返回 '2.5'. Note it rounds down （卧槽？）
```

# 调用方式（使用静态方法 或 实例方法）

区别：

按照文档的说法，构造方法是调用原型链上的方法，且构造方法的命名比实例方法要简短。以下是相加功能的两种写法。可以按自己的喜好选择。

PS：但是我觉得应该要统一用法或规范使用。（构造方法 or 实例方法 二选一）以免后续维护不同同事的代码还要回过头去找api文档的具体意思。

```js
// 比如：x, y 相加
Decimal.add(x, y).add(z) // = x+y+z 当然这里可以使用链式调用
```


```js
// x, y 相加
const x = new Decimal(x);
x.plus(y)
.plus(z) //  = x+y+z 当然这里可以使用链式调用
```

# 坑：

常见精确小数点的问题（示例代码一律用实例方法实现）

1，小数精确到 n 位，是否控制四舍五入？

2，小数精确到 n 位，但 0 位是否应该省略掉？（1 的增强版。即：有效数字 Precision）

3，小数去尾，但是否需要做四舍五入？

4，如果是负数，又该怎么做四舍五入？

在讲解答案前需要了解 rounding（舍去） 这个单词，以及相应配置所对应的意思。

这里只介绍常用的：
ROUND_UP => 除了 0 的数进一位 即：123456789 进一位
```js
const defaultNum = 123.45;
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_UP) // 123.5
```
ROUND_DOWN => 不进位
```js
const defaultNum = 123.45
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_DOWN) // 123.5
```

ROUND_CEIL => 向正无穷靠近 即：正数进一位
```js
const defaultNum = 123.44
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_CEIL) // 正数：123.5 负数：-123.4
```

ROUND_FLOOR => 相反 即：负数进一位
```js
const defaultNum = -123.44
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_FLOOR) // 正数：123.4 负数：-123.5
```

ROUND_HALF_UP => 四舍五入
```js
const defaultNum = 123.45
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_HALF_UP) // 123.5
```

ROUND_HALF_DOWN => 五舍六入 即：6789 进一位
```js
const defaultNum = 123.45
const n = new Decimal(defaultNum);
n.toFixed(1, Decimal.ROUND_HALF_UP) // 123.4
```

# 答案：

1，小数精确到后 n 位:

toFixed() // 不够将用 0 补

```js
const defaultNum = 123.45
const n = new Decimal(defaultNum);
n.toFixed(5) // 123.45000
```

2，接上，如果小数有多余的 0 该怎么去掉
```js
new Decimal('123.45000'); // 123.45
```

3，小数去尾，是否做四舍五入
注意：正数和负数的四舍五入是不同的
默认的是使用 ROUND_HALF_CEIL 。
```js
const defaultNum = 123.5
const n = new Decimal(defaultNum);
n.round(); // 124

// 如果是负数，则应该这么使用
const D = Decimal.set({ rounding: Decimal.ROUND_HALF_FLOOR });
console.log(new D(-123.4).round()); // -123
console.log(new D(-123.5).round()); // -124

// 直接去尾，不做四舍五入
const defaultNum = 123.5
const n = new Decimal(defaultNum);
// truncated => 分块
n.truncated(); // 123
```