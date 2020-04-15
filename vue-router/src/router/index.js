import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import H1 from '@/components/H1'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode: 'history',  //设置路径的表现方式
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
    },
    {
      path: '*',
      component: Error
    }
  ]
})