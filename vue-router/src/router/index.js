import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import H1 from '@/components/H1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
     
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: params
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/H1',
      component: H1,
      alias: '/Allez'
    }
  ]
})