import axios from 'axios'

/**
 * Nuxt 4 Axios 封装
 * 支持 SSR、请求拦截、响应拦截、错误处理
 */

// 创建 axios 实例
const createAxiosInstance = () => {
  const config = {
    baseURL: useRuntimeConfig().public.apiBase || 'http://10.102.129.12:18088',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const instance = axios.create(config)

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // SSR 和 CSR 环境下获取 token
      const token = useToken()
      if (token.value) {
        config.headers.Authorization = `Bearer ${token.value}`
      }

      // 添加请求时间戳（可选，用于防止缓存）
      if (config.method === 'get') {
        config.params = {
          ...config.params,
          _t: Date.now()
        }
      }

      return config
    },
    (error) => {
      console.error('请求错误:', error)
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      const { data, status } = response

      // 根据后端返回的数据结构处理
      // 假设后端返回格式: { code, data, message }
      if (data.code === 200 || data.code === 0) {
        return data.data !== undefined ? data.data : data
      }

      // 业务错误处理
      ElMessage.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    },
    (error) => {
      const { response } = error

      if (response) {
        // HTTP 状态码处理
        switch (response.status) {
          case 400:
            ElMessage.error('请求参数错误')
            break
          case 401:
            ElMessage.error('未授权，请重新登录')
            // 清除 token 并跳转到登录页
            const token = useToken()
            token.value = ''
            navigateTo('/login')
            break
          case 403:
            ElMessage.error('拒绝访问')
            break
          case 404:
            ElMessage.error('请求资源不存在')
            break
          case 500:
            ElMessage.error('服务器内部错误')
            break
          case 502:
            ElMessage.error('网关错误')
            break
          case 503:
            ElMessage.error('服务不可用')
            break
          case 504:
            ElMessage.error('网关超时')
            break
          default:
            ElMessage.error(error.message || '请求失败')
        }
      } else if (error.code === 'ECONNABORTED') {
        ElMessage.error('请求超时，请稍后重试')
      } else if (error.message === 'Network Error') {
        ElMessage.error('网络错误，请检查网络连接')
      } else {
        ElMessage.error('请求失败，请稍后重试')
      }

      console.error('响应错误:', error)
      return Promise.reject(error)
    }
  )

  return instance
}

// 单例模式
let axiosInstance = null

const getAxiosInstance = () => {
  if (!axiosInstance) {
    axiosInstance = createAxiosInstance()
  }
  return axiosInstance
}

/**
 * GET 请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {object} config - axios 配置
 * @returns {Promise}
 */
export const get = (url, params = {}, config = {}) => {
  return getAxiosInstance().get(url, { params, ...config })
}

/**
 * POST 请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求数据
 * @param {object} config - axios 配置
 * @returns {Promise}
 */
export const post = (url, data = {}, config = {}) => {
  return getAxiosInstance().post(url, data, config)
}

/**
 * PUT 请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求数据
 * @param {object} config - axios 配置
 * @returns {Promise}
 */
export const put = (url, data = {}, config = {}) => {
  return getAxiosInstance().put(url, data, config)
}

/**
 * DELETE 请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {object} config - axios 配置
 * @returns {Promise}
 */
export const del = (url, params = {}, config = {}) => {
  return getAxiosInstance().delete(url, { params, ...config })
}

/**
 * 文件上传
 * @param {string} url - 上传地址
 * @param {FormData} formData - 表单数据
 * @param {object} config - axios 配置
 * @returns {Promise}
 */
export const upload = (url, formData, config = {}) => {
  return getAxiosInstance().post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    ...config
  })
}

/**
 * 文件下载
 * @param {string} url - 下载地址
 * @param {object} params - 请求参数
 * @param {string} filename - 文件名
 * @returns {Promise}
 */
export const download = async (url, params = {}, filename = 'file') => {
  try {
    const response = await getAxiosInstance().get(url, {
      params,
      responseType: 'blob'
    })

    // 创建下载链接
    const blob = new Blob([response.data])
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(downloadUrl)

    ElMessage.success('下载成功')
    return response
  } catch (error) {
    ElMessage.error('下载失败')
    throw error
  }
}

/**
 * 批量请求
 * @param {Array} requests - 请求数组
 * @returns {Promise<Array>}
 */
export const all = (requests) => {
  return Promise.all(requests)
}

// 默认导出
export default {
  get,
  post,
  put,
  del,
  upload,
  download,
  all,
  instance: getAxiosInstance
}
