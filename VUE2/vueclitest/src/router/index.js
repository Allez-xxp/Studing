import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import HelloWorld from '@/components/HelloWorld'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'HelloWorld',     //路由名称，
      component: HelloWorld      //对应的组件模板
           
    },
    {
      path: '/Hi',
      
      component: Hi,
      children: [
        {
          path:'/',
          name: 'Hi',
          component: Hi
        },
        {
          path:'H1',
          name: 'H1',
          component: H1
        },
        {
          path:'H2',
          name: 'H2',
          component: H2
        },
      ]
    }
  ]
})
