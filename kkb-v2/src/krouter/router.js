import Vue from 'vue'
import VueRouter from './vue-krouter';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home/home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../pages/list/list.vue')
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: '#',
  base: process.env.BASE_URL,
  routes
})

export default router
