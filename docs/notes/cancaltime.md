# Canal 同步数据库时区错误

本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

## 问题描述

使用 Canal 同步数据库数据时，数据本身可以正常同步，但时间字段与预期时间不一致，通常表现为相差 8 小时或时区不匹配。

## 解决方法

### 1. 配置 Canal TSDB 时区

在 Canal 的 `properties` 配置文件中增加时区配置：

```properties
canal.instance.tsdb.enable = true
canal.instance.tsdb.timezone = Asia/Shanghai
```

### 2. 配置 JVM 时区

编辑 Canal 启动脚本，例如：

```bash
bin/startup.sh
```

在 `JAVA_OPTS` 中加入：

```bat
-Duser.timezone=Asia/Shanghai
```

### 3. 配置数据库连接时区

如果 Spring Boot 连接 MySQL，也建议在 JDBC URL 中指定时区：

```properties
serverTimezone=Asia/Shanghai
spring.datasource.url=jdbc:mysql://localhost:3306/yourdb?serverTimezone=Asia/Shanghai
```

完成以上配置后，Canal 同步时间字段时区不一致的问题通常可以解决。
