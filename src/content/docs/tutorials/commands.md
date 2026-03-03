---
title: 常用命令
description: Claude Code CLI 的常用命令参考
---

## 启动命令

### 基本启动
```bash
claude                    # 交互模式
claude -p "你的请求"       # 非交互模式（单次请求）
claude -c                 # 继续上次会话
claude -r                 # 恢复最近会话
```

### 启动参数

| 参数 | 说明 | 示例 |
|------|------|------|
| `-p, --prompt` | 非交互模式，执行后退出 | `claude -p "分析代码"` |
| `-c, --continue` | 继续上次对话 | `claude -c` |
| `-r, --resume` | 恢复特定会话 | `claude -r` |
| `--model` | 指定模型 | `claude --model claude-sonnet-4-6` |
| `--output-format` | 输出格式 | `claude -p "..." --output-format json` |

## 配置命令

```bash
# 查看配置
claude config list

# 设置配置
claude config set <key> <value>

# 常用配置项
claude config set model claude-sonnet-4-6
claude config set theme dark
```

## MCP 服务器管理

```bash
# 添加 MCP 服务器
claude mcp add <name> <command> [args...]

# 列出 MCP 服务器
claude mcp list

# 删除 MCP 服务器
claude mcp remove <name>

# 示例：添加文件系统 MCP
claude mcp add filesystem npx @anthropic-ai/mcp-server-filesystem /path/to/dir
```

## 技能管理

```bash
# 安装技能
claude skill install <source/skill-name>

# 列出已安装技能
claude skill list

# 删除技能
claude skill remove <skill-name>
```

## 实用命令

### 代码审查
```bash
# 审查 Git 变更
claude -p "审查最近的 Git 提交并提供反馈"

# 审查特定文件
claude -p "审查 src/api/users.ts 的代码质量"
```

### 测试生成
```bash
claude -p "为 src/utils/validators.ts 生成单元测试"
```

### 文档生成
```bash
claude -p "为 src/api/ 目录下的所有接口生成 API 文档"
```

### Git 操作
```
> 创建一个 commit，描述最近的更改
> 创建一个 PR，包含所有未推送的提交
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `ANTHROPIC_API_KEY` | API 密钥 |
| `CLAUDE_CODE_USE_BEDROCK` | 使用 AWS Bedrock |
| `CLAUDE_CODE_USE_VERTEX` | 使用 Google Vertex AI |
| `CLAUDE_MODEL` | 默认模型 |
