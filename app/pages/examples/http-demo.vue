<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">HTTP 请求示例</h1>

    <!-- 获取用户信息示例 -->
    <el-card class="mb-4">
      <template #header>获取用户信息</template>
      <el-button @click="handleGetUserInfo" :loading="loading">获取用户信息</el-button>
      <pre v-if="userInfo" class="mt-4 p-4 bg-gray-100 rounded">{{ userInfo }}</pre>
    </el-card>

    <!-- 列表示例 -->
    <el-card class="mb-4">
      <template #header>获取列表</template>
      <el-form :inline="true" class="mb-4">
        <el-form-item label="页码">
          <el-input-number v-model="page" :min="1" />
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="keyword" placeholder="请输入关键词" />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleGetList" :loading="loading">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="listData" v-loading="loading" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="status" label="状态" />
      </el-table>
    </el-card>

    <!-- 文件上传示例 -->
    <el-card class="mb-4">
      <template #header>文件上传</template>
      <el-upload action="#" :http-request="handleUpload" :show-file-list="true" :limit="1">
        <el-button type="primary">选择文件上传</el-button>
      </el-upload>
    </el-card>

    <!-- 表单提交示例 -->
    <el-card>
      <template #header>创建数据</template>
      <el-form :model="form" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleCreate" :loading="loading">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getUserInfo, getList, uploadFile, createItem } from '~/api/index.js'

definePageMeta({
  layout: 'global-layout'
})

const loading = ref(false)
const userInfo = ref(null)
const listData = ref([])
const page = ref(1)
const keyword = ref('')
const form = ref({
  name: '',
  description: ''
})

// 获取用户信息
const handleGetUserInfo = async () => {
  loading.value = true
  try {
    userInfo.value = await getUserInfo()
    ElMessage.success('获取成功')
  } catch (error) {
    console.error('获取用户信息失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取列表
const handleGetList = async () => {
  loading.value = true
  try {
    listData.value = await getList({
      page: page.value,
      size: 10,
      keyword: keyword.value
    })
  } catch (error) {
    console.error('获取列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 文件上传
const handleUpload = async ({ file }) => {
  loading.value = true
  try {
    const formData = new FormData()
    formData.append('file', file)

    const result = await uploadFile(formData)
    ElMessage.success('上传成功')
    console.log('上传结果:', result)
  } catch (error) {
    console.error('上传失败:', error)
  } finally {
    loading.value = false
  }
}

// 创建数据
const handleCreate = async () => {
  if (!form.value.name) {
    ElMessage.warning('请输入名称')
    return
  }

  loading.value = true
  try {
    await createItem(form.value)
    ElMessage.success('创建成功')
    form.value = { name: '', description: '' }
  } catch (error) {
    console.error('创建失败:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
