---
title: GeoServer Linux 图层预览问题
aside: true
---

# GeoServer Linux 图层预览问题

本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

## 问题描述

GeoServer 部署到 Linux 服务器后，图层预览或相关图像处理能力异常。在 Windows 环境中运行正常，但 Linux 环境下请求可能返回 404 或服务端异常。

## 报错详情

Tomcat 日志中可以看到类似错误：

```text
Handler processing failed; nested exception is java.lang.NoClassDefFoundError:
Could not initialize class sun.awt.X11GraphicsEnvironment

Caused by: java.lang.NoClassDefFoundError: Could not initialize class sun.awt.X11GraphicsEnvironment
    at java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment(GraphicsEnvironment.java:82)
    at java.awt.image.BufferedImage.createGraphics(BufferedImage.java:1181)
```

## 原因分析

Java 程序在进行图像处理时，默认可能会尝试访问图形界面环境，也就是 X11。Linux 服务器通常是无桌面环境的 headless 模式，如果缺少显示设备、键盘或鼠标等图形环境，就可能触发该错误。

## 解决方法

在 `tomcat/bin/catalina.sh` 中增加以下 JVM 参数，让 Java 以无头模式运行：

```sh
JAVA_OPTS="$JAVA_OPTS -Djava.awt.headless=true"
```

保存后重启 Tomcat 或 GeoServer 服务即可。
