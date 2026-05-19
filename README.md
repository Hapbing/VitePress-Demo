# VitePress-Demo

<p align="center">
  <img src="docs/public/image/logo.png" alt="happy_ice logo" width="140" />
</p>

<p align="center">
  <strong>一个基于 VitePress 打造的个人前端导航、作品集与技术笔记站点。</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VitePress-1.x-646CFF?logo=vitepress&logoColor=white" alt="VitePress" />
  <img src="https://img.shields.io/badge/Vue-3.x-42B883?logo=vue.js&logoColor=white" alt="Vue" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white" alt="Node.js" />
</p>

---

## 项目简介

`VitePress-Demo` 是一个静态个人站点工程，主要用于沉淀前端工具导航、个人项目作品、技术栈展示和日常踩坑笔记。项目基于 VitePress 默认主题进行扩展，加入了导航卡片、图片放大、页面进度条、访问统计和 Live2D 看板娘等功能。

## 功能亮点

- **首页展示**：个人介绍、快捷入口、成员信息与站点导航。
- **前端工具导航**：按分类维护常用开发工具、框架、社区和学习资源。
- **作品集页面**：集中展示个人项目截图、说明和访问链接。
- **技术笔记**：记录 GeoServer、Nginx、NSSM、TresJS 等实践问题。
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

## 目录结构

```txt
.
├─ docs
│  ├─ .vitepress          # VitePress 配置、主题、组件与样式
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

该项目是静态站点，构建后可将 `docs/.vitepress/dist` 目录部署到任意静态托管服务，例如：

- GitHub Pages
- Gitee Pages
- Nginx 静态目录
- Vercel / Netlify / Cloudflare Pages

如果部署到子路径，请根据实际路径调整 VitePress 的 `base` 配置。

## 项目状态

当前工程主要用于个人站点内容维护和展示。后续可以继续优化：

- 统一文件编码，避免中文乱码。
- 统一 npm 或 pnpm 包管理器。
- 清理缓存与构建产物提交策略。
- 完善 README 截图和在线预览地址。

## License

仅供学习与个人展示使用。
