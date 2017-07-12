import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
// import axios from 'axios' // 在这儿引入不是全局的？
import App from './App.vue'

Vue.use(ElementUI)
// Vue.use(axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
