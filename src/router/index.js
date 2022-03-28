import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '@/views/layout/Page'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: '/',
        redirect: '/findmusic'
      }
    ]
  },
  // {
  //   path: '/',
  //   redirect: '/findmusic'
  // },
  {
    path: '/findmusic',
    component: LayoutView,
    meta: {
      title: '发现音乐'
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/home/FindMusic')
      }
    ]
  },
  {
    path: '/rank',
    component: LayoutView,
    meta: {
      title: '音乐排行榜'
    },
    children: [{
      path: '/',
      component: () => import('@/views/rank/Rank')
    }]
  },
  {
    path: '/songmenu',
    component: LayoutView,
    meta: {
      title: '歌单'
    },
    children: [{
      path: '/',
      component: () => import('@/views/songmenus/SongMenus')
    }]
  },
  {
    path: '/mymusic',
    component: LayoutView,
    meta: {
      title: '收藏音乐'
    },
    children: [{
      path: '/',
      component: () => import('@/views/mymusic/MyMusic')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
