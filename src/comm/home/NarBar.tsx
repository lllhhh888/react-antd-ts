import React, { FC, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useNavigate } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number]

function getItem (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const NarBar: FC = () => {
  const navigate = useNavigate()

  const [openKeys, setOpenKeys] = useState(['sub1'])

  const collapsed = useSelector((state: RootState) => state.app.collapsed)
  console.log(collapsed)
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => !openKeys.includes(key))
    if (!rootSubmenuKeys.includes(latestOpenKey as string)) {
      setOpenKeys(keys)
    } else {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onMenuClick: MenuClickEventHandler = (menuInfo) => {
    navigate('/user/index1')
  }

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={onMenuClick}
      items={items}
    />
  )
}

export default NarBar
