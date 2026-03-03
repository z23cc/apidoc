---
title: 安装配置
description: 如何安装和配置 Claude Code
---

## 系统要求

- **操作系统**: macOS 10.15+、Ubuntu 20.04+ / Debian 10+、Windows (通过 WSL2)
- **Node.js**: 18.0 或更高版本
- **内存**: 建议 4GB 以上

## 安装方法

### 使用 npm（推荐）

```bash
npm install -g @anthropic-ai/claude-code
```

### 验证安装

```bash
claude --version
```

## 首次使用

### 1. 启动 Claude Code

在你的项目目录中运行：

```bash
claude
```

### 2. 完成认证

首次运行时，Claude Code 会引导你完成 Anthropic API 认证。你需要：
- 一个 Anthropic 账号
- 有效的 API 密钥或 OAuth 登录

### 3. 开始对话

认证完成后，你就可以直接在终端中与 Claude 对话了：

```
> 帮我分析这个项目的结构

Claude: 我来查看一下项目结构...
```

## 配置文件

### CLAUDE.md

在项目根目录创建 `CLAUDE.md` 文件，可以为 Claude 提供项目级别的指令：

```markdown
# 项目说明

- 这是一个 React + TypeScript 项目
- 使用 pnpm 作为包管理器
- 测试命令: pnpm test
- 构建命令: pnpm build
```

### 配置层级

Claude Code 支持多层级配置：

| 层级 | 路径 | 用途 |
|------|------|------|
| 全局 | `~/.claude/CLAUDE.md` | 个人全局偏好 |
| 项目 | `项目根目录/CLAUDE.md` | 项目级指令（可提交到 Git） |
| 本地 | `项目根目录/.claude/CLAUDE.md` | 本地私有指令 |

## 常用设置

### 设置默认模型

```bash
claude config set model claude-sonnet-4-6
```

### 设置主题

```bash
claude config set theme dark
```

## 下一步

安装完成后，前往 [基本用法](/zh-cn/tutorials/basic-usage/) 了解如何高效使用 Claude Code。
