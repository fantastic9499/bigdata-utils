---
title: await-to | BigDataUtils
description: 无需try-catch即可轻松处理错误的async/await包装器
---

# Await-To 错误处理工具

<script setup>
import { to } from '../../lib/await-to.ts';
import { ref } from 'vue';

// 预定义示例数据
const result = ref('');
const loading = ref(false);
const errorMessage = ref('');

// 模拟成功的异步操作
const successfulPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Hello World!', timestamp: Date.now() });
    }, 1000);
  });
};

// 模拟失败的异步操作
const failedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('网络请求失败'));
    }, 1000);
  });
};

// 模拟网络请求
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 'valid') {
        resolve({ id: 1, name: '张三', email: 'zhangsan@example.com' });
      } else {
        reject(new Error('用户不存在'));
      }
    }, 1500);
  });
};

// 处理成功案例
const handleSuccess = async () => {
  loading.value = true;
  result.value = '';
  errorMessage.value = '';
  
  const [err, data] = await to(successfulPromise());
  
  loading.value = false;
  
  if (err) {
    errorMessage.value = err.message;
  } else {
    result.value = JSON.stringify(data, null, 2);
  }
};

// 处理失败案例
const handleError = async () => {
  loading.value = true;
  result.value = '';
  errorMessage.value = '';
  
  const [err, data] = await to(failedPromise());
  
  loading.value = false;
  
  if (err) {
    errorMessage.value = err.message;
  } else {
    result.value = JSON.stringify(data, null, 2);
  }
};

// 处理用户数据获取
const handleUserFetch = async (userId) => {
  loading.value = true;
  result.value = '';
  errorMessage.value = '';
  
  const [err, userData] = await to(fetchUserData(userId));
  
  loading.value = false;
  
  if (err) {
    errorMessage.value = err.message;
  } else {
    result.value = JSON.stringify(userData, null, 2);
  }
};

// 带错误扩展信息的处理
const handleWithErrorExt = async () => {
  loading.value = true;
  result.value = '';
  errorMessage.value = '';
  
  const [err, data] = await to(failedPromise(), { 
    context: '用户操作', 
    timestamp: new Date().toISOString(),
    userId: 'user123'
  });
  
  loading.value = false;
  
  if (err) {
    errorMessage.value = JSON.stringify(err, null, 2);
  } else {
    result.value = JSON.stringify(data, null, 2);
  }
};
</script>

## 概述

Await-To 是一个轻量级的错误处理工具，它可以让你无需使用 try-catch 语句就能优雅地处理 Promise 的错误。灵感来自 Go 语言的错误处理方式。

## API 参考

### to(promise, errorExt?)

将 Promise 包装为不会抛出异常的元组形式

**类型定义**:
```typescript
function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]>
```

**入参**:<br>
- promise: 需要处理的 Promise 对象
- errorExt: 可选，附加到错误对象的额外信息

**返回值**<br>
Promise&lt;[Error, undefined] | [null, Data]&gt;: 
- 成功时返回 [null, data]
- 失败时返回 [error, undefined]

**功能特点**:
- 无需 try-catch 语句
- 统一的错误处理方式
- 支持 TypeScript 类型推断
- 可扩展错误信息

## 使用示例

### 基础用法

**示例1-处理成功的异步操作**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>成功案例演示：</strong></p>
  <button @click="handleSuccess" :disabled="loading" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行成功操作' }}
  </button>
  <div v-if="result" style="margin-top: 10px; background: #d4edda; padding: 10px; border-radius: 4px;">
    <strong>成功结果：</strong>
    <pre>{{ result }}</pre>
  </div>
  <div v-if="errorMessage" style="margin-top: 10px; background: #f8d7da; padding: 10px; border-radius: 4px;">
    <strong>错误信息：</strong>{{ errorMessage }}
  </div>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>成功案例演示：</strong></p>
  <button @click="handleSuccess" :disabled="loading" style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行成功操作' }}
  </button>
  <div v-if="result" style="margin-top: 10px; background: #d4edda; padding: 10px; border-radius: 4px;">
    <strong>成功结果：</strong>
    <pre>{{ result }}</pre>
  </div>
  <div v-if="errorMessage" style="margin-top: 10px; background: #f8d7da; padding: 10px; border-radius: 4px;">
    <strong>错误信息：</strong>{{ errorMessage }}
  </div>
</div>

**示例2-处理失败的异步操作**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>错误案例演示：</strong></p>
  <button @click="handleError" :disabled="loading" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行失败操作' }}
  </button>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>错误案例演示：</strong></p>
  <button @click="handleError" :disabled="loading" style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行失败操作' }}
  </button>
</div>

### 实际场景应用

**示例3-用户数据获取**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>用户数据获取：</strong></p>
  <div style="margin-bottom: 10px;">
    <button @click="handleUserFetch('valid')" :disabled="loading" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
      {{ loading ? '加载中...' : '获取有效用户' }}
    </button>
    <button @click="handleUserFetch('invalid')" :disabled="loading" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
      {{ loading ? '加载中...' : '获取无效用户' }}
    </button>
  </div>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>用户数据获取：</strong></p>
  <div style="margin-bottom: 10px;">
    <button @click="handleUserFetch('valid')" :disabled="loading" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
      {{ loading ? '加载中...' : '获取有效用户' }}
    </button>
    <button @click="handleUserFetch('invalid')" :disabled="loading" style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
      {{ loading ? '加载中...' : '获取无效用户' }}
    </button>
  </div>
</div>

**示例4-带错误扩展信息**:<br>

```vue
<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>错误扩展信息演示：</strong></p>
  <button @click="handleWithErrorExt" :disabled="loading" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行带扩展信息的操作' }}
  </button>
</div>
```

**输出结果**:<br>

<div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
  <p><strong>错误扩展信息演示：</strong></p>
  <button @click="handleWithErrorExt" :disabled="loading" style="padding: 8px 16px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">
    {{ loading ? '加载中...' : '执行带扩展信息的操作' }}
  </button>
</div>

## 代码对比

### 传统方式 vs await-to

**传统的 try-catch 方式**:
```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log('数据:', data);
  } catch (error) {
    console.error('错误:', error);
  }
}
```

**使用 await-to 的方式**:
```javascript
import { to } from 'bigdata-utils';

async function fetchData() {
  const [err, data] = await to(fetch('/api/data'));
  
  if (err) {
    console.error('错误:', err);
    return;
  }
  
  console.log('数据:', data);
}
```

## 高级用法

### 错误信息扩展

```javascript
const [err, data] = await to(
  fetchUserData(userId),
  { 
    context: '用户资料页面',
    action: '获取用户信息',
    timestamp: new Date().toISOString(),
    userId: userId
  }
);

if (err) {
  console.error('详细错误信息:', err);
  // err 对象现在包含原始错误信息以及扩展信息
}
```

### 与 TypeScript 结合使用

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiError {
  message: string;
  code: number;
  details?: string;
}

const [err, user] = await to<User, ApiError>(fetchUser(id));

if (err) {
  // err 的类型是 ApiError
  console.error(`错误码: ${err.code}, 信息: ${err.message}`);
} else {
  // user 的类型是 User
  console.log(`用户名: ${user.name}`);
}
```

## 使用场景

### 1. API 请求处理

```javascript
const [err, response] = await to(
  fetch('/api/users').then(res => res.json())
);

if (err) {
  showErrorMessage('获取用户列表失败');
  return;
}

setUserList(response.data);
```

### 2. 文件操作

```javascript
const [err, content] = await to(fs.readFile('config.json', 'utf8'));

if (err) {
  console.log('使用默认配置');
  return defaultConfig;
}

return JSON.parse(content);
```

### 3. 数据库操作

```javascript
const [err, user] = await to(User.findById(id));

if (err) {
  throw new Error('数据库查询失败');
}

if (!user) {
  throw new Error('用户不存在');
}

return user;
```

## 优势

1. **简洁性**: 无需编写 try-catch 代码块
2. **一致性**: 所有异步操作使用相同的错误处理模式
3. **可读性**: 代码更加直观，错误处理逻辑清晰
4. **类型安全**: 完全支持 TypeScript 类型推断
5. **灵活性**: 可以轻松添加额外的错误信息

## 注意事项

- 返回的是元组格式 `[error, data]`，需要解构赋值
- 错误时 data 为 undefined，成功时 error 为 null
- 适合处理单个 Promise，多个并发请求建议使用 `Promise.allSettled()`
- 错误扩展信息会与原始错误对象合并，注意避免属性名冲突
