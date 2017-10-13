import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import store from './store'
// import axios from 'axios' // 在这儿引入不是全局的？
import App from './App.vue'

Vue.use(ElementUI)
// Vue.use(axios)

new Vue({
  el: '#app',
  router, //通过router配置参数注入路由，从而使整个应用都有路由功能
  store,  // 同理，注入store
  render: h => h(App)
})
