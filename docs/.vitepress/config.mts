import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "happy_ice",
  description: "A VitePress Site",

  head: [
    /**
     * 公用目录 public
     */
    ['link', { rel: 'icon', href: 'image/logo.png' }],
    ['script', { src: 'icon/icon.js' }],
  ],
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: "/logo.png",
    nav,
    sidebar,
    /* 右侧大纲配置 */
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
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Hapbing',
      },
      {
        icon: 'gitee',
        link: 'https://gitee.com/hpice',
      }
    ],
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址,演示服务器由团队提供www.dxkjs.com',
      copyright: 'Copyright © 2025-happy_ice',
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
      tipLabel: 'TIPS',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
