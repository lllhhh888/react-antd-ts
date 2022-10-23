import React from 'react'
import Index2 from '../../pages/user/index2'
import Home from '../../pages/home/home'
import { UserOutlined } from '@ant-design/icons'
const Index1 = React.lazy(async () => await import('../../pages/user/index1'))

const userRoutes: Routes = {
  path: '/user',
  element: <Home/>,
  key: '/user',
  title: '用户管理',
  icon: <UserOutlined />,
  children: [
    {
      path: 'index1',
      element: <Index1/>,
      title: '用户删除',
      key: '/user/index1'
    },
    {
      path: 'index2',
      element: <Index2/>,
      title: '用户添加',
      key: '/user/index2'
    }
  ]
}
export default userRoutes
