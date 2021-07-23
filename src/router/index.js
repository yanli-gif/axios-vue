import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/2-2',
    name:'axios2-2',
    component:()=>import('../views/2-2.vue')
  },
  {
    path:'/2-3',
    name:'axios2-3',
    component:()=>import('../views/2-3.vue')

  },
  {
    path:'/3-1',
    name:'axios3-1',
    component:()=>import('../views/3-1.vue')

  },
  {
    path:'/ContactList',
    name:'ContactList',
    component:()=>import('../views/ContactList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
