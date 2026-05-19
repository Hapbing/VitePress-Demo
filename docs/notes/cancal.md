# Canal 无法监听问题

本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

## 问题描述

修改 Canal 监听地址后重新启动，发现 Canal 仍然无法正常监听新的数据库地址。

## 解决方法

进入 Canal 实例配置目录：

```bash
conf/example
```

删除该目录下的 `meta.dat` 文件，然后重新启动 Canal。

```bash
rm meta.dat
```

`meta.dat` 中会保存之前的位点和实例元信息，配置变更后如果旧信息没有刷新，可能导致监听异常。删除后 Canal 会重新生成元信息，从而恢复监听。
