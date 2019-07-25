import Vue from 'vue'
import Router from 'vue-router'
import Manage from './views/Manage.vue'
import Home from './views/Home.vue'
import Customer from './views/Customer.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: Customer
    }
  ]
})
