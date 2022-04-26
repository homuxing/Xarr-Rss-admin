import request from '@/utils/request'
// 获取所有分组
export function getGroups() {
  return request({
    url: '/api/v1/groups/get',
    method: 'GET'
  })
}
// 获取单个分组
export function getOneGroup(id) {
  return request({
    url: `/api/v1/groups/get/${id}`,
    method: 'GET'
  })
}
// 获取分组下的媒体列表
export function getGroupMedias(id) {
  return request({
    url: `/api/v1/groups/medias/${id}`,
    method: 'GET'
  })
}