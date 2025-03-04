import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { h } from 'vue'
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import { useLive2d } from 'vitepress-theme-website'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
        NProgress.done() // 停止进度条
      }
    }
  },
  //看板
  // setup() {
  //   useLive2d({
  //     enable: true,
  //     model: {
  //       url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/bilibili-22/index.json'
  //     },
  //     display: {
  //       position: 'right',
  //       width: '135px',
  //       height: '300px',
  //       xOffset: '35px',
  //       yOffset: '5px'
  //     },
  //     mobile: {
  //       show: true
  //     },
  //     react: {
  //       opacity: 0.8
  //     }
  //   })
  // }
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}