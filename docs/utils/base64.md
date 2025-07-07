---
title: base64 | BigDataUtils
description: base64编解码相关工具函数的文档
---

# Base64编解码工具函数

<script setup>
import { base64Encode, base64Decode } from '../../lib/base64.ts';

// 预定义示例数据
const stringExample = 'Hello World';
const objectExample = {name: 'test', age: 25};
const encodedString = base64Encode(stringExample);
const encodedObject = base64Encode(objectExample);
const chineseString = '你好世界';
const encodedChinese = base64Encode(chineseString);
</script>

## base64Encode(input: string | object): string

将字符串或对象进行base64编码

**入参**:<br>
input: 待编码的字符串或对象

**返回值**<br>
string: 编码后的字符串

**示例1-编码字符串**:<br>

```vue
<span style="font-weight: bold">原始字符串：{{ stringExample }}</span>
<span style="font-weight: bold">编码后：{{ base64Encode(stringExample) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">原始字符串：{{ stringExample }}</span><br>
<span style="font-weight: bold">编码后：{{ base64Encode(stringExample) }}</span>

**示例2-编码对象**:<br>

```vue
<span style="font-weight: bold">原始对象：{{ JSON.stringify(objectExample) }}</span>
<span style="font-weight: bold">编码后：{{ base64Encode(objectExample) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">原始对象：{{ JSON.stringify(objectExample) }}</span><br>
<span style="font-weight: bold">编码后：{{ base64Encode(objectExample) }}</span>

**示例3-编码中文字符串**:<br>

```vue
<span style="font-weight: bold">中文字符串：{{ chineseString }}</span>
<span style="font-weight: bold">编码后：{{ base64Encode(chineseString) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">中文字符串：{{ chineseString }}</span><br>
<span style="font-weight: bold">编码后：{{ base64Encode(chineseString) }}</span>

## base64Decode(input: string): string | object

将base64编码的字符串进行解码

**入参**:<br>
input: 待解码的base64编码字符串

**返回值**<br>
string | object: 解码后的字符串或对象

**示例1-解码字符串**:<br>

```vue
<span style="font-weight: bold">编码字符串：{{ encodedString }}</span>
<span style="font-weight: bold">解码后：{{ base64Decode(encodedString) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">编码字符串：{{ encodedString }}</span><br>
<span style="font-weight: bold">解码后：{{ base64Decode(encodedString) }}</span>

**示例2-解码对象**:<br>

```vue
<span style="font-weight: bold">编码对象：{{ encodedObject }}</span>
<span style="font-weight: bold">解码后：{{ JSON.stringify(base64Decode(encodedObject)) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">编码对象：{{ encodedObject }}</span><br>
<span style="font-weight: bold">解码后：{{ JSON.stringify(base64Decode(encodedObject)) }}</span>

**示例3-解码中文字符串**:<br>

```vue
<span style="font-weight: bold">编码中文：{{ encodedChinese }}</span>
<span style="font-weight: bold">解码后：{{ base64Decode(encodedChinese) }}</span>
```

**输出结果**:<br>

<span style="font-weight: bold">编码中文：{{ encodedChinese }}</span><br>
<span style="font-weight: bold">解码后：{{ base64Decode(encodedChinese) }}</span>

## 完整示例：编码解码循环

**示例-完整的编码解码流程**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
  <p><strong>原始数据：</strong>{{ JSON.stringify(objectExample) }}</p>
  <p><strong>编码步骤：</strong>{{ base64Encode(objectExample) }}</p>
  <p><strong>解码步骤：</strong>{{ JSON.stringify(base64Decode(base64Encode(objectExample))) }}</p>
  <p><strong>数据完整性：</strong>{{ JSON.stringify(objectExample) === JSON.stringify(base64Decode(base64Encode(objectExample))) ? '✓ 通过' : '✗ 失败' }}</p>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
  <p><strong>原始数据：</strong>{{ JSON.stringify(objectExample) }}</p>
  <p><strong>编码步骤：</strong>{{ base64Encode(objectExample) }}</p>
  <p><strong>解码步骤：</strong>{{ JSON.stringify(base64Decode(base64Encode(objectExample))) }}</p>
  <p><strong>数据完整性：</strong>{{ JSON.stringify(objectExample) === JSON.stringify(base64Decode(base64Encode(objectExample))) ? '✓ 通过' : '✗ 失败' }}</p>
</div>

## 使用说明

### 支持的数据类型

- **字符串**: 普通字符串、中文字符串、特殊字符
- **对象**: 纯对象（Plain Object），会自动转换为JSON字符串进行编码

### 错误处理

- **编码时**: 如果传入的参数既不是字符串也不是纯对象，会抛出错误
- **解码时**: 如果传入的参数不是字符串，会抛出错误
- **空值处理**: 如果解码时传入空字符串，会直接返回空字符串

### 注意事项

1. 编码后的字符串经过了URL编码处理，可以安全地在URL中传输
2. 解码时会尝试解析为JSON对象，如果解析失败则返回原字符串
3. 支持中文和特殊字符的编码解码
4. 对象编码时会转换为JSON字符串，解码时会尝试还原为对象
