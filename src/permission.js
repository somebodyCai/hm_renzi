import router from '@/router/index.js'

import store from '@/store/index.js'

// 设置导航守卫
router.beforeEach((to, from, next) => {
  const path = to.path
  const token = store.getters.token
  const whiteList = ['/login', '/404']
  //   token存在 且去登陆页面
  if (token && path === '/login') {
    next('/')
  }

  //   有token 不是去登陆页面，放行
  if (token && path !== '/login') {
    // console.log(store.state.user.userInfo)
    if (!store.state.user.userId) {
      // console.log(store.user)
      store.dispatch('user/getUserInfo')
    }
    // if(store)
    next()
  }

  // 无 token 去登录页面 放行
  if (!token && whiteList.includes(path)) {
    next()
  }
  //   无 token 不是去登陆页面 ,导到登录页面
  if (!token && path !== '/login') {
    next('/login')
  }
})
