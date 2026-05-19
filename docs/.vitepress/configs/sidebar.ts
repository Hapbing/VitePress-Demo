import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/ai/': [
    {
      text: 'AI 知识库',
      collapsed: false,
      items: [
        { text: '知识库首页', link: '/ai/' },
        { text: 'AI 工具使用地图', link: '/ai/tool-map' },
        { text: 'Claude Code 接入 DeepSeek', link: '/ai/claude-code-deepseek' },
        { text: '常用 AI 工具清单', link: '/ai/tools' },
        { text: '提示词与使用方法', link: '/ai/prompt-patterns' },
      ],
    },
  ],
  '/notes/': [
    {
      text: '踩坑笔记',
      collapsed: false,
      items: [
        { text: 'TresJS 加载 3DTiles 数据不显示', link: '/notes/tresjs' },
        { text: 'Canal 无法监听问题', link: '/notes/cancal' },
        { text: 'Canal 同步数据库时区错误', link: '/notes/cancaltime' },
        { text: 'GeoServer Linux 图层预览问题', link: '/notes/geoserver' },
        { text: 'GeoServer 使用 Nginx 代理 HTTPS 后请求 400', link: '/notes/geonginx' },
        { text: 'Windows 使用 NSSM 以服务方式运行 JAR', link: '/notes/nssm' },
      ],
    },
  ],
  '/demo/': [
    {
      text: '我的作品',
      collapsed: false,
      items: [
        { text: '村落奖补平台首页', link: '/demo/village' },
        { text: '村落大屏设计与开发', link: '/demo/villageBigData' },
        { text: '污染环境风险防控 GIS 系统', link: '/demo/gis' },
        { text: '污染环境风险防控后台系统', link: '/demo/gisBackground' },
        { text: '电站信息化数字孪生系统', link: '/demo/power' },
        { text: '后台管理系统框架', link: '/demo/manage' },
        { text: '图片与 PDF 合并工具', link: '/demo/pictureMerge' },
      ],
    },
  ],
}
