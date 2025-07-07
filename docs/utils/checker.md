---
title: checker | BigDataUtils
description: 类型检查相关工具函数的文档
---

# 类型检查工具函数

## notEmptyString(str?: any): boolean

检查字符串是否非空

**入参**:<br>
str: 待检查的值

**返回值**<br>
boolean

<script setup>
import { notEmptyString, notBlankString, notEmptyArray, isArray, isSymbol, isFunction, isObject, isPlainObject, isString, isBoolean, isFloat, isNumber, isBigNumber, isNumberOrBigInt, isUndef, isPromise, isDate, isPrimitive } from '../../lib/checker.ts';

// 预定义示例数据
const promiseExample = Promise.resolve('test');
const symbolExample = Symbol('test');
const objectExample = {name: 'test'};
const dateExample = new Date();
const bigIntExample = BigInt(123);
</script>

**示例**:<br>

```vue
<span style="font-weight: bold">非空字符串检查：{{ notEmptyString('hello') }}</span>
<span style="font-weight: bold">空字符串检查：{{ notEmptyString('') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">非空字符串检查：{{ notEmptyString('hello') }}</span><br>
<span style="font-weight: bold">空字符串检查：{{ notEmptyString('') }}</span>

## notBlankString(str?: any): boolean

检查字符串是否非空且不只包含空白字符

**入参**:<br>
str: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">非空白字符串检查：{{ notBlankString('hello') }}</span>
<span style="font-weight: bold">空白字符串检查：{{ notBlankString('   ') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">非空白字符串检查：{{ notBlankString('hello') }}</span><br>
<span style="font-weight: bold">空白字符串检查：{{ notBlankString('   ') }}</span>

## notEmptyArray(arr?: any): boolean

检查数组是否非空

**入参**:<br>
arr: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">非空数组检查：{{ notEmptyArray([1, 2, 3]) }}</span>
<span style="font-weight: bold">空数组检查：{{ notEmptyArray([]) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">非空数组检查：{{ notEmptyArray([1, 2, 3]) }}</span><br>
<span style="font-weight: bold">空数组检查：{{ notEmptyArray([]) }}</span>

## isArray(value: any): boolean

检查值是否为数组

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">数组检查：{{ isArray([1, 2, 3]) }}</span>
<span style="font-weight: bold">非数组检查：{{ isArray('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">数组检查：{{ isArray([1, 2, 3]) }}</span><br>
<span style="font-weight: bold">非数组检查：{{ isArray('hello') }}</span>

## isSymbol(value: any): boolean

检查值是否为Symbol类型

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">Symbol检查：{{ isSymbol(symbolExample) }}</span>
<span style="font-weight: bold">非Symbol检查：{{ isSymbol('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">Symbol检查：{{ isSymbol(symbolExample) }}</span><br>
<span style="font-weight: bold">非Symbol检查：{{ isSymbol('hello') }}</span>

## isFunction(value: any): boolean

检查值是否为函数

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">函数检查：{{ isFunction(() => {}) }}</span>
<span style="font-weight: bold">非函数检查：{{ isFunction('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">函数检查：{{ isFunction(() => {}) }}</span><br>
<span style="font-weight: bold">非函数检查：{{ isFunction('hello') }}</span>

## isObject(value: any): boolean

检查值是否为对象

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">对象检查：{{ isObject(objectExample) }}</span>
<span style="font-weight: bold">非对象检查：{{ isObject('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">对象检查：{{ isObject(objectExample) }}</span><br>
<span style="font-weight: bold">非对象检查：{{ isObject('hello') }}</span>

## isPlainObject(value: any): boolean

检查值是否为纯对象

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">纯对象检查：{{ isPlainObject(objectExample) }}</span>
<span style="font-weight: bold">非纯对象检查：{{ isPlainObject(dateExample) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">纯对象检查：{{ isPlainObject(objectExample) }}</span><br>
<span style="font-weight: bold">非纯对象检查：{{ isPlainObject(dateExample) }}</span>

## isString(value: any): boolean

检查值是否为字符串

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">字符串检查：{{ isString('hello') }}</span>
<span style="font-weight: bold">非字符串检查：{{ isString(123) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">字符串检查：{{ isString('hello') }}</span><br>
<span style="font-weight: bold">非字符串检查：{{ isString(123) }}</span>

## isBoolean(value: any): boolean

检查值是否为布尔值

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">布尔值检查：{{ isBoolean(true) }}</span>
<span style="font-weight: bold">非布尔值检查：{{ isBoolean('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">布尔值检查：{{ isBoolean(true) }}</span><br>
<span style="font-weight: bold">非布尔值检查：{{ isBoolean('hello') }}</span>

## isFloat(value: any): boolean

检查值是否为浮点数

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">浮点数检查：{{ isFloat(3.14) }}</span>
<span style="font-weight: bold">整数检查：{{ isFloat(123) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">浮点数检查：{{ isFloat(3.14) }}</span><br>
<span style="font-weight: bold">整数检查：{{ isFloat(123) }}</span>

## isNumber(value: any): boolean

检查值是否为数字

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">数字检查：{{ isNumber(123) }}</span>
<span style="font-weight: bold">非数字检查：{{ isNumber('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">数字检查：{{ isNumber(123) }}</span><br>
<span style="font-weight: bold">非数字检查：{{ isNumber('hello') }}</span>

## isBigNumber(value: any): boolean

检查值是否为BigInt类型

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">BigInt检查：{{ isBigNumber(bigIntExample) }}</span>
<span style="font-weight: bold">非BigInt检查：{{ isBigNumber(123) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">BigInt检查：{{ isBigNumber(bigIntExample) }}</span><br>
<span style="font-weight: bold">非BigInt检查：{{ isBigNumber(123) }}</span>

## isNumberOrBigInt(value: any): boolean

检查值是否为数字或BigInt类型

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">数字或BigInt检查：{{ isNumberOrBigInt(123) }}</span>
<span style="font-weight: bold">BigInt检查：{{ isNumberOrBigInt(bigIntExample) }}</span>
<span style="font-weight: bold">非数字类型检查：{{ isNumberOrBigInt('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">数字或BigInt检查：{{ isNumberOrBigInt(123) }}</span><br>
<span style="font-weight: bold">BigInt检查：{{ isNumberOrBigInt(bigIntExample) }}</span><br>
<span style="font-weight: bold">非数字类型检查：{{ isNumberOrBigInt('hello') }}</span>

## isUndef(value: any): boolean

检查值是否为undefined

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">undefined检查：{{ isUndef(undefined) }}</span>
<span style="font-weight: bold">非undefined检查：{{ isUndef('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">undefined检查：{{ isUndef(undefined) }}</span><br>
<span style="font-weight: bold">非undefined检查：{{ isUndef('hello') }}</span>

## isPromise(value: any): boolean

检查值是否为Promise对象

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">Promise检查：{{ isPromise(promiseExample) }}</span>
<span style="font-weight: bold">非Promise检查：{{ isPromise('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">Promise检查：{{ isPromise(promiseExample) }}</span><br>
<span style="font-weight: bold">非Promise检查：{{ isPromise('hello') }}</span>

## isDate(value: any): boolean

检查值是否为Date对象

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">Date检查：{{ isDate(dateExample) }}</span>
<span style="font-weight: bold">非Date检查：{{ isDate('hello') }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">Date检查：{{ isDate(dateExample) }}</span><br>
<span style="font-weight: bold">非Date检查：{{ isDate('hello') }}</span>

## isPrimitive(value: any): boolean

检查值是否为原始类型（number、string、boolean、symbol、bigint、undefined、null）

**入参**:<br>
value: 待检查的值

**返回值**<br>
boolean

**示例**:<br>

```vue
<span style="font-weight: bold">原始类型检查：{{ isPrimitive('hello') }}</span>
<span style="font-weight: bold">非原始类型检查：{{ isPrimitive(objectExample) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">原始类型检查：{{ isPrimitive('hello') }}</span><br>
<span style="font-weight: bold">非原始类型检查：{{ isPrimitive(objectExample) }}</span>
