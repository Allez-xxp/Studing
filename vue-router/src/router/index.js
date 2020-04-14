import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:HelloWorld,
        left:H1,
        right:H2
      }
    },{
      path: '/Hi',
      components: {
        default:HelloWorld,
        left:H2,
        right:H1
      }
    }

  ]
})