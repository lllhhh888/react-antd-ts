import { UserInfo } from '../interface/user'

/**
 * @returns
 * 获取用户信息
 */
export const getUserInfo = (): UserInfo | null => {
  const userInfo = localStorage.getItem('userInfo')
  return userInfo !== null ? JSON.parse(userInfo) : userInfo
}
