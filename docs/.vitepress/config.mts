import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'happy_ice',
  description: '基于 VitePress 的个人前端导航、作品集与技术笔记站点',

  head: [
    ...head,
    ['link', { rel: 'icon', href: '/image/logo.png' }],
    ['script', { src: '/icon/icon.js' }],
  ],

  themeConfig: {
    i18nRouting: false,
    logo: '/image/logo.png',
    nav,
    sidebar,

    outline: {
      level: 'deep',
      label: '当前页大纲',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hapbing' },
      { icon: 'gitee', link: 'https://gitee.com/hpice' },
    ],

    footer: {
      message: '内容仅供学习与个人展示使用，转载或引用请注明来源。',
      copyright: 'Copyright © 2025-present happy_ice',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
})
