# 踩坑日记
本站总访问量 <span id="busuanzi_value_site_pv" /> 次<br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次
## 关于使用cancal同步数据库数据时区错误问题

使用canal进行数据库数据同步数据正确但时间字段时间对不上，需要配置cancal的`properties`文件中增加时区配置
### 解决方法
```properties
canal.instance.tsdb.enable = true
canal.instance.tsdb.timezone = Asia/Shanghai
```
同时 Canal 启动参数设置 JVM 时区，编辑bat启动文件
```bash
bin/startup.sh
```
在 `JAVA_OPTS` 中加入：
```bat
-Duser.timezone=Asia/Shanghai
```
使用spring boot 连接数据库JDBC URL配置
```properties
serverTimezone=Asia/Shanghai
# 例如
spring.datasource.url=jdbc:mysql://localhost:3306/yourdb?serverTimezone=Asia/Shanghai
```
增加以上配置即可解决使用cancl时区不同步问题。