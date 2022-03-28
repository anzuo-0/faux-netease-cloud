import Axios from '@/axios/service'

export function getSongs () {
  return Axios.get('/banner')
}