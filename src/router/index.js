import Vue from 'vue'
import Router from 'vue-router'


import index from '@/view/index'
import day from '@/view/day'
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
        title: '萝卜头❤兔子精'
      }
    },
    {
      path: '/day',
      name: 'day',
      component: day,
      meta: {
        title: '历程'
      }
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk,
      meta: {
        title: '撩我'
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
