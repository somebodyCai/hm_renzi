import Cookies from 'js-cookie'

const TokenKey = 'hm_renzi_token'

const timeKey = 'hm_timeout'

// 存取 token
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 存取 时间戳
export function setTimeOut() {
  const date = new Date()
  return Cookies.set(timeKey, date.getTime())
}

export function getTimeOut() {
  return Cookies.get(timeKey)
}

