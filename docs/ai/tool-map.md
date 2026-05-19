---
title: AI 工具使用地图
aside: true
---

# AI 工具使用地图

> 更新时间：2026-05-19  
> 目标：按真实使用场景整理 AI 工具，帮助快速判断“现在该用哪个工具”。

<div class="local-badges">
  <span>AI Toolbox</span>
  <span>Code Agent</span>
  <span>Writing & Knowledge</span>
  <span>Image & Design</span>
</div>

## 一张图看懂怎么选

<div class="route-map">
  <div class="route-root">我要完成什么任务？</div>
  <div class="route-grid">
    <a class="route-branch code" href="#代码开发">
      <strong>写代码 / 改项目</strong>
      <span>Claude Code · Cursor · Copilot</span>
    </a>
    <a class="route-branch chat" href="#学习问答">
      <strong>问答 / 学习 / 总结</strong>
      <span>ChatGPT · Claude · DeepSeek</span>
    </a>
    <a class="route-branch docs" href="#文档知识库">
      <strong>写文档 / 做知识库</strong>
      <span>Notion AI · VitePress · Markdown</span>
    </a>
    <a class="route-branch design" href="#图片设计">
      <strong>做图片 / PPT / 视觉</strong>
      <span>Midjourney · Canva AI · Beautiful.ai</span>
    </a>
    <a class="route-branch api" href="#api-与自动化">
      <strong>接入 API / 自动化</strong>
      <span>DeepSeek API · OpenAI API · Anthropic API</span>
    </a>
  </div>
</div>

## 按场景推荐

<div class="ai-map-grid">
  <a class="ai-card" href="#代码开发" aria-label="代码开发">
    <span class="ai-icon code">⌘</span>
    <strong>代码开发</strong>
    <span>改项目、读代码、重构、补测试</span>
  </a>
  <a class="ai-card" href="#学习问答" aria-label="学习问答">
    <span class="ai-icon chat">?</span>
    <strong>学习问答</strong>
    <span>解释概念、制定方案、辅助排查</span>
  </a>
  <a class="ai-card" href="#文档知识库" aria-label="文档知识库">
    <span class="ai-icon docs">#</span>
    <strong>文档知识库</strong>
    <span>总结资料、写教程、整理笔记</span>
  </a>
  <a class="ai-card" href="#图片设计" aria-label="图片设计">
    <span class="ai-icon design">✦</span>
    <strong>图片设计</strong>
    <span>海报、插图、PPT、视觉灵感</span>
  </a>
</div>

## 代码开发

<div class="tool-strip">
  <span>Claude Code</span>
  <span>Cursor</span>
  <span>GitHub Copilot</span>
  <span>OpenCode</span>
</div>

| 工具 | 推荐场景 | 优点 | 注意点 |
| --- | --- | --- | --- |
| Claude Code | 终端里阅读和修改真实项目 | 适合项目级任务、重构、批量改文件 | 需要注意权限、密钥和 Git 状态 |
| Cursor | IDE 内问答、编辑和快速生成页面 | 上手简单，适合前端页面和全栈项目 | 大改动前要明确范围 |
| GitHub Copilot | 日常编码补全、函数生成 | 和编辑器集成好，适合连续编码 | 对项目整体理解有限 |
| OpenCode | 多模型终端编程助手 | 可接不同模型供应商 | 需要自己配置模型与密钥 |

::: tip 我的建议
- 小函数、小组件：用 Copilot 或 Cursor。
- 真实项目重构：用 Claude Code。
- 需要接 DeepSeek 等模型：优先看终端 Agent 是否支持自定义网关。
:::

## 学习问答

<div class="tool-strip green">
  <span>ChatGPT</span>
  <span>Claude</span>
  <span>DeepSeek</span>
</div>

| 工具 | 适合做什么 | 推荐用法 |
| --- | --- | --- |
| ChatGPT | 综合问答、写方案、写代码、资料整理 | 先给背景，再要求分步骤输出 |
| Claude | 长文档阅读、总结、润色、代码解释 | 粘贴较长上下文时体验较好 |
| DeepSeek | 推理、中文问答、代码分析 | 适合性价比敏感的 API 与日常问答 |

### 推荐提问模板

```text
我正在学习/处理【主题】。
我的背景是：【你的水平或项目背景】。
我希望你帮我：【具体目标】。
请用：
1. 简单解释
2. 示例
3. 常见坑
4. 下一步学习路线
的格式回答。
```

## 文档知识库

<div class="tool-strip dark">
  <span>Notion AI</span>
  <span>VitePress</span>
  <span>Markdown</span>
</div>

| 场景 | 推荐工具 | 工作流 |
| --- | --- | --- |
| 日常笔记 | Notion AI | 先随手记录，再让 AI 总结成结构化内容 |
| 技术教程 | ChatGPT / Claude | 先列大纲，再补充步骤、代码块和注意事项 |
| 站点沉淀 | VitePress | 把稳定内容整理成 Markdown 页面 |
| 项目复盘 | Claude / ChatGPT | 输入背景、截图说明、技术栈和问题，生成复盘初稿 |

::: tip 适合你这个站点的用法
把“临时问答”沉淀成 `docs/ai` 或 `docs/notes` 下的 Markdown。这样 AI 帮你生成的不只是一次性答案，而是长期可访问的知识库。
:::

## 图片设计

<div class="tool-strip orange">
  <span>Midjourney</span>
  <span>Canva AI</span>
  <span>Beautiful.ai</span>
</div>

| 工具 | 适合场景 | 示例用途 |
| --- | --- | --- |
| Midjourney | 创意视觉、海报、插画 | 做网站封面、项目视觉灵感图 |
| Canva AI | 设计模板、社媒图、海报 | 做文章配图、工具卡片、宣传图 |
| Beautiful.ai | PPT 和演示文稿 | 快速生成项目汇报结构 |

### 图片类 Prompt 模板

```text
请生成一张【用途】图片，主题是【主题】。
风格：【科技感 / 扁平插画 / 数据大屏 / 赛博朋克 / 简约商务】。
画面元素：【列出元素】。
配色：【主色 + 辅色】。
比例：【16:9 / 4:3 / 1:1】。
不要出现：错误文字、水印、扭曲人物。
```

## API 与自动化

| 平台 | 适合场景 | 备注 |
| --- | --- | --- |
| DeepSeek API | 低成本模型接入、代码和推理场景 | 可用于 Claude Code 兼容接入 |
| OpenAI API | 通用 AI 应用、多模态能力 | 适合产品级功能验证 |
| Anthropic API | 长上下文、复杂写作与代码理解 | 适合长文档和 Agent 场景 |

::: warning 安全提醒
不要把 API Key 写进仓库、Markdown、截图或前端代码。涉及密钥时，优先使用环境变量或服务端代理。
:::

## 我的选择路线

<div class="decision-board">
  <div class="decision-card">
    <span>01</span>
    <strong>是否要直接改代码？</strong>
    <p>是：Claude Code / Cursor<br>否：继续判断</p>
  </div>
  <div class="decision-card">
    <span>02</span>
    <strong>是否要整理长文档？</strong>
    <p>是：Claude / Notion AI<br>否：继续判断</p>
  </div>
  <div class="decision-card">
    <span>03</span>
    <strong>是否需要图片或 PPT？</strong>
    <p>是：Midjourney / Canva AI<br>否：ChatGPT / DeepSeek</p>
  </div>
  <div class="decision-card final">
    <span>04</span>
    <strong>沉淀结果</strong>
    <p>把可复用答案整理到项目、笔记或 AI 知识库。</p>
  </div>
</div>

## 后续计划

- 增加 Claude Code、Cursor、Copilot 的实际使用截图。
- 补充 DeepSeek API、OpenAI API 的费用和模型选择记录。
- 增加“AI 帮我写 VitePress 页面”的完整实战案例。
- 给每个工具补充个人评分和真实使用体验。

<style>
.local-badges,
.tool-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 18px 0 24px;
}

.local-badges {
  justify-content: center;
}

.local-badges span,
.tool-strip span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 7px 12px;
  color: white;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(135deg, #111827, #2563eb);
}

.tool-strip.green span {
  background: linear-gradient(135deg, #065f46, #10b981);
}

.tool-strip.dark span {
  background: linear-gradient(135deg, #111827, #4b5563);
}

.tool-strip.orange span {
  background: linear-gradient(135deg, #c2410c, #f97316);
}

.route-map {
  margin: 24px 0 30px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  padding: 24px;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 32%),
    linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg));
}

.route-root {
  margin: 0 auto 18px;
  max-width: 280px;
  border-radius: 999px;
  padding: 12px 18px;
  text-align: center;
  color: white;
  font-weight: 800;
  background: linear-gradient(135deg, #111827, #2563eb);
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.22);
}

.route-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
}

.route-branch {
  display: flex;
  min-height: 104px;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  padding: 16px;
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  background: rgba(255, 255, 255, 0.72);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.dark .route-branch {
  background: rgba(31, 41, 55, 0.72);
}

.route-branch:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
}

.route-branch strong {
  font-size: 16px;
}

.route-branch span {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.ai-map-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.ai-card {
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  padding: 20px;
  text-align: center;
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg));
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.ai-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.14);
}

.ai-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: white;
  font-size: 24px;
  font-weight: 900;
  background: linear-gradient(135deg, #111827, #2563eb);
}

.ai-icon.chat {
  background: linear-gradient(135deg, #065f46, #10b981);
}

.ai-icon.docs {
  background: linear-gradient(135deg, #4338ca, #8b5cf6);
}

.ai-icon.design {
  background: linear-gradient(135deg, #c2410c, #f97316);
}

.ai-card strong {
  font-size: 18px;
}

.ai-card span:last-child {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
}

.decision-board {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.decision-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 18px;
  background: linear-gradient(145deg, var(--vp-c-bg-soft), var(--vp-c-bg));
}

.decision-card span {
  display: inline-flex;
  margin-bottom: 12px;
  border-radius: 999px;
  padding: 5px 10px;
  color: white;
  font-size: 12px;
  font-weight: 800;
  background: #2563eb;
}

.decision-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
}

.decision-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.7;
}

.decision-card.final span {
  background: #f97316;
}
</style>
