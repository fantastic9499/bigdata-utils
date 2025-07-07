# 剪贴板工具函数

## 概述

剪贴板工具函数提供了现代化的文本复制功能，支持现代浏览器的 Clipboard API，同时提供兼容性降级方案。

## API 参考

### copyTextToClipboard

复制文本到剪贴板

**类型**: `(text: string) => Promise<boolean>`

**参数**:
- `text` (string): 要复制的文本内容

**返回值**: `Promise<boolean>` - 复制成功返回 true，失败返回 false

## 使用示例

### 基础用法
