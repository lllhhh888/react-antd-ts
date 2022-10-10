import React, { useState } from 'react'
import './home.css'
import { Layout } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import NarBar from '../../comm/home/NarBar'
import { Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  //   const testClick: any = () => {
  //     console.log(store)
  //     store.dispatch(test(!store.getState().app.collapsed))
  //     console.log(store.getState())
  //   }
  return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} width={230} theme={'light'}>
                <div className="logo" style={{ height: '64px' }}/>
                <NarBar />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      style: { marginLeft: '15px' },
                      onClick: () => setCollapsed(!collapsed)
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                      margin: '15px 15px',
                      padding: 24,
                      minHeight: 280
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
  )
}

export default Home
