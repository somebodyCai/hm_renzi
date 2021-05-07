import request from '@/utils/request'

// 用户登录请求
export function login(data) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

// 根据 id 获取用户详情信息
export const getUserDetail = (id) => {
  return request({
    url: '/sys/user/' + id
  })
}
