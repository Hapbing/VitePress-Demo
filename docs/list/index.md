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

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
该页面由 [maomao](https://github.com/maomao1996) 提供灵感开发。https://github.com/maomao1996/vitepress-nav-template
:::