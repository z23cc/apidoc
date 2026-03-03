---
title: Commands Reference
description: Common Claude Code CLI commands
---

## Launch Commands

### Basic Launch
```bash
claude                    # Interactive mode
claude -p "your request"  # Non-interactive mode (one-shot)
claude -c                 # Continue last session
claude -r                 # Resume recent session
```

### Launch Options

| Option | Description | Example |
|--------|-------------|---------|
| `-p, --prompt` | Non-interactive mode, exit after | `claude -p "analyze code"` |
| `-c, --continue` | Continue last conversation | `claude -c` |
| `-r, --resume` | Resume specific session | `claude -r` |
| `--model` | Specify model | `claude --model claude-sonnet-4-6` |
| `--output-format` | Output format | `claude -p "..." --output-format json` |

## Configuration Commands

```bash
# View config
claude config list

# Set config
claude config set <key> <value>

# Common settings
claude config set model claude-sonnet-4-6
claude config set theme dark
```

## MCP Server Management

```bash
# Add MCP server
claude mcp add <name> <command> [args...]

# List MCP servers
claude mcp list

# Remove MCP server
claude mcp remove <name>

# Example: Add filesystem MCP
claude mcp add filesystem npx @anthropic-ai/mcp-server-filesystem /path/to/dir
```

## Skill Management

```bash
# Install skill
claude skill install <source/skill-name>

# List installed skills
claude skill list

# Remove skill
claude skill remove <skill-name>
```

## Practical Commands

### Code Review
```bash
# Review Git changes
claude -p "Review recent Git commits and provide feedback"

# Review specific file
claude -p "Review the code quality of src/api/users.ts"
```

### Test Generation
```bash
claude -p "Generate unit tests for src/utils/validators.ts"
```

### Documentation
```bash
claude -p "Generate API docs for all endpoints in src/api/"
```

### Git Operations
```
> Create a commit describing the recent changes
> Create a PR including all unpushed commits
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API key |
| `CLAUDE_CODE_USE_BEDROCK` | Use AWS Bedrock |
| `CLAUDE_CODE_USE_VERTEX` | Use Google Vertex AI |
| `CLAUDE_MODEL` | Default model |
