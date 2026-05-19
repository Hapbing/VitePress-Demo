# VitePress-Demo

<p align="center">
  <img src="docs/public/image/logo.png" alt="happy_ice logo" width="140" />
</p>

<p align="center">
  <strong>一个基于 VitePress 打造的个人前端导航、AI 知识库、作品集与技术笔记站点。</strong>
</p>

<p align="center">
  <a href="https://icehappy.netlify.app/">在线预览</a>
  ·
  <a href="https://github.com/Hapbing">GitHub</a>
  ·
  <a href="https://gitee.com/hpice">Gitee</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VitePress-1.x-646CFF?logo=vitepress&logoColor=white" alt="VitePress" />
  <img src="https://img.shields.io/badge/Vue-3.x-42B883?logo=vue.js&logoColor=white" alt="Vue" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify" />
</p>

---

## 在线预览

访问地址：[https://icehappy.netlify.app/](https://icehappy.netlify.app/)

## 项目简介

`VitePress-Demo` 是一个静态个人知识站点，主要用于沉淀前端工具导航、AI 工具与模型接入教程、个人项目作品、技术栈展示和日常踩坑笔记。

项目基于 VitePress 默认主题进行扩展，加入了导航卡片、图片放大、页面进度条、访问统计、Live2D 看板娘和本地搜索等功能。

## 功能亮点

- **首页展示**：个人入口、快捷导航、成员信息与站点功能概览。
- **AI 知识库**：整理 AI 工具、Claude Code、DeepSeek 接入教程和提示词方法。
- **前端工具导航**：按分类维护常用开发工具、框架、社区和学习资源。
- **作品集页面**：集中展示个人项目截图、说明、演示地址和开源仓库。
- **踩坑笔记**：记录 GeoServer、Nginx、NSSM、TresJS、Canal 等实践问题。
- **交互增强**：集成 NProgress、medium-zoom、busuanzi 与 Live2D。
- **本地搜索**：使用 VitePress 内置 local search，方便快速检索内容。

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 站点框架 | VitePress |
| 前端框架 | Vue 3 |
| 构建工具 | Vite |
| 样式 | Sass / CSS |
| 交互插件 | nprogress-v2 / medium-zoom / oh-my-live2d |
| 访问统计 | busuanzi.pure.js |
| 部署平台 | Netlify |

## 目录结构

```txt
.
├─ docs
│  ├─ .vitepress          # VitePress 配置、主题、组件与样式
│  ├─ ai                  # AI 知识库与工具教程
│  ├─ demo                # 个人作品展示
│  ├─ list                # 前端工具导航页与数据
│  ├─ notes               # 技术笔记
│  ├─ public              # 图片、图标、Live2D 模型等静态资源
│  ├─ stack               # 技术栈展示
│  └─ index.md            # 首页
├─ index.html             # Vite 默认入口文件
├─ package.json           # 项目脚本与依赖
├─ vite.config.js         # Vite 配置
└─ README.md
```

## 快速开始

### 环境要求

建议使用：

- Node.js 18+
- npm 9+ 或 pnpm 8+

### 安装依赖

```sh
npm install
```

如果你更习惯使用 pnpm，也可以执行：

```sh
pnpm install
```

### 本地开发

```sh
npm run dev
```

启动后根据终端提示访问本地地址，通常为：

```txt
http://localhost:5173
```

### 生产构建

```sh
npm run build
```

构建产物默认输出到：

```txt
docs/.vitepress/dist
```

### 本地预览

```sh
npm run preview
```

## 内容维护

### 修改顶部导航

编辑：

```txt
docs/.vitepress/configs/nav.ts
```

### 修改侧边栏

编辑：

```txt
docs/.vitepress/configs/sidebar.ts
```

### 新增 AI 知识库文章

在 `docs/ai` 下新增 Markdown 文件，然后同步更新侧边栏配置。

### 新增工具导航卡片

编辑：

```txt
docs/list/data.ts
```

按现有分类追加数据即可：

```ts
{
  icon: 'https://example.com/favicon.ico',
  title: '工具名称',
  desc: '工具描述',
  link: 'https://example.com',
}
```

### 新增笔记文章

在 `docs/notes` 下新增 Markdown 文件，然后同步更新侧边栏配置。

### 新增作品展示

在 `docs/demo` 下新增 Markdown 文件，然后同步更新侧边栏配置。

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 VitePress 开发服务 |
| `npm run build` | 构建生产静态文件 |
| `npm run preview` | 预览构建结果 |

## 部署说明

当前在线站点部署在 Netlify：

```txt
https://icehappy.netlify.app/
```

该项目是静态站点，构建后可将 `docs/.vitepress/dist` 目录部署到任意静态托管服务，例如：

- Netlify
- GitHub Pages
- Gitee Pages
- Nginx 静态目录
- Vercel / Cloudflare Pages

如果部署到子路径，请根据实际路径调整 VitePress 的 `base` 配置。

## 项目状态

当前工程主要用于个人站点内容维护和展示。后续可以继续优化：

- 持续补充 AI 知识库与工具教程。
- 增加站点截图和页面预览图。
- 统一 npm 或 pnpm 包管理器。
- 清理缓存与构建产物提交策略。

## License

仅供学习与个人展示使用。
