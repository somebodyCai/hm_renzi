import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router/index.js'
import { getTimeOut } from '@/utils/auth.js'

const checkTimeOut = function() {
  const loginTime = getTimeOut()
  const requestTime = (new Date()).getTime()
  const overTime = 7200 * 1000
  return requestTime - loginTime > overTime
}

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
    if (checkTimeOut()) {
      // console.log(3333)
      store.dispatch('user/logout')
      router.push('/login')
      Message('token已失效，请重新登录！')
      return Promise.reject(new Error('token已失效，请重新登录！'))
    } else {
      config.headers.Authorization = 'Bearer ' + token
    }
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
    if (err.response && err.response.data && err.response.data.code === 10002) {
      store.dispatch('user/logout')
      router.push('/login')
      // Message('token已失效，请重新登录！')
    }
    Message(err.message)
    return Promise.reject(err)
  }
)

export default service

