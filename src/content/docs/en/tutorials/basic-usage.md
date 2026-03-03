---
title: Basic Usage
description: Basic usage of Claude Code
---

## Interactive Mode

Launch Claude Code to enter interactive mode:

```bash
claude
```

### Common Operations

#### Code Explanation
```
> Explain the authentication logic in src/utils/auth.ts
```

#### Writing Code
```
> Write a user login API endpoint using Express.js
```

#### Bug Fixing
```
> Fix the form not clearing after submission in src/components/Form.tsx
```

#### Code Refactoring
```
> Refactor src/api/handlers.js to TypeScript with type definitions
```

## Non-Interactive Mode

You can pass requests directly from the command line:

```bash
# Single request
claude -p "Explain the directory structure of this project"

# Pipe input
cat error.log | claude -p "Analyze this error log"

# Output to file
claude -p "Generate API documentation" > api-docs.md
```

## Slash Commands

In interactive mode, use slash commands:

| Command | Description |
|---------|-------------|
| `/help` | Show help information |
| `/clear` | Clear conversation history |
| `/compact` | Compress conversation context |
| `/cost` | Show current session cost |
| `/model` | Switch model |
| `/fast` | Toggle fast mode |

## File Operations

Claude Code can directly operate on your files:

### Read Files
```
> Read the contents of package.json
```

### Edit Files
```
> Add database connection config to src/config.ts
```

### Create Files
```
> Create a new React component UserProfile
```

### Search Code
```
> Find all files using deprecated APIs
```

## Best Practices

1. **Provide clear context** — More specific requests yield better results
2. **Use CLAUDE.md** — Configure project-level instructions
3. **Iterate incrementally** — Break complex tasks into steps
4. **Review changes** — Always check Claude's generated code
5. **Use /compact** — Periodically compress context in long conversations

## Next Steps

Learn more [Commands](/en/tutorials/commands/) to boost your development efficiency.
