---
layout: home

hero:
  name: happy_ice
  text: 前端导航、AI 知识库与个人作品集
  tagline: 用 VitePress 搭建的个人知识站，沉淀开发工具、AI 实践、项目作品、技术栈和踩坑笔记。
  image:
    src: /image/logo.png
    alt: happy_ice
  actions:
    - theme: brand
      text: 进入 AI 知识库
      link: /ai/
    - theme: alt
      text: 查看工具导航
      link: /list/
    - theme: alt
      text: 浏览我的作品
      link: /demo/

features:
  - icon: 🤖
    title: AI 知识库
    details: 整理 AI 工具、模型接入、Claude Code、DeepSeek、提示词方法和日常使用经验。
    link: /ai/
    linkText: 学习 AI 实践
  - icon: 🧭
    title: 前端工具导航
    details: 收集开发、可视化、Vue、React、Node、构建工具、学习资料等常用站点。
    link: /list/
    linkText: 进入导航
  - icon: 🧩
    title: 个人作品集
    details: 汇总项目截图、演示地址、开源仓库和实践说明，记录每一次开发成长。
    link: /demo/
    linkText: 查看作品
  - icon: 📝
    title: 踩坑笔记
    details: 记录 GeoServer、Nginx、TresJS、Canal、NSSM 等开发与部署问题。
    link: /notes/
    linkText: 阅读笔记
  - icon: 🛠️
    title: 技术栈清单
    details: 展示前端、后端、数据库、DevOps、测试与开发工具等能力地图。
    link: /stack/
    linkText: 查看技术栈
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'image/logo.png',
    name: 'happy_ice',
    title: '站点维护者 / 前端开发学习者',
    links: [
      { icon: 'github', link: 'https://github.com/Hapbing' },
      { icon: 'gitee', link: 'https://gitee.com/hpice' }
    ]
  },
  {
    avatar: 'image/jiahui.jpg',
    name: '臻心',
    title: '内容共建者'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      制作成员
    </template>
    <template #lead>
      记录学习、作品、AI 实践与开发经验，把踩过的坑变成下一次出发的路标。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
