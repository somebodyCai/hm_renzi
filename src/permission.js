import router from '@/router/index.js'

import store from '@/store/index.js'

router.beforeEach((to, from, next) => {
  const path = to.path
  const token = store.getters.token
  //   token存在 且去登陆页面
  if (token && path === '/login') {
    next('/')
  }

  //   有token 不是去登陆页面，放行
  if (token && path !== '/login') {
    next()
  }
  // 无 token 去登录页面 放行
  if (!token && path === '/login') {
    next()
  }
  //   无 token 不是去登陆页面 ,导到登录页面
  if (!token && path !== '/login') {
    next('/login')
  }
})
