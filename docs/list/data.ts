import type { NavLink } from '../.vitepress/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '查询 Web API、CSS、HTML 特性的浏览器兼容性。',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线压缩 PNG、JPG、WebP 图片，适合站点图片优化。',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '面向开发者的在线工具集合，覆盖编码、转换、生成等场景。',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员常用工具箱，包含格式化、加密、编码转换等能力。',
        link: 'https://tool.lu',
      },
      {
        icon: 'https://www.json.cn/r/img/favicon/favicon.ico',
        title: 'JSON 中文网',
        desc: 'JSON 在线解析、格式化、压缩与校验工具。',
        link: 'https://www.json.cn',
      },
    ],
  },
  {
    title: '可视化与三维',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '基于 JavaScript 的开源可视化图表库。',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
        title: 'AntV',
        desc: '蚂蚁集团的数据可视化解决方案。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/logo.png',
        title: 'D3.js',
        desc: '使用 Web 标准构建灵活数据可视化的 JavaScript 库。',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '简单灵活的 JavaScript 图表库。',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threehub.cn/files/site/logo.svg',
        title: 'Three.js',
        desc: '在浏览器中创建 3D 场景和动画的 JavaScript 库。',
        link: 'https://threejs.org',
      },
      {
        icon: 'https://docs.tresjs.org/favicon.svg',
        title: 'TresJS',
        desc: '将 Three.js 带入 Vue 生态的 3D 开发框架。',
        link: 'https://docs.tresjs.org/zh/',
      },
      {
        icon: 'https://threehub.cn/files/site/logo.svg',
        title: '开源三维案例',
        desc: '前端三维开源案例与学习资源。',
        link: 'https://threehub.cn/#/example',
      },
    ],
  },
  {
    title: 'AI 工具',
    items: [
      {
        icon: 'https://happyice.ct.ws/chatgpt.png',
        title: 'ChatGPT',
        desc: '对话式 AI 助手，可用于学习、写作、代码和资料整理。',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI',
        desc: '集成在 Notion 中的写作、总结和知识管理助手。',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        desc: 'AI 图像生成工具，适合灵感图、海报和视觉探索。',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai',
        desc: 'AI 辅助演示文稿制作工具。',
        link: 'https://www.beautiful.ai',
      },
    ],
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架。',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://router.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 官方路由管理器。',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue 状态管理库。',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt',
        desc: '基于 Vue 的全栈应用框架。',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 常用工具集合。',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3 的桌面端组件库。',
        link: 'https://element-plus.org',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，适合中后台产品。',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库。',
        link: 'https://vant-ui.github.io/vant',
      },
    ],
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://react.dev/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库。',
        link: 'https://react.dev',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 应用的声明式路由方案。',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/favicon.ico',
        title: 'Next.js',
        desc: '用于构建 Web 应用的 React 框架。',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '企业级 UI 设计语言和 React 组件库。',
        link: 'https://ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '轻量、快速、可扩展的 React 状态管理方案。',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '高质量、可靠的 React Hooks 工具库。',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'CSS 与样式',
    items: [
      {
        icon: 'https://postcss.org/assets/favicon-DbGqNhKa.ico',
        title: 'PostCSS',
        desc: '使用 JavaScript 插件转换 CSS 的工具。',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/icon.png',
        title: 'Sass',
        desc: '成熟、稳定、功能强大的 CSS 扩展语言。',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://www.tailwindcss.cn/favicons/favicon.ico',
        title: 'Tailwind CSS',
        desc: '实用优先的 CSS 框架。',
        link: 'https://www.tailwindcss.cn',
      },
    ],
  },
  {
    title: '小程序与跨端',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发文档。',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: 'https://happyice.ct.ws/taro.svg',
        title: 'Taro',
        desc: '多端统一开发解决方案。',
        link: 'https://taro.js.org/',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '使用 Vue.js 开发多端应用的框架。',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架。',
        link: 'https://mpxjs.cn',
      },
    ],
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: 'https://nodejs.org/static/images/favicons/favicon.png',
        title: 'Node.js',
        desc: '基于 Chrome V8 引擎的 JavaScript 运行环境。',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '快速、开放、极简的 Node.js Web 框架。',
        link: 'https://expressjs.com',
      },
      {
        icon: '/koa.svg',
        title: 'Koa',
        desc: '由 Express 团队打造的新一代 Web 框架。',
        link: 'https://koajs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生的 Node.js 框架。',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://docs.nestjs.com/assets/logo-small.svg',
        title: 'NestJS',
        desc: '用于构建高效、可扩展服务端应用的 Node.js 框架。',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: '构建与站点生成',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack',
        desc: '现代 JavaScript 应用的静态模块打包工具。',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite',
        desc: '下一代前端工具链。',
        link: 'https://cn.vitejs.dev',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'JavaScript 模块打包器。',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: '面向 JavaScript 与 TypeScript 的增量构建系统。',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '现代化的轻量级静态站点生成器。',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态站点生成器。',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态站点生成器。',
        link: 'https://docusaurus.io/zh-CN',
      },
    ],
  },
  {
    title: '图标与素材',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '阿里巴巴矢量图标库，提供图标搜索、下载与在线管理。',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark',
        desc: '开源图标库，支持多种主题和自定义样式。',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji Searcher',
        desc: 'Emoji 表情搜索工具。',
        link: 'https://emoji.muan.co',
      },
    ],
  },
  {
    title: '学习资料与社区',
    items: [
      {
        icon: 'https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png',
        title: 'MDN Web Docs',
        desc: '权威的 Web 开发文档与 API 参考。',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.jyshare.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '面向初学者的编程与 Web 技术教程。',
        link: 'https://www.runoob.com',
      },
      {
        icon: 'https://es6.ruanyifeng.com/favicon.ico',
        title: 'ES6 入门教程',
        desc: '阮一峰的 ES6 学习资料。',
        link: 'https://es6.ruanyifeng.com',
      },
      {
        title: 'GitHub',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: '面向开源和私有软件项目的代码托管平台。',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球开发者技术问答社区。',
        link: 'https://stackoverflow.com',
      },
      {
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        title: '掘金',
        desc: '面向中文开发者的技术内容分享与交流社区。',
        link: 'https://juejin.cn',
      },
      {
        icon: 'https://assets.cnblogs.com/favicon_v3_2.ico',
        title: '博客园',
        desc: '面向开发者的知识分享社区。',
        link: 'https://www.cnblogs.com',
      },
    ],
  },
  {
    title: '实用工具库',
    items: [
      {
        icon: 'https://tiny.imagestool.com/favicon.png',
        title: 'ImagesTool',
        desc: '在线文件与图片压缩工具。',
        link: 'https://tiny.imagestool.com/zh-CN/',
      },
      {
        icon: 'https://static.wetools.com/assets/images/web/favicon.ico',
        title: 'WebSocket 测试工具',
        desc: '在线 WebSocket 连接与消息测试工具。',
        link: 'https://www.wetools.com/websocket',
      },
    ],
  },
]
