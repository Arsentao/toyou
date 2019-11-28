import Vue from 'vue'
import Router from 'vue-router'

import index from '@/view/index'
import photo from '@/view/photo'
import talk from '@/view/talk'
import trace from '@/view/trace'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index' 
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '二傻子❤️兔子精'
      }
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk,
      meta: {
        title: ''
      }
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo,
      meta: {
        title: '相册'
      }
    },
    {
      path: '/trace',
      name: 'trace',
      component: trace,
      meta: {
        title: '足迹'
      }
    }
  ]
})
