---
title: GeoServer部署问题踩坑日记
aside: true
---

# 踩坑日记

本站总访问量 <span id="busuanzi_value_site_pv" /> 次  
本站访客数 <span id="busuanzi_value_site_uv" /> 人次  



## 关于 GeoServer 部署在 Linux 系统中无法进行图层预览的问题

### 报错详情

在项目中调用 GeoServer 进行自定义图层加载时，Windows 环境下运行正常，但在 Linux 环境下，前端请求路径报 404。查看 Tomcat 日志后发现如下错误信息：

```text
org.apache.catalina.core.StandardWrapperValve.invoke 
在路径为 /meeting-duty 的上下文中，Servlet[springServlet] 的 Servlet.service() 引发了异常：
Handler processing failed; nested exception is java.lang.NoClassDefFoundError: 
Could not initialize class sun.awt.X11GraphicsEnvironment

Caused by: java.lang.NoClassDefFoundError: Could not initialize class sun.awt.X11GraphicsEnvironment
    at java.lang.Class.forName0(Native Method)
    at java.lang.Class.forName(Class.java:264)
    at java.awt.GraphicsEnvironment.createGE(GraphicsEnvironment.java:103)
    at java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment(GraphicsEnvironment.java:82)
    at java.awt.image.BufferedImage.createGraphics(BufferedImage.java:1181)
    at com.tangcy.npcmeeting.utils.PdfWaterMarkKit.drawTranslucentStringPic(PdfWaterMarkKit.java:235)
    at com.tangcy.npcmeeting.utils.PdfWaterMarkKit.createWaterMarkImgPDF(PdfWaterMarkKit.java:66)
    at com.tangcy.npcmeeting.utils.PdfWaterMarkKit.createNewWaterMarkImgPDF(PdfWaterMarkKit.java:49)
    at com.tangcy.npcmeeting.service.UserInfoService.updateByPrimaryKeySelective(UserInfoService.java:254)
    ...
```

### 原因分析
这是由于 Java 程序在图像处理时默认尝试访问图形界面（X11）。
在 Linux 环境中，如果服务器没有图形界面（headless），或者缺少显示设备、键盘或鼠标，就会导致该错误。

### 解决方法
在 tomcat/bin/catalina.sh 脚本中加入以下配置，使 Java 运行于无头模式（headless mode）即可解决：

```sh
JAVA_OPTS="$JAVA_OPTS -Djava.awt.headless=true"
```

