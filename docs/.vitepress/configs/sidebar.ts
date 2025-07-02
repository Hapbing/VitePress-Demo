import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/notes/': [
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'tresJS框架无法加载3DTiles数据', link: '/notes/tresjs' },
                { text: 'cancal无法监听', link: '/notes/cancal' },
                { text: 'cancal同步数据库数据时区错误', link: '/notes/cancaltime' },
                { text: 'GeoServer在Linux系统中图层预览问题', link: '/notes/geoserver' },
                { text: 'geoserver使用nginx代理https后部分请求报错400', link: '/notes/geonginx' },
                { text: 'Windows 使用 NSSM 以服务方式运行 JAR 包', link: '/notes/nssm' },
            ]
        }
    ],
    '/demo/': [
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: '村落奖补平台首页', link: '/demo/village' },
                { text: '村落大屏设计与开发', link: '/demo/villageBigData' },
                { text: '污染环境风险防控GIS系统', link: '/demo/gis' },
                { text: '污染环境风险防控后台系统', link: '/demo/gisBackground' },
                { text: '电站信息化数字孪生系统', link: '/demo/power' },
                { text: '后台管理系统框架', link: '/demo/manage' },
                { text: '桌面端合并工具', link: '/demo/pictureMerge' },
            ]
        }
    ]
}
