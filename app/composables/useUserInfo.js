import { useCookie } from '#app'

// 获取 UserInfo
export const getUserInfo = () => {
  const UserInfo = useCookie('UserInfo')
  return UserInfo.value || {}
}

// 设置 UserInfo
export const setUserInfo = (val) => {
  const UserInfo = useCookie('UserInfo')
  UserInfo.value = JSON.stringify(val)
}

// 清空 UserInfo
export const delUserInfo = () => {
  const UserInfo = useCookie('UserInfo')
  UserInfo.value = JSON.stringify({})
}
