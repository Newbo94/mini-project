import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Brand from './views/Brand.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/brand',
      name: 'brand',
      component: Brand
  
    }
    ]
})