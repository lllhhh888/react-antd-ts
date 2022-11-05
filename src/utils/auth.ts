import { UserInfo } from '../interface/user'

/**
 * @returns
 * 获取用户信息
 */
export const getUserInfo = (): UserInfo | null => {
  const userInfo = localStorage.getItem('userInfo')
  return userInfo !== null ? JSON.parse(userInfo) : userInfo
}

/**
 *
 * @param userInfo
 * @returns
 * 设置用户信息
 */
export const setUserInfo = (userInfo: { userName: string, token: string }): void => {
  return localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

/**
 *
 * @returns
 * 清空用户信息存储
 */
export const removeUserInfo = (): void => {
  return localStorage.removeItem('userInfo')
}
