import { login, getUserInfo, getUserDetail } from '@/api/user.js'
import { setToken, getToken, removeToken, setTimeOut } from '@/utils/auth.js'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, data) {
    setToken(data)
    state.token = data
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, data) {
    state.userInfo = { ...data }
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(store, data) {
    try {
      const res = await login(data)
      // console.log(res)
      store.commit('setToken', res)
      setTimeOut()
    } catch (error) {
      console.log(error)
    }
  },
  async getUserInfo(store) {
    // 获取用户基本信息
    const userInfo = await getUserInfo()
    // 获取详情信息
    const userDetail = await getUserDetail(userInfo.userId)
    // 拼接用户信息
    const data = { ...userInfo, ...userDetail }
    // console.log(data)
    // 调用 mutation 修改用户信息
    store.commit('setUserInfo', data)
  },
  logout(store) {
    store.commit('removeToken')
    store.commit('removeUserInfo')
  }
}

export default {
  state, mutations, actions,
  namespaced: true
}
