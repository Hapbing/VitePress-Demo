---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "happy_ice"
  text: "前端工具导航"
  tagline: 基于 VitePress 的个人前端导航页面
  image:
    src: /logo.png
    alt: happy_ice
  actions:
    - theme: brand
      text: 前端工具导航
      link: /list/
    - theme: alt
      text: 技术栈
      link: /stack/

features:
  - icon: 🐟
    title: 学习方法
    details: CV大法更好的摸鱼
    link: /list/
    linkText: 工具导航
  - icon: 🕹️
    title: CV作品集
    link: /demo/
    linkText: 作品导航
    details: 开发好难，算了，不管了直接CV
  - icon: 💣
    title: 踩坑日记
    details: 踩过的坑，再踩一遍就不难受了🤤
    link: /notes/
    linkText: 踩坑日记
  - icon: 🛏️
    title: 一个想躺平的开发小白
    #details: 一个想躺平的开发小白
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'logo.png',
    name: 'happy_ice',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Hapbing' },
      { icon: 'gitee', link: 'https://gitee.com/hpice' }
    ]
  },
  {
    avatar: 'jiahui.jpg',
    name: '臣心',
    // title: 'Creator',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'gitee', link: 'https://twitter.com/youyuxi' }
    // ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      制作人员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>