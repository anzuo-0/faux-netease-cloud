import Axios from '@/axios/service'

export function getCheck (data) {
  return Axios.get('/cellphone/existence/check', { params: { phone: data } })
}
