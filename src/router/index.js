import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '@/views/layout/Page'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: LayoutView
  },
  // {
  //   path: '/findMusic',
  //   component: LayoutView,
  //   meta: {
  //     title: '发现音乐',
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/FindMusic'),
  //     },
  //   ],
  // },
  // {
  //   path: '/myMusic',
  //   component: LayoutView,
  //   meta: {
  //     title: '我的音乐',
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/MyMusic'),
  //     },
  //   ],
  // },
  // {
  //   path: '/rank',
  //   component: LayoutView,
  //   meta: {
  //     title: '音乐排行榜',
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('@/views/Rank'),
  //     },
  //   ],
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
