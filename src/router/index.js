import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '@/views/layout/Page'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: LayoutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
