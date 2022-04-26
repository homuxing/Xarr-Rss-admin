import request from '@/utils/request'

// 获取所有数据源
export function getDataSource() {
  return request({
    url: '/api/v1/sources/get',
    method: 'GET',
  })
}