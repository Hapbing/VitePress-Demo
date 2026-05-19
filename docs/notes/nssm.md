---
title: Windows 使用 NSSM 以服务方式运行 JAR 包
aside: true
---

# Windows 使用 NSSM 以服务方式运行 JAR 包

在 Windows 系统中，Java 程序通常通过命令行运行。如果希望系统启动时自动运行，并作为后台服务持续运行，可以使用 **NSSM（Non-Sucking Service Manager）** 将 JAR 包注册为 Windows 服务。

## 准备工作

- 已安装 Java 环境，例如 JDK 或 JRE。
- 已准备好可执行的 `.jar` 文件。
- 下载 NSSM：[官方下载](https://nssm.cc/download)。
- 无法访问官网时，可使用备用下载：[nssm-2.24.zip](https://happyice.ct.ws/example/nssm-2.24.zip)。

## 安装并配置 NSSM 服务

### 1. 以管理员身份打开 CMD

使用管理员权限打开命令提示符，进入 NSSM 所在目录。

### 2. 安装服务

```sh
nssm install ServiceName
```

`ServiceName` 是要注册的服务名称，可以自定义，但建议避免使用 `Mysql80` 等已被系统或其他软件占用的服务名。

执行后会弹出图形化配置窗口：

![NSSM 安装窗口](/nssm/nssm1.png)

### 3. 配置 Application 选项

在 `Application` 标签页中填写：

- `Path`：填写 `java.exe` 的安装路径。
- `Startup directory`：填写 `.jar` 文件所在目录。
- `Arguments`：填写启动参数。

```text
-jar app.jar
```

![NSSM Application 配置](/nssm/nssm2.png)

### 4. 配置日志输出

在 `I/O` 标签页中可以配置日志输出路径，建议文件后缀使用 `.log`。

![NSSM 日志配置](/nssm/nssm3.png)

配置完成后点击 `Install service` 即可安装服务。

## 启动服务

在命令行中启动服务：

```sh
nssm start ServiceName
```

也可以在 Windows 服务管理器中找到该服务并点击启动。

![Windows 服务列表](/nssm/nssm4.png)

## 运行结果

![NSSM 运行结果](/nssm/nssm5.png)

## 常用命令

### 停止服务

```sh
nssm stop ServiceName
```

### 编辑服务

```sh
nssm edit ServiceName
```

### 卸载服务

```sh
nssm remove ServiceName
```

## Tomcat 服务补充

如果是 Windows 下运行 Tomcat，也可以使用 Tomcat 自带的服务脚本：

1. 进入 `tomcat/bin` 目录。
2. 在该目录打开 CMD。
3. 执行：

```sh
service.bat install tomcat8
```

`tomcat8` 需要根据实际 Tomcat 版本调整。

GeoServer 的 `.war` 形式本质上依赖 Tomcat 运行，因此也可以通过注册 Tomcat 服务来实现后台运行。对于 `.exe` 形式的 GeoServer，也可以使用 NSSM 注册为 Windows 服务。
