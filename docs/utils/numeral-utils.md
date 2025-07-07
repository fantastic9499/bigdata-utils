---
title: NumeralUtils | BigDataUtils
description: 数字格式化相关函数的文档
---

# 数字格式化工具函数

## getPrice(value: number): string

将数字格式化为带分隔符的金额

**入参**:<br>
value: number

**返回值**<br>
string

<script setup>
import { getPrice, getPercentage, format, round, ceil} from '../../lib/numeral-utils.ts'
</script>

**示例**:<br>

```vue
<span style="font-weight: bold">金额：{{ getPrice(9874323.4251) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">金额：{{ getPrice(9874323.4251) }}</span>


## getPercentage(value: number, forceFraction: boolean): string

将数字格式化为百分比

**入参1**:<br>
value: 待格式化数字

**入参2**:<br>
forceFraction: 是否强制格式化为带2位小数

**返回值**<br>
string

**示例1-不强制格式化为带2位小数**:<br>

```vue
<span style="font-weight: bold">百分比：{{ getPercentage(1.00) }}</span>
```

**输出结果**<br>

<span style="font-weight: bold">百分比：{{ getPercentage(1.00) }}</span>

**示例2-强制格式化为带2位小数**:<br>

```vue
<span style="font-weight: bold">百分比：{{ getPercentage(1.00, true) }}</span>
```

**输出结果**<br>

<span style="font-weight: bold">百分比：{{ getPercentage(1.00, true) }}</span>


## format(value: number, fmt: string): string

将数字格式化为指定格式

**入参1**:<br>
value: 待格式化数字

**入参2**:<br>
fmt: numeral库支持的格式化字符串

**返回值**<br>
string

**示例**:<br>

```vue
<span style="font-weight: bold">带2为小数：{{ format(1.00, '0,0.00') }}</span>
```

**输出结果**<br>

<span style="font-weight: bold">百分比：{{ format(1.00, '0,0.00') }}</span>


## roud(value: number, fmt: boolean): string

四舍五入取整，并使用numeral格式化数字(默认格式化数字)

**入参1**:<br>
value: 待格式化数字

**入参2**:<br>
fmt: 是否使用numeral格式化数字，默认值：true

**返回值**<br>
string

**示例**:<br>

```vue
<span style="font-weight: bold">四舍五入取整：{{ round(98765.4, true) }}</span>
```

**输出结果**<br>

<span style="font-weight: bold">四舍五入取整：{{ round(98765.4, true) }}</span>

## ceil(value: number, fmt: boolean): string

向上取整，并格式化数字，默认格式化数字

**入参1**:<br>
value: 待格式化数字

**入参2**:<br>
fmt: 是否使用numeral格式化数字，默认值：true

**返回值**<br>
string

**示例**:<br>

```vue
<span style="font-weight: bold">向上取整：{{ ceil(98765.4, true) }}</span>
```

**输出结果**<br>

<span style="font-weight: bold">向上取整：{{ ceil(98765.4, true) }}</span>
