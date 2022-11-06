import React from 'react'
import { useDispatch } from 'react-redux'
import { setMenuTab, setMenuActive } from 'store/modules/app'

const Role: React.FC = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setMenuTab({ title: '角色管理', path: '/sysettings/role' }))
    dispatch(setMenuActive('/sysettings/role'))
  }, [])

  return (
    <div>Role</div>
  )
}

export default Role
