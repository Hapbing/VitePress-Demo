# TresJS 加载 3DTiles 数据不显示

本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

## 问题描述

使用 [TresJS](https://docs.tresjs.org/zh/) 和 `3d-tiles-renderer` 加载自己的 3DTiles 数据时，`tileset.json` 能正常请求到，但页面中模型无法显示。

```js
import { TilesRenderer } from '3d-tiles-renderer'

// Service.tilesRendererapi 为后端发布的 tileset.json 地址
const tilesRenderer = new TilesRenderer(Service.tilesRendererapi)
```

问题请求结果如下：

![](https://foruda.gitee.com/images/1732423557305942434/1dd96c21_14640185.png)

## 原因分析

如果原始模型在转换为 3DTiles 之前经过了 Draco 等压缩处理，前端加载时也需要配置对应的解压加载器。否则资源请求可能成功，但模型无法被正确解析和渲染。

## 解决方法

在使用第三方转换工具之前，先确认模型是否被压缩。如果模型已经经过 Draco 压缩，前端需要给 `TilesRenderer` 注册带 `DRACOLoader` 的 `GLTFLoader`。

```js{2,3,4,7,8,9}
import { TilesRenderer } from '3d-tiles-renderer'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const tilesRenderer = new TilesRenderer(Service.tilesRendererapi)

const loader = new GLTFLoader()
loader.setDRACOLoader(new DRACOLoader().setDecoderPath('./draco/'))
tilesRenderer.manager.addHandler(/\.gltf$/, loader)
```

解决后效果如下：

![](https://foruda.gitee.com/images/1732423447413965793/77aaa843_14640185.png)

## 参考链接

- [开源三维加载 3DTiles 示例](https://threehub.cn/#/codeMirror?navigation=ThreeJS&classify=expand&id=loadTiles)
- [3DTilesRendererJS 插件地址](https://github.com/NASA-AMMOS/3DTilesRendererJS)
