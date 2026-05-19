---
title: GeoServer 使用 Nginx 代理 HTTPS 后请求 400
aside: true
---

# GeoServer 使用 Nginx 代理 HTTPS 后请求 400

在使用 Nginx 反向代理 GeoServer 的 HTTPS 服务时，登录操作可能出现 **400 Bad Request**，导致账号无法登录或页面请求异常。

## 问题现象

- 登录页面提交后提示 **400 Bad Request**。
- 浏览器控制台中部分请求被拦截或被 Nginx 拒绝。
- GeoServer 后台日志没有明显错误，因为请求可能还没有进入 GeoServer。

## 原因分析

GeoServer 某些版本会对跨站请求进行 CSRF 校验。使用 Nginx 代理 HTTPS 后，如果代理域名没有加入 GeoServer 的 CSRF 白名单，就可能被 GeoServer 拒绝。

## 解决方法

在 GeoServer 的 `web.xml` 中添加 CSRF 白名单配置，允许指定域名的请求。

### 操作步骤

1. 打开 GeoServer 部署目录中的文件：

```text
webapps/geoserver/WEB-INF/web.xml
```

2. 在 `<web-app>` 标签内添加配置：

```xml
<context-param>
  <param-name>GEOSERVER_CSRF_WHITELIST</param-name>
  <param-value>your-domain.com</param-value>
</context-param>
```

3. 保存文件后，重启 Tomcat 或 GeoServer 服务。

::: tip
`your-domain.com` 需要替换成你实际使用的访问域名。如果有多个域名，可以根据 GeoServer 版本支持的格式进行配置。
:::
