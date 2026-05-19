---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
import MNavLinks from '../.vitepress/components/MNavLinks.vue'
</script>
<style src="./index.scss"></style>

# 前端工具导航

这里整理了开发过程中常用的工具、框架文档、学习资料和技术社区，方便快速查找与复用。

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip 灵感来源
该页面参考了 [maomao1996/vitepress-nav-template](https://github.com/maomao1996/vitepress-nav-template) 的导航卡片思路，并根据个人使用习惯进行了整理。
:::
