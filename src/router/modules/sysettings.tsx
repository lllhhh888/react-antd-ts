
import React from 'react'
import Home from 'pages/home/home'
import { SettingOutlined } from '@ant-design/icons'
const User = React.lazy(async () => await import('pages/sysettings/User'))
const Role = React.lazy(async () => await import('pages/sysettings/Role'))

const sysettings: Routes = {
  path: '/sysettings',
  element: <Home/>,
  key: '/sysettings',
  title: '系统设置',
  icon: <SettingOutlined />,
  children: [
    {
      path: 'user',
      element: <User/>,
      title: '用户管理',
      key: '/sysettings/user'
    },
    {
      path: 'role',
      element: <Role/>,
      title: '权限管理',
      key: '/sysettings/role'
    }
  ]
}
export default sysettings
