import Vue from 'vue'
import Router from 'vue-router'

import TopicList from '../components/TopicList.vue'
import ArticlePage from '../components/ArticlePage.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    component: TopicList
  }, {
    path:'/topic/:id',
    name: 'ArticlePage',
    component: ArticlePage
  } 
  ]
})