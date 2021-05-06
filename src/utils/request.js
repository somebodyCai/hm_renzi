import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

// create an axios instance  创建请求实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor 请求拦截器
service.interceptors.request.use(config => {
  const token = store.getters.token

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}, err => {
  console.log(err)
}
)

// response interceptor 响应拦截器
service.interceptors.response.use(
  res => {
    const { success, message, data } = res.data
    if (success) {
      return data
    } else {
      Message(message)
      return Promise.reject(new Error(message))
    }
  }, err => {
    Message(err)
    return Promise.reject(err)
  }
)

export default service

