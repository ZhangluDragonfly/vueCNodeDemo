## 页面展示
https://zhangludragonfly.github.io/vueCNodeDemo/

目前该项目包含话题列表页，文章页和个人主页，及页面间的相互跳转。

## 技术栈

 - webpack 2.4.2
 - Vue + vue-loader + vue-router
 - element-ui
 - axios
 - font-awesome

## 目录介绍

```
  ├── dist
  ├── docs
  ├── node_modules						# 依赖
  ├── src
  │   ├── assets                    	# svg和引入的CSS文件等资源
  │   │   ├── cnodejs.svg
  │   │   └── markdown-github.css
  │   ├── components                	# 页面组件
  │   │   ├── ArticlePage.vue
  │   │   ├── NavBar.vue
  │   │   ├── TopicList.vue
  │   │   ├── UserCom.vue
  │   │   └── UserPage.js
  │   ├── helpers                       # 工具方法
  │   │   └── filter.js 
  │   ├── router                        # 路由管理
  │   │   └── index.js
  │   ├── App.vue
  │   ├── index.html
  │   └── main.js  						# 项目入口
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
