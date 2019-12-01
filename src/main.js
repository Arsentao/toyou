// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';


Vue.use(Vant).use(Dialog)
axios.defaults.withCredentials = true;
Vue.use(VueWechatTitle)
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false
// 挂载全局


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
