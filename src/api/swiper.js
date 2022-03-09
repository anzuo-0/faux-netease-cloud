import Axios from '@/axios/service'

export function getBanners () {
  return Axios.get('/banner')
}
