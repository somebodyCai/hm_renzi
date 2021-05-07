import request from '@/utils/request.js'

// 获取部门数据
export const getDepartment = () => {
  return request({
    url: '/company/department'
  })
}
