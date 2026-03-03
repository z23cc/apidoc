---
title: Installation
description: How to install and configure Claude Code
---

## System Requirements

- **OS**: macOS 10.15+, Ubuntu 20.04+ / Debian 10+, Windows (via WSL2)
- **Node.js**: 18.0 or higher
- **Memory**: 4GB+ recommended

## Installation

### Using npm (Recommended)

```bash
npm install -g @anthropic-ai/claude-code
```

### Verify Installation

```bash
claude --version
```

## First Use

### 1. Launch Claude Code

Run in your project directory:

```bash
claude
```

### 2. Complete Authentication

On first run, Claude Code will guide you through Anthropic API authentication. You'll need:
- An Anthropic account
- A valid API key or OAuth login

### 3. Start Chatting

Once authenticated, you can interact with Claude directly in your terminal:

```
> Analyze the structure of this project

Claude: Let me look at the project structure...
```

## Configuration Files

### CLAUDE.md

Create a `CLAUDE.md` file in your project root to provide project-level instructions:

```markdown
# Project Notes

- This is a React + TypeScript project
- Uses pnpm as package manager
- Test command: pnpm test
- Build command: pnpm build
```

### Configuration Hierarchy

Claude Code supports multi-level configuration:

| Level | Path | Purpose |
|-------|------|---------|
| Global | `~/.claude/CLAUDE.md` | Personal global preferences |
| Project | `project-root/CLAUDE.md` | Project instructions (committable) |
| Local | `project-root/.claude/CLAUDE.md` | Private local instructions |

## Common Settings

### Set Default Model

```bash
claude config set model claude-sonnet-4-6
```

### Set Theme

```bash
claude config set theme dark
```

## Next Steps

After installation, head to [Basic Usage](/en/tutorials/basic-usage/) to learn how to use Claude Code effectively.
