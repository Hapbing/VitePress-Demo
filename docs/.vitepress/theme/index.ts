import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { h } from 'vue'
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';


export default {
  // useOml2d,
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
  async enhanceApp({ app, router }) {
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
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        dockedPosition: 'right',
        models: [
          {
            path: 'model/mai/index.json',
            position: [-10, -10],
            scale: 0.15,
            volume: 0.5
          },
        ],
        tips: {
          idleTips: {
            wordTheDay: (wordTheDayData) => {
              return wordTheDayData.hitokoto;
            }
          },
          style: {
            top: '-45%',
          }
        },
        statusBar: {
          restMessage: '休息中',
        },
        menus: {
          items: [
            {
              id: 'rest',
              icon: 'icon-rest',
              title: '休息',
              onClick: async (oml2d) => {
                oml2d.statusBarOpen(oml2d.options.statusBar?.restMessage); // 展示状态条
                oml2d.clearTips(); // 清除当前提示框内容, 并停止空闲消息播放器

                // 为状态条绑定点击事件
                oml2d.setStatusBarClickEvent(() => {
                  void oml2d.statusBarClose(); // 关闭状态条
                  void oml2d.stageSlideIn(); // 舞台滑入
                  oml2d.statusBarClearEvents(); // 清除所有事件
                });

                void oml2d.stageSlideOut(); // 舞台滑出
              }
            },
            {
              id: 'volume',
              icon: 'icon-shengyinqiehuan',
              title: '声音切换',
              onClick: async (oml2d) => {
                // 初始化 window.isMuted
                if (typeof window.isMuted === 'undefined') window.isMuted = false;

                if (oml2d.options && oml2d.options.models && oml2d.options.models[0]) {
                  if (!window.isMuted) {
                    // 静音
                    oml2d.options.models[0].volume = 0;
                    await oml2d.reloadModel?.();
                    oml2d.tipsMessage('已静音', 2000, 10);
                    window.isMuted = true;
                    oml2d.updateMenu && oml2d.updateMenu('volume', { title: '恢复声音' });
                  } else {
                    // 恢复声音
                    oml2d.options.models[0].volume = 0.5;
                    await oml2d.reloadModel?.();
                    oml2d.tipsMessage('已恢复声音', 2000, 10);
                    window.isMuted = false;
                    oml2d.updateMenu && oml2d.updateMenu('volume', { title: '静音' });
                  }
                } else {
                  oml2d.tipsMessage('操作失败', 2000, 10);
                }
              }
            }
          ],
          style: {
            left: '-30%',
          }
        }
      });
    }

  },

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