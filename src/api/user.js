import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export const getUserDetail = (id) => {
  return request({
    url: '/sys/user/' + id
  })
}
