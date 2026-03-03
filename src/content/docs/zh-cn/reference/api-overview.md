---
title: API 概览
description: Claude Code API 和工具概览
---

## Claude Code 工具体系

Claude Code 内部使用一套工具系统来完成各种任务。了解这些工具有助于你更好地利用 Claude Code。

## 核心工具

### 文件工具

| 工具 | 说明 | 使用场景 |
|------|------|----------|
| `Read` | 读取文件内容 | 查看代码、配置文件 |
| `Write` | 写入文件 | 创建新文件 |
| `Edit` | 编辑文件（查找替换） | 修改现有代码 |
| `Glob` | 文件模式匹配 | 查找文件 |
| `Grep` | 内容搜索 | 搜索代码 |

### 系统工具

| 工具 | 说明 | 使用场景 |
|------|------|----------|
| `Bash` | 执行 shell 命令 | 运行构建、测试 |
| `Agent` | 启动子代理 | 复杂多步骤任务 |
| `WebFetch` | 获取网页内容 | 查看文档、API |
| `WebSearch` | 网页搜索 | 搜索最新信息 |

## Claude API（Anthropic SDK）

如果你想在自己的应用中集成 Claude，可以使用 Anthropic SDK：

### Python SDK

```python
from anthropic import Anthropic

client = Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)
print(message.content[0].text)
```

### TypeScript SDK

```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const message = await client.messages.create({
  model: 'claude-sonnet-4-6-20250514',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello, Claude!' }
  ],
});
console.log(message.content[0].text);
```

## Tool Use（工具使用）

Claude API 支持工具使用功能，让 Claude 能调用你定义的函数：

```python
import anthropic

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_weather",
        "description": "获取指定城市的天气信息",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "城市名称"
                }
            },
            "required": ["city"]
        }
    }
]

response = client.messages.create(
    model="claude-sonnet-4-6-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "北京今天天气怎么样？"}
    ]
)
```

## 相关资源

- [Anthropic API 文档](https://docs.anthropic.com/)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [MCP 协议规范](https://modelcontextprotocol.io/)
