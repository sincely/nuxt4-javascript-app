import { useCookie } from '#app'

// 获取 Token
export const getToken = () => {
  const Token = useCookie('hw_token')
  return Token.value
}

// 设置 Token
export const setToken = (val) => {
  const Token = useCookie('hw_token')
  Token.value = val
}

// 清空 Token
export const delToken = () => {
  const Token = useCookie('hw_token')
  Token.value = null
}
