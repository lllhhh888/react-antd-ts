
import React from 'react'
import { Avatar, Popover, Divider, Modal } from 'antd'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { setCollapsed } from 'store/modules/app'
import { useNavigate } from 'react-router-dom'

import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { removeUserInfo } from 'utils/auth'

const popoverContent = (): JSX.Element => {
  const navigate = useNavigate()
  const logout = (): void => {
    Modal.confirm({
      title: '提示',
      content: '确定要退出登录吗？',
      cancelText: '取消',
      okText: '确定',
      getContainer: document.body,
      centered: true,
      onOk: () => {
        removeUserInfo()
        navigate('/login')
      }
    })
  }
  return (
        <div style={{ width: '100px', textAlign: 'center' }}>
            <div style={{ cursor: 'pointer' }}>基本信息</div>
            <Divider style={{ margin: '10px 0' }} />
            <div style={{ cursor: 'pointer' }}>修改密码</div>
            <Divider style={{ margin: '10px 0' }} />
            <div style={{ cursor: 'pointer' }} onClick={logout}>退出登录</div>
        </div>
  )
}
const HomeHeader: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.app.collapsed)
  const dispatch = useDispatch()
  return (
        <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: { marginLeft: '15px' },
              onClick: () => dispatch(setCollapsed(!collapsed))
            })}
            <div className='fr mr-15'>
                <span style={{ fontWeight: 'bold' }} className="mr-10">admin</span>
                <Popover content={popoverContent} placement="bottomRight">
                    <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} icon={<UserOutlined />} />
                </Popover>
            </div>
        </div>
  )
}

export default HomeHeader
