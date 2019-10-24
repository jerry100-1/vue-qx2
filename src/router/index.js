import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import Authorize from '@/pages/Authorize'
import My from '@/pages/My'
import Qx from '@/pages/Qx'


Vue.use(Router)
Vue.use(require('vue-wechat-title'))

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Qx',
      redirect: '/qx',
      component: Qx,
      meta: { title: '亲信首页' }
      // children: [
      //   { path: 'home', name: 'Home', component: Home, meta: { title: '测测运势' }},
      //   { path: 'my', name: 'My', component: My, meta: { title: '我的' }}
      // ]
    },
    { path: '/authorize', name: 'Authorize', component: Authorize, meta: { title: '授权登录' }},
    { path: '/qx', name: 'Qx', component: Qx, meta: { title: '亲信页面' }}

  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? { x: savedPosition.x, y: savedPosition.y } : { x: 0, y: 0 }
  }
})
