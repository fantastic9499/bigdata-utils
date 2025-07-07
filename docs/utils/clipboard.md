---
title: clipboard | BigDataUtils
description: 剪贴板工具函数的文档
---

# 剪贴板工具函数

<script setup>
import { copyTextToClipboard } from '../../lib/clipboard.ts';
import { ref } from 'vue';

// 预定义示例数据
const textExample = 'Hello World! 这是一个测试文本。';
const objectExample = {name: 'test', age: 25, description: '这是一个测试对象'};
const urlExample = 'https://www.example.com';
const codeExample = `function hello() {
  console.log('Hello World!');
}`;

// 响应式状态
const copyStatus = ref('');
const copyResult = ref('');

// 复制处理函数
const handleCopy = async (text, description) => {
  copyStatus.value = '正在复制...';
  try {
    const success = await copyTextToClipboard(text);
    if (success) {
      copyStatus.value = `✓ 成功复制${description}`;
      copyResult.value = text;
    } else {
      copyStatus.value = `✗ 复制${description}失败`;
      copyResult.value = '';
    }
  } catch (error) {
    copyStatus.value = `✗ 复制${description}出错: ${error.message}`;
    copyResult.value = '';
  }
  
  // 3秒后清除状态
  setTimeout(() => {
    copyStatus.value = '';
    copyResult.value = '';
  }, 3000);
};
</script>

## 概述

剪贴板工具函数提供了现代化的文本复制功能，支持现代浏览器的 Clipboard API，同时提供兼容性降级方案。

## API 参考

### copyTextToClipboard

复制文本到剪贴板

**类型定义**:

```typescript
(text: string) => Promise<boolean>
```

**入参**:<br>
text: 要复制的文本内容

**返回值**:<br>
Promise&lt;boolean&gt;: 复制成功返回 true，失败返回 false

**功能特点**:

- 优先使用现代浏览器的 Clipboard API
- 自动降级到兼容旧版浏览器的方案
- 异步操作，支持 Promise
- 内置错误处理

## 使用示例

### 基础用法

**示例1-复制简单文本**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的文本：</strong>{{ textExample }}</p>
  <button @click="handleCopy(textExample, '文本')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制文本
  </button>
  <p v-if="copyStatus" style="margin-top: 10px;" :style="{ color: copyStatus.includes('✓') ? 'green' : 'red' }">
    {{ copyStatus }}
  </p>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的文本：</strong>{{ textExample }}</p>
  <button @click="handleCopy(textExample, '文本')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制文本
  </button>
  <p v-if="copyStatus" style="margin-top: 10px;" :style="{ color: copyStatus.includes('✓') ? 'green' : 'red' }">
    {{ copyStatus }}
  </p>
</div>

**示例2-复制对象（转JSON）**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的对象：</strong>{{ JSON.stringify(objectExample, null, 2) }}</p>
  <button @click="handleCopy(JSON.stringify(objectExample, null, 2), '对象')" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制对象
  </button>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的对象：</strong>{{ JSON.stringify(objectExample, null, 2) }}</p>
  <button @click="handleCopy(JSON.stringify(objectExample, null, 2), '对象')" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制对象
  </button>
</div>

**示例3-复制URL**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的URL：</strong>{{ urlExample }}</p>
  <button @click="handleCopy(urlExample, 'URL')" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制URL
  </button>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的URL：</strong>{{ urlExample }}</p>
  <button @click="handleCopy(urlExample, 'URL')" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制URL
  </button>
</div>

**示例4-复制代码**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的代码：</strong></p>
  <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
  <button @click="handleCopy(codeExample, '代码')" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制代码
  </button>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>要复制的代码：</strong></p>
  <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; overflow-x: auto;"><code>{{ codeExample }}</code></pre>
  <button @click="handleCopy(codeExample, '代码')" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
    复制代码
  </button>
</div>

## 高级用法

### 错误处理

```javascript
// 使用 try-catch 处理错误
try {
  const success = await copyTextToClipboard('要复制的文本');
  if (success) {
    console.log('复制成功');
  } else {
    console.log('复制失败');
  }
} catch (error) {
  console.error('复制出错:', error);
}
```

### 在Vue组件中使用

```vue
<template>
  <div>
    <input v-model="textInput" placeholder="输入要复制的文本" />
    <button @click="handleCopy">复制</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { copyTextToClipboard } from '@yf-bigdata/bigdata-utils';

const textInput = ref('');
const message = ref('');

const handleCopy = async () => {
  if (!textInput.value) {
    message.value = '请输入要复制的文本';
    return;
  }
  
  const success = await copyTextToClipboard(textInput.value);
  message.value = success ? '复制成功！' : '复制失败';
  
  // 3秒后清除消息
  setTimeout(() => {
    message.value = '';
  }, 3000);
};
</script>
```

## 实现原理

### 现代浏览器支持

函数优先使用现代浏览器的 `navigator.clipboard.writeText()` API：

```javascript
if (navigator.clipboard && navigator.clipboard.writeText) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // 降级到兼容方案
    return fallbackCopyTextToClipboard(text);
  }
}
```

### 兼容性降级

对于不支持 Clipboard API 的浏览器，使用传统的 `document.execCommand('copy')` 方法：

```javascript
const fallbackCopyTextToClipboard = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    const success = document.execCommand("copy");
    return success;
  } catch (err) {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
};
```

## 浏览器兼容性

| 浏览器 | Clipboard API | 降级方案 |
|--------|---------------|----------|
| Chrome 66+ | ✓ | ✓ |
| Firefox 63+ | ✓ | ✓ |
| Safari 13.1+ | ✓ | ✓ |
| Edge 79+ | ✓ | ✓ |
| IE 11 | ✗ | ✓ |

## 使用说明

### 安全限制

1. **HTTPS要求**: 现代浏览器的 Clipboard API 要求在 HTTPS 环境下使用
2. **用户激活**: 复制操作必须在用户激活的上下文中进行（如点击事件）
3. **权限请求**: 某些浏览器可能会请求剪贴板权限

### 最佳实践

1. **异步处理**: 始终使用 `await` 或 `.then()` 处理异步操作
2. **错误处理**: 添加适当的错误处理逻辑
3. **用户反馈**: 提供清晰的成功/失败反馈
4. **数据验证**: 复制前验证数据格式和内容
5. **性能考虑**: 避免复制大量数据影响性能

### 注意事项

- 复制操作必须在用户交互事件中触发
- 在非HTTPS环境下会自动降级到兼容方案
- 复制的文本长度建议控制在合理范围内
- 某些浏览器可能会在复制时显示权限提示
