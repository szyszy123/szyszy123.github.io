import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Week from '@/components/Week'
import Classification from '@/components/Classification'
import Hot from '@/components/Hot'
import Info from '@/components/Info'
import Details from '@/components/Details'
import Userinfo from '@/components/Userinfo'
import Setup from '@/components/Setup'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Forget from '@/components/Forget'
import Myorder from '@/components/Myorder'
import Personage from '@/components/Personage'
import Allorder from '@/components/Allorder'
import Aporder from '@/components/Aporder'
import Woorder from '@/components/Woorder'
import Voucher from '@/components/Voucher'
import Sysmessages from '@/components/Sysmessages'
import Myfooter from '@/components/Myfooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta:{navShow:true}
    },
    {
      // ->本周必逛
      path: '/week',
      component: Week,
      meta:{navShow:false}
    },
    {
      // ->分类
      path: '/classification',
      component: Classification,
      meta:{navShow:false}
    },
    {
      // ->热门搜索
      path: '/hot',
      component: Hot,
      meta:{navShow:false}
    },
    {
      // ->商品信息
      path:'/info/:goodsID',
      name:'info',
      component: Info,
      meta:{navShow:false}
    },
    {
      // ->商品详情
      path:'/details/:goodsID',
      name:'details',
      component: Details,
      meta:{navShow:false}
    },
    {
      path: '/userinfo',
      name: 'userinfoname',
      component: Userinfo,
      meta:{navShow:true}
    },
    {
      path: '/setup',
      component: Setup
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/forget',
      component: Forget
    },
    {
      path: '/myorder/:selected1/:id1',
      name:"myorder",
      component: Myorder
    },
    {
      path: '/personage',
      component: Personage
    },
    {
      path: '/allorder',
      component: Allorder
    },
    {
      path: '/aporder',
      component: Aporder
    },
    {
      path: '/woorder',
      component: Woorder
    },
    {
      path: '/voucher',
      component: Voucher
    },
    {
      path: '/sysmessages',
      component: Sysmessages
    },
    {
      path: '/myfooter',
      component: Myfooter
    }
  ]
})
