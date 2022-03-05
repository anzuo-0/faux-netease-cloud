import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '@/views/layout/Page'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: LayoutView
  },
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
    path: '/rank',
    component: LayoutView,
    meta: {
      title: '排行榜'
    },
    children: [{
      path: '/',
      component: () => import('@/views/rank/Rank')
    }]
  },
  {
    path: '/singers',
    component: LayoutView,
    meta: {
      title: '歌手'
    },
    children: [{
      path: '/',
      component: () => import('@/views/singers/Singers')
    }]
  },
  {
    path: '/mymusic',
    component: LayoutView,
    meta: {
      title: '我的音乐'
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
