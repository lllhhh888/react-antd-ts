import React, { FC, useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { MenuInfo } from 'rc-menu/lib/interface'
import { useNavigate } from 'react-router-dom'
import routes from '../../router/index'
import style from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuTab, setMenuActive } from 'store/modules/app'
import { RootState } from 'store'
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

const rootSubmenuKeys = ['sub1']

const NarBar: FC = () => {
  const navigate = useNavigate()

  const items = filterRoutes(routes)

  const menuActive = useSelector((state: RootState) => state.app.menuActive)
  const dispatch = useDispatch()

  const [openKeys, setOpenKeys] = useState([''])

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    console.log(keys)
    const latestOpenKey = keys.find(key => !openKeys.includes(key))
    if (!rootSubmenuKeys.includes(latestOpenKey as string)) {
      setOpenKeys(keys)
    } else {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onMenuClick = (menuInfo: MenuInfo): void => {
    const ele = menuInfo.domEvent.target as HTMLElement
    dispatch(setMenuTab({ title: ele.innerText, path: menuInfo.key }))
    dispatch(setMenuActive(menuInfo.key))
    navigate(menuInfo.key)
  }

  return (
    <Menu
      className={style.menu}
      mode="inline"
      openKeys={openKeys}
      defaultSelectedKeys={[menuActive]}
      onOpenChange={onOpenChange}
      onClick={onMenuClick}
      items={items}
    />
  )
}

export default NarBar
