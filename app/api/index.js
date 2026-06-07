import { get, post, put, del, upload } from '~/composables/useHttp'

/**
 * API 接口管理
 * 统一管理所有后端接口
 */

// ==================== 用户相关 ====================

/**
 * 用户登录
 * @param {object} data - { username, password }
 */
export const login = (data) => post('/api/user/login', data)

/**
 * 用户注册
 * @param {object} data - { username, password, email }
 */
export const register = (data) => post('/api/user/register', data)

/**
 * 获取用户信息
 */
export const getUserInfo = () => get('/api/user/info')

/**
 * 更新用户信息
 * @param {object} data - 用户信息
 */
export const updateUserInfo = (data) => put('/api/user/info', data)

/**
 * 修改密码
 * @param {object} data - { oldPassword, newPassword }
 */
export const changePassword = (data) => post('/api/user/change-password', data)

// ==================== 示例业务接口 ====================

/**
 * 获取列表数据
 * @param {object} params - { page, size, keyword }
 */
export const getList = (params) => get('/api/list', params)

/**
 * 获取详情
 * @param {number} id - 详情ID
 */
export const getDetail = (id) => get(`/api/detail/${id}`)

/**
 * 创建数据
 * @param {object} data - 数据内容
 */
export const createItem = (data) => post('/api/item', data)

/**
 * 更新数据
 * @param {number} id - 数据ID
 * @param {object} data - 更新内容
 */
export const updateItem = (id, data) => put(`/api/item/${id}`, data)

/**
 * 删除数据
 * @param {number} id - 数据ID
 */
export const deleteItem = (id) => del(`/api/item/${id}`, { id })

// ==================== 文件相关 ====================

/**
 * 上传文件
 * @param {FormData} formData - 文件表单数据
 */
export const uploadFile = (formData) => upload('/api/file/upload', formData)

/**
 * 批量上传文件
 * @param {FormData} formData - 多文件表单数据
 */
export const uploadFiles = (formData) => upload('/api/file/upload-batch', formData)

/**
 * 下载文件
 * @param {number} fileId - 文件ID
 * @param {string} filename - 文件名
 */
export const downloadFile = (fileId, filename) => {
  const { download } = require('~/composables/useHttp')
  return download(`/api/file/download/${fileId}`, {}, filename)
}

// ==================== 导出所有 API ====================

export default {
  // 用户
  login,
  register,
  getUserInfo,
  updateUserInfo,
  changePassword,
  // 业务
  getList,
  getDetail,
  createItem,
  updateItem,
  deleteItem,
  // 文件
  uploadFile,
  uploadFiles,
  downloadFile
}
