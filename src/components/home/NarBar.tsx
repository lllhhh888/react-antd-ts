import React, { FC, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useNavigate } from 'react-router-dom'
import routes from '../../router/index'
import style from './navbar.module.css'
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

const filterRoutes = (r: Routes[]): MenuItem[] => {
  const NOINDULE = ['/login', '*', '/']

  const menu: MenuItem[] = r.filter(item => !NOINDULE.includes(item.path) && !(item.hidden === true)).map(item => {
    let children: MenuItem[] = []
    if (item.children !== undefined && item.children.length > 0) {
      children = filterRoutes(item.children)
      return getItem(item.title, item.key !== undefined ? item.key : '', item.icon, children)
    }
    return getItem(item.title, item.key !== undefined ? item.key : '', item.icon)
  })
  return menu
}

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const NarBar: FC = () => {
  const navigate = useNavigate()

  const items = filterRoutes(routes)

  const [openKeys, setOpenKeys] = useState(['sub1'])

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
    navigate(menuInfo.key)
  }

  return (
    <Menu
      className={style.menu}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={onMenuClick}
      items={items}
    />
  )
}

export default NarBar
