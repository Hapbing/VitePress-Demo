---
title: Claude Code 接入 DeepSeek
aside: true
---

# Claude Code 接入 DeepSeek

> 更新时间：2026-05-19  
> 适用场景：希望在 Claude Code 中使用 DeepSeek API 作为后端模型。

## 参考资料

- [DeepSeek API - Claude Code 集成文档](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code)
- [DeepSeek API Quick Start](https://api-docs.deepseek.com/)
- [Claude Code 环境变量文档](https://code.claude.com/docs/en/env-vars)
- [Claude Code LLM Gateway 文档](https://code.claude.com/docs/en/llm-gateway)

## 前置条件

- 已安装 Node.js 18+。
- 已获取 DeepSeek API Key。
- 已安装或准备安装 Claude Code。
- Windows 用户建议安装 Git for Windows，方便终端工具正常运行。

## 方式一：已有 Claude Code，直接切换到 DeepSeek

如果你已经安装了 Claude Code，只需要在启动前配置环境变量。

### Windows PowerShell

```powershell
$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="你的 DeepSeek API Key"
$env:ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
```

然后进入项目目录并启动：

```powershell
cd E:\你的项目目录
claude
```

### macOS / Linux

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN="你的 DeepSeek API Key"
export ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL=max
```

然后执行：

```bash
cd /path/to/my-project
claude
```

## 方式二：从零安装 Claude Code

安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

检查是否安装成功：

```bash
claude --version
```

然后按上面的环境变量配置 DeepSeek，再进入项目目录运行：

```bash
claude
```

## 配置说明

| 变量 | 作用 |
| --- | --- |
| `ANTHROPIC_BASE_URL` | 将 Claude Code 的请求转发到 DeepSeek 的 Anthropic 兼容接口。 |
| `ANTHROPIC_AUTH_TOKEN` | DeepSeek API Key，会作为 Bearer Token 发送。 |
| `ANTHROPIC_MODEL` | 主模型，适合复杂代码任务。 |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | 快速/轻量任务模型。 |
| `CLAUDE_CODE_SUBAGENT_MODEL` | 子任务或子代理使用的模型。 |
| `CLAUDE_CODE_EFFORT_LEVEL` | 推理努力程度，可按需要调整。 |

## 常见问题

### 1. API Key 要不要写进项目？

不要。API Key 不应该写入仓库，也不要提交到 Git。建议只通过环境变量、系统密钥管理器或本机配置传入。

### 2. 为什么不是 `https://api.deepseek.com`？

DeepSeek 的 OpenAI 兼容接口 base URL 是 `https://api.deepseek.com`，但 Claude Code 需要 Anthropic Messages 格式，因此这里使用 DeepSeek 提供的 Anthropic 兼容入口：

```text
https://api.deepseek.com/anthropic
```

### 3. 模型名以后会变吗？

可能会。DeepSeek 文档中已经标注部分兼容模型名存在弃用时间，因此模型名建议以官方文档为准。本文记录的是 2026-05-19 查询到的配置方式。

### 4. Windows 下环境变量只对当前窗口生效吗？

是的，上面的 `$env:` 写法只对当前 PowerShell 会话生效。关闭窗口后需要重新设置。如果想长期生效，可以配置到系统环境变量或启动脚本中。

## 安全建议

- 不要把 API Key 写入 Markdown、README、截图或代码仓库。
- 给不同工具单独创建 API Key，方便权限管理和泄露后快速吊销。
- 如果使用第三方代理或网关，确认它是否会记录请求内容。
- 生产项目中不要把敏感代码、数据库信息或私钥直接交给 AI 工具。
