---
title: 基本用法
description: Claude Code 的基本使用方法
---

## 交互模式

启动 Claude Code 后进入交互模式，你可以直接输入请求：

```bash
claude
```

### 常见操作示例

#### 代码解释
```
> 解释一下 src/utils/auth.ts 中的认证逻辑
```

#### 编写代码
```
> 帮我写一个用户登录的 API 端点，使用 Express.js
```

#### 修复 Bug
```
> 修复 src/components/Form.tsx 中表单提交后不清空的问题
```

#### 重构代码
```
> 将 src/api/handlers.js 重构为 TypeScript，并添加类型定义
```

## 非交互模式

你也可以在命令行中直接传入请求：

```bash
# 单次请求
claude -p "解释这个项目的目录结构"

# 从管道读取
cat error.log | claude -p "分析这个错误日志"

# 输出到文件
claude -p "生成 API 文档" > api-docs.md
```

## 常用斜杠命令

在交互模式中，你可以使用斜杠命令：

| 命令 | 说明 |
|------|------|
| `/help` | 显示帮助信息 |
| `/clear` | 清除对话历史 |
| `/compact` | 压缩对话上下文 |
| `/cost` | 显示当前会话费用 |
| `/model` | 切换模型 |
| `/fast` | 切换快速模式 |

## 文件操作

Claude Code 可以直接操作你的文件：

### 读取文件
```
> 读取 package.json 的内容
```

### 编辑文件
```
> 在 src/config.ts 中添加数据库连接配置
```

### 创建文件
```
> 创建一个新的 React 组件 UserProfile
```

### 搜索代码
```
> 搜索所有使用了 deprecated API 的文件
```

## 最佳实践

1. **提供清晰的上下文** — 越具体的请求，结果越好
2. **利用 CLAUDE.md** — 在项目中配置常用指令
3. **逐步推进** — 对于复杂任务，分步骤完成
4. **Review 变更** — 始终检查 Claude 生成的代码
5. **使用 /compact** — 长对话时定期压缩上下文

## 下一步

了解更多 [常用命令](/zh-cn/tutorials/commands/) 来提高你的开发效率。
