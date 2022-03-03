import axios from 'axios'
// import { Loading } from 'element-ui'
// import store from '@/store'

// 创建一个 axios 对象
const instance = axios.create({
  // 根路径
  baseURL: 'http://localhost:3000',
  // 请求时间
  timeout: 5000
})
instance.interceptors.request.use(config => {
  // Vue.prototype.$loading.loadingShow();  // 显示加载动画
  return config
})

instance.interceptors.response.use(config => {
  // Vue.prototype.$loading.loadingNo();  // 隐藏动画
  return config
})
// 返回 实例对象
export default instance
