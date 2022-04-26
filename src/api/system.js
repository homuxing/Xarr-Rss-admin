import request from '@/utils/request'

// 获取系统配置
export function getSystemSetting() {
  return request({
    url: '/api/v1/service/get',
    method: 'GET'
  })
}
// 保存系统配置
export function saveSystemSetting() {
  return request({
    url: '/api/v1/service/save',
    method: 'POST'
  })
}