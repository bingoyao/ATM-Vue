## 软件工程项目报告
### 项目介绍[WHAT❓]
使用web技术重新实现了ATM Example的功能，同时增加了修改密码（模拟）、申请贷款等功能。打包后的文件直接托管在Github Pages上，可以不用安装[直接访问]()，或者下载到[本地运行]()。

#### 使用说明[❗❗]
1. 下载文件(运行ATM会用到)
 ***[card.txt](./public/card.txt)*** : 银行卡🎫
 ***[money.txt](./public/money.txt)*** : 现金💵
2. 应用启动后是不可用状态，点击⚙进入配置界面，然后输入放入ATM的可取现金额，点击确定，ATM进入可用状态。[操作员]
3. 在可用状态界面，再次点击⚙将关闭ATM，点击📄可查看系统日志。[操作员]
4. 在可用状态界面，移动鼠标将出现读卡区，将卡片文件card.txt拖入读卡区，进入登入界面，输入正确的PIN码进入事务界面。[客户]
5. 在事务选择界面可进行不同事务，可点击右侧退卡来登出ATM。


### 实现工具[HOW❗]
#### 环境
开发：Visual Studio Code
部署：Github Pages

#### 框架/工具
* Vue-CLI 3.x ：生成项目骨架，编译、打包等
* Vue 2.x ：做数据绑定用
* Vue Router ：方便管理页面
* Vuex ：使数据和界面分离，更易管理
* Element UI ：美观的组件
* Git ：版本控制
* Github ：代码托管、持续部署

*使用Vue-CLI安装Vuex和VueRouter时，出现问题，这里是手动配置的*
### 开发
#### 克隆仓库后使用以下命令安装依赖
```
npm install
```

#### 启动开发服务器
```
npm run serve
```

#### 构建可部署版本
```
npm run build
```

#### 修正文件格式和错误
```
npm run lint
```

### 打包为桌面应用(windows) 详见[nativefier文档](https://github.com/jiahaog/nativefier/blob/master/docs/api.md)
#### 全局安装打包程序
```
npm install -g nativefier
```

#### 以管理员身份启动命令行

#### 打包到当前目录
```
nativefier "https://bingoyao.github.io/ATM-Vue/#/"
```


### 进度
 - [x] 账户查询
 - [x] 存款
 - [x] 取款
 - [x] 转账
 - [x] 贷款
 - [x] 还款
 - [x] 改PIN
 - [x] ATM配置
 - [ ] 单元测试