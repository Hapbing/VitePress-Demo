<!-- ---
layoutClass: m-nav-layout
outline: [2, 3, 4]
--- -->
<!-- <style src="../list/index.scss"></style> -->

# 踩坑日记
本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次
## 关于使用[tresJS](https://docs.tresjs.org/zh/)框架加载3DTiles数据使用自己的数据集不显示问题

使用3DTilesRendererJS实现tresJS框架加载3DTiles显示问题，首先确保`跨域问题`正确获取到tileset.json地址。
正常使用TilesRenderer函数进行加载无法显示。



```js
import { TilesRenderer } from '3d-tiles-renderer'
// tilesRendererapi为后端tileset.json发布地址
const tilesRenderer = new TilesRenderer(Service.tilesRendererapi) 
```
问题请求结果如下：
![](https://foruda.gitee.com/images/1732423557305942434/1dd96c21_14640185.png)

### 解决方法
在使用第三方转换工具之前需确保转换之前的模型没有被模型`压缩工具`压缩（例如[gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline)）进行了`压缩操作`。<br>
若进行压缩操作之后进行转换，再使用3DTilesRendererJS加载时需要在前端进行draco`解压缩操作`
```js{2,3,4,6,7,8,9}
import { TilesRenderer } from '3d-tiles-renderer'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// tilesRendererapi为后端tileset.json发布地址
const tilesRenderer = new TilesRenderer(Service.tilesRendererapi)
// 增加解压缩
const loader = new GLTFLoader();
loader.setDRACOLoader(new DRACOLoader().setDecoderPath('./draco/'));
tilesRenderer.manager.addHandler(/\.gltf$/, loader)

```
解决后：
![](https://foruda.gitee.com/images/1732423447413965793/77aaa843_14640185.png)

[开源三维加载3DTiles示例](https://threehub.cn/#/codeMirror?navigation=ThreeJS&classify=expand&id=loadTiles)<br>
👉[3DTilesRendererJS插件地址](https://github.com/NASA-AMMOS/3DTilesRendererJS)