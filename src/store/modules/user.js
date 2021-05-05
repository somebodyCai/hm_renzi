import { login } from '@/api/user.js'
import { setToken, getToken } from '@/utils/auth.js'
const state = {
  token: getToken()
}
const mutations = {
  setToken(state, data) {
    setToken(data)
    state.token = data
  },
  removeToken(state) {
    state.token = null
  }
}
const actions = {
  async login(store, data) {
    try {
      const res = await login(data)
      console.log(res)
      store.commit('setToken', res)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  state, mutations, actions,
  namespaced: true
}
