<h1 align="center">Vue后台管理系统模板</h1>

这是基于vuecli3.0搭建的后台系统模板，做了Vuex Modules的拆分，实现了开发|测试|生产环境的配置

## 使用

```

npm run dev 调用开发环境api
npm run test 调用测试环境api
npm run build 调用线上环境api

```

## 文件说明
```
├── config 配置文件
├── public
├──src
│   ├── api  登录退出用户信息api
│   ├── assets
│   ├── components 公用组件
│   │     └── HelloWorld.vue
│   ├── router 路由
│   ├── store 数据仓库
│   ├── utils 
│   ├── views 试图模块
│   ├── App.vue
│   ├── main.js
├── vue.config.js webpack配置
```
