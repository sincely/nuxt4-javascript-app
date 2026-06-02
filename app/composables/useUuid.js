import { useCookie } from '#app'

// 获取 Uuid
export const getUuid = () => {
  const Uuid = useCookie('hw_uuid')
  return Uuid.value
}

// 设置 Uuid
export const setUuid = (val) => {
  const Uuid = useCookie('hw_uuid')
  Uuid.value = val
}

// 清空 Uuid
export const delUuid = () => {
  const Uuid = useCookie('hw_uuid')
  Uuid.value = null
}
