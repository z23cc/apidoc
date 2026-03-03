---
title: API Overview
description: Claude Code API and tools overview
---

## Claude Code Tool System

Claude Code uses an internal tool system to accomplish various tasks. Understanding these tools helps you make the most of Claude Code.

## Core Tools

### File Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| `Read` | Read file contents | View code, config files |
| `Write` | Write files | Create new files |
| `Edit` | Edit files (find/replace) | Modify existing code |
| `Glob` | File pattern matching | Find files |
| `Grep` | Content search | Search code |

### System Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| `Bash` | Execute shell commands | Run builds, tests |
| `Agent` | Launch sub-agents | Complex multi-step tasks |
| `WebFetch` | Fetch web content | View docs, APIs |
| `WebSearch` | Web search | Search latest information |

## Claude API (Anthropic SDK)

To integrate Claude into your own applications, use the Anthropic SDK:

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

## Tool Use

The Claude API supports tool use, allowing Claude to call functions you define:

```python
import anthropic

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_weather",
        "description": "Get weather information for a city",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "City name"
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
        {"role": "user", "content": "What's the weather in Beijing?"}
    ]
)
```

## Related Resources

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)
