# 踩坑日记
本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

## 关于cancl修改监听地址启动后无法实现监听问题
### 解决方法
进入cancal配置目录
```bash
conf/example
```
删除该目录下的`meta.dat`文件并重新启动cancal即可解决无法监听问题。