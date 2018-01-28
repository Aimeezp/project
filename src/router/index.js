import Vue from 'vue'
import Router from 'vue-router'
import Inde from '@/components/Inde'
import html from '@/components/Html'
import css from '@/components/Css'

//import Login from '../views/Login.vue'
import Main from '../views/Mains.vue'
Vue.use(Router)

export default new Router({
  routes: [

    // {
    //   path: '/',
    //   component:Login
    // },
    {
      path: '/',
      redirect:'inde',
      component:Main,
      children:[
        {
          path: '/inde',
          name: '首页',
          component: Inde,
        },
        {
          path: '/html',
          name: 'html',
          component: html
        },
        {
          path: '/css',
          name: 'css',
          component: css
        },
      ]
    },

  ]
})
