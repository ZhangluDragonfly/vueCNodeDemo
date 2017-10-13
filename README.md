## 页面展示
https://zhangludragonfly.github.io/vueCNodeDemo/

目前该项目包含话题列表页，文章页和个人主页，及页面间的相互跳转。

## 技术栈

 - webpack 2.4.2
 - Vue + vue-loader + vue-router + vuex
 - element-ui
 - axios
 - font-awesome

## 目录介绍

```
  ├── dist
  ├── docs
  ├── node_modules						      # 依赖
  ├── src                           # 源码目录
  │   ├── api                         # 模拟前后端交互
  │   │   ├── topics.js
  │   │   └── user.js
  │   ├── assets                    	# svg和引入的CSS文件等资源
  │   │   ├── cnodejs.svg
  │   │   └── markdown-github.css
  │   ├── components                	# 公共组件
  │   │   ├── ArticlePage.vue
  │   │   ├── NavBar.vue
  │   │   ├── TopicList.vue
  │   │   ├── UserCom.vue
  │   │   └── UserPage.js
  │   ├── helpers                      # 公共方法
  │   │   └── filter.js 
  │   ├── router                       # 路由
  │   │   └── index.js
  │   ├── store                        # 应用级数据（state）
  │   │   ├── modules                    # 模块
  │   │   │   ├── topics.js
  │   │   │   └── user.js
  │   │   ├── actions.js                 # actions
  │   │   ├── index.js                   # 状态单一树根
  │   │   └── mutation-types.js          # mutation类型变量
  │   ├── App.vue                      # 根组件
  │   ├── index.html                   # 入口页面
  │   └── main.js  						         # 入口文件
  ├── .babelrc
  ├── .gitignore
  ├── Makefile
  ├── package.json
  ├── postcss.config.js
  ├── README.md
  ├── webpage.config.js
  └── yarn.lock
      
```
 
## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
npm install
```

## Develop

``` bash
# serve with hot reload at localhost:8010
npm run dev
```

## Build

``` bash
# build for production with minification
npm run build
```
