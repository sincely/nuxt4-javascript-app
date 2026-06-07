# HTTP 请求封装使用指南

## 📦 概述

基于 Axios 为 Nuxt 4 项目封装的 HTTP 请求工具,完全支持 SSR 和 CSR 环境。

## ✨ 特性

- ✅ **SSR 友好** - 完美支持服务端渲染和客户端渲染
- ✅ **自动拦截** - 请求/响应自动拦截处理
- ✅ **Token 管理** - 自动携带和刷新 Token
- ✅ **错误处理** - 统一的错误提示和处理机制
- ✅ **TypeScript 友好** - 完整的 JSDoc 注释
- ✅ **API 统一管理** - 集中管理所有接口

## 📁 文件结构

```
app/
├── composables/
│   └── useHttp.js          # HTTP 请求封装
├── api/
│   └── index.js            # API 接口管理
└── pages/
    └── examples/
        └── http-demo.vue   # 使用示例
```

## 🚀 快速开始

### 1. 基础使用

```vue
<script setup>
import { get, post } from '~/composables/useHttp'

// GET 请求
const getData = async () => {
  try {
    const data = await get('/api/data')
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

// POST 请求
const postData = async () => {
  try {
    const result = await post('/api/data', { name: 'test' })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
</script>
```

### 2. 使用 API 模块(推荐)

```vue
<script setup>
import { getUserInfo, getList } from '~/api/index.js'

const fetchUser = async () => {
  try {
    const user = await getUserInfo()
    console.log(user)
  } catch (error) {
    console.error(error)
  }
}
</script>
```

## 📖 API 文档

### 请求方法

#### `get(url, params?, config?)`

```javascript
// 基础用法
const data = await get('/api/users')

// 带参数
const data = await get('/api/users', { page: 1, size: 10 })

// 自定义配置
const data = await get(
  '/api/users',
  { page: 1 },
  {
    timeout: 5000,
    headers: { 'Custom-Header': 'value' }
  }
)
```

#### `post(url, data?, config?)`

```javascript
// 提交数据
const result = await post('/api/users', {
  name: '张三',
  email: 'zhangsan@example.com'
})

// 带自定义配置
const result = await post('/api/users', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
```

#### `put(url, data?, config?)`

```javascript
// 更新数据
const result = await put('/api/users/1', {
  name: '李四'
})
```

#### `del(url, params?, config?)`

```javascript
// 删除数据
const result = await del('/api/users/1', { id: 1 })
```

#### `upload(url, formData, config?)`

```vue
<template>
  <el-upload :http-request="handleUpload">
    <el-button>上传文件</el-button>
  </el-upload>
</template>

<script setup>
import { upload } from '~/composables/useHttp'

const handleUpload = async ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    const result = await upload('/api/upload', formData)
    ElMessage.success('上传成功')
  } catch (error) {
    console.error(error)
  }
}
</script>
```

#### `download(url, params?, filename?)`

```javascript
import { download } from '~/composables/useHttp'

// 下载文件
await download('/api/export', { type: 'excel' }, '数据报表.xlsx')
```

#### `all(requests)`

```javascript
import { all, get } from '~/composables/useHttp'

// 并行请求
const [users, posts] = await all([get('/api/users'), get('/api/posts')])
```

## 🔧 配置说明

### 环境变量

在 `.env.production` 中配置 API 地址:

```bash
NUXT_APP_API_ROOT=https://api.example.com
```

### 运行时配置

在 `nuxt.config.js` 中配置:

```javascript
runtimeConfig: {
  public: {
    apiBase: process.env.NUXT_APP_API_ROOT || 'http://10.102.129.12:18088'
  }
}
```

## 📝 API 管理

### 添加新接口

在 `app/api/index.js` 中添加:

```javascript
// 用户相关
export const login = (data) => post('/api/user/login', data)
export const register = (data) => post('/api/user/register', data)
export const getUserInfo = () => get('/api/user/info')

// 业务相关
export const getProducts = (params) => get('/api/products', params)
export const createProduct = (data) => post('/api/products', data)
```

### 按模块拆分

当接口较多时,可以按模块拆分:

```
app/api/
├── index.js          # 统一导出
├── user.js           # 用户相关
├── product.js        # 产品相关
└── order.js          # 订单相关
```

**app/api/user.js:**

```javascript
import { get, post, put } from '~/composables/useHttp'

export const login = (data) => post('/api/user/login', data)
export const getUserInfo = () => get('/api/user/info')
export const updateUserInfo = (data) => put('/api/user/info', data)
```

**app/api/index.js:**

```javascript
export * from './user'
export * from './product'
export * from './order'
```

## 🎯 最佳实践

### 1. 页面中使用

```vue
<template>
  <div v-loading="loading">
    <el-table :data="list">
      <el-table-column prop="name" label="名称" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getList } from '~/api/index.js'

const loading = ref(false)
const list = ref([])

const fetchData = async () => {
  loading.value = true
  try {
    list.value = await getList({ page: 1, size: 10 })
  } catch (error) {
    // 错误已在 useHttp 中统一处理
    console.error('获取列表失败:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
```

### 2. 表单提交

```vue
<template>
  <el-form :model="form" @submit.prevent="handleSubmit">
    <el-form-item label="名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-button type="primary" @click="handleSubmit" :loading="loading">提交</el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { createItem } from '~/api/index.js'

const loading = ref(false)
const form = ref({ name: '' })

const handleSubmit = async () => {
  loading.value = true
  try {
    await createItem(form.value)
    ElMessage.success('提交成功')
    form.value = { name: '' }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
```

### 3. 批量请求

```vue
<script setup>
import { all } from '~/composables/useHttp'
import { getUserInfo, getOrders } from '~/api/index.js'

const fetchAll = async () => {
  try {
    const [user, orders] = await all([getUserInfo(), getOrders()])
    console.log('用户:', user)
    console.log('订单:', orders)
  } catch (error) {
    console.error(error)
  }
}
</script>
```

## 🔐 Token 管理

自动处理 Token:

1. **请求时自动携带** - 从 Cookie 读取并添加到 Authorization 头
2. **401 自动跳转** - 收到 401 响应时清除 Token 并跳转登录页

```javascript
// useToken.js 自动管理
const token = useToken()

// 设置 Token
token.value = 'your-token-here'

// 清除 Token
token.value = ''
```

## ⚠️ 错误处理

所有 HTTP 错误都会自动处理并提示:

| 状态码   | 提示消息                | 行为              |
| -------- | ----------------------- | ----------------- |
| 400      | 请求参数错误            | -                 |
| 401      | 未授权,请重新登录       | 清除 Token 并跳转 |
| 403      | 拒绝访问                | -                 |
| 404      | 请求资源不存在          | -                 |
| 500      | 服务器内部错误          | -                 |
| 502      | 网关错误                | -                 |
| 503      | 服务不可用              | -                 |
| 504      | 网关超时                | -                 |
| 超时     | 请求超时,请稍后重试     | -                 |
| 网络错误 | 网络错误,请检查网络连接 | -                 |

## 🎨 高级用法

### 自定义拦截器

如需自定义拦截器逻辑,可修改 `useHttp.js`:

```javascript
// 添加自定义请求头
instance.interceptors.request.use((config) => {
  config.headers['X-Custom-Header'] = 'value'
  return config
})

// 自定义响应处理
instance.interceptors.response.use(
  (response) => {
    // 自定义逻辑
    return response.data
  },
  (error) => {
    // 自定义错误处理
    return Promise.reject(error)
  }
)
```

### 请求重试

```javascript
import { post } from '~/composables/useHttp'

const fetchWithRetry = async (url, data, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await post(url, data)
    } catch (error) {
      if (i === retries - 1) throw error
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}
```

## 📌 注意事项

1. **自动导入** - `useHttp.js` 中的方法会被 Nuxt 自动导入,无需手动 import
2. **SSR 支持** - 在 SSR 环境下,Token 会从 Cookie 中正确读取
3. **错误处理** - 默认错误提示使用 Element Plus 的 ElMessage
4. ** baseURL ** - 在环境变量中配置,不同环境使用不同地址

## 🔗 相关资源

- [Axios 官方文档](https://axios-http.com/)
- [Nuxt 请求处理](https://nuxt.com/docs/guide/recipes/custom-routing)
- [Element Plus Message](https://element-plus.org/zh-CN/component/message.html)
