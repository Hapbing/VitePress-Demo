---
title: Windows 使用 NSSM 以服务方式运行 JAR 包
aside: true
---

# 使用 NSSM 在 Windows 中以服务方式运行 JAR 包

在 Windows 系统中，Java 程序（`.jar` 文件）默认只能通过命令行运行。  
如果希望在系统启动时自动运行，并作为后台服务持续运行，可以使用 **NSSM（Non-Sucking Service Manager）** 工具将 JAR 包注册为系统服务。去避免命令行窗口的留存状态。


##  NSSM 下载

- 已安装 **Java 环境（JDK 或 JRE）**
- 已准备好 `.jar` 可执行包
- 下载 NSSM 网址（需要代理）：[NSSM](https://nssm.cc/download) 
- （无代理下载）提供下载[NSSM](https://happyice.ct.ws/example/nssm-2.24.zip) 


## 安装并配置 NSSM 服务

### 第一步：打开终端（CMD）

使用管理员身份打开命令提示符。

### 第二步：使用 NSSM 安装服务

```sh
nssm install ServiceName
```
`ServiceName`是你注册的名称，可以更改，但一定要避免例如Mysql80以及其他系统名称，避免占用。
执行后会弹出一个图形配置窗口：
![nssm](/nssm/nssm1.png)

### 第三步：在 NSSM 配置窗口中填写内容

#### Application 标签页
- Path：填写你的 `java.exe` 安装路径
- Startup directory：填写你的 `.jar` 所在目录
- Arguments：填写运行参数：
```text
-jar app.jar
```
![nssm](/nssm/nssm2.png)
-  I/O 标签页可以增加日志的输出位置，文件后缀以`.log`结尾。
![nssm](/nssm/nssm3.png)
- 之后点击`Install service`即可。

### 启动服务
在命令行中输入以下命令启动服务：
```sh
nssm start ServiceName
```
或者在Windows系统的服务配置找到该服务点击启动。
![nssm](/nssm/nssm4.png)

### 运行结果
![nssm](/nssm/nssm5.png)

### 其他命令

#### 停止服务
```sh
nssm stop ServiceName
```

#### 编辑服务
```sh
nssm edit ServiceName
```

#### 卸载服务
```sh
nssm remove ServiceName
```

### 如果win系统下运行的Tomcat，该框架其实也是提供了注册服务。

- 进入`tomcat/bin` 目录下有 `service.bat` 文件
- 该目录下打开命令行（CMD）
- 输入以下命令
```sh
service.bat install tomcat8
```
`tomcat8`需要根据版本确定。

类似的关于`geoserver`的启动版本有`.exe` `.war`提供的等启动形式，`.war`本质上是依托的`Tomcat`运行，
通过`Tomcat`的服务形式启动也可以避免命令行窗口的开启。当然也可以通过`nssm`去启动`geoserver`的`exe`文件形式启动。

