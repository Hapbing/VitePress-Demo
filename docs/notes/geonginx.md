---
title: GeoServer 使用 Nginx 代理 HTTPS 报 400 错误
aside: true
---

# GeoServer 使用 Nginx 代理 HTTPS 报 400 错误

在使用 Nginx 代理 GeoServer 的 HTTPS 服务时，登录操作可能会出现 **400 Bad Request** 错误，导致账号无法登录。



## 详细问题

GeoServer 在某些版本中，在登录账号时会默认向 HTTP 发送部分认证或验证请求。  
当我们使用 Nginx 进行 HTTPS 反向代理时，这些请求因协议不匹配而被拒绝，从而导致登录失败或页面加载异常。



## 错误现象

- 登录页面提交后提示 **400 Bad Request**
- 控制台可能提示某些请求被浏览器拦截或被 Nginx 拒绝
- GeoServer 后台日志无明显错误（因为请求根本没有进入）



## 解决方法

需要在 GeoServer 的 `web.xml` 文件中 **手动添加 CSRF 白名单配置项**，允许来自指定域名的跨站请求。

### 步骤如下：

1. 打开 GeoServer 部署目录中的以下文件：
/webapps/geoserver/WEB-INF/web.xml
2. 在 `<web-app>` 标签内添加如下配置：
```xml
<context-param>
    <param-name>GEOSERVER_CSRF_WHITELIST</param-name>
    <param-value>自己的域名</param-value>
</context-param>
```
3. 保存文件后，重启 Tomcat 或 GeoServer 服务，配置即可生效。

