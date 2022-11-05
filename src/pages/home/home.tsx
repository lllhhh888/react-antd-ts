import React from 'react'
import './home.css'
import { Layout } from 'antd'
import { RootState } from 'store/index'
import { useSelector } from 'react-redux'
import NarBar from 'components/home/NarBar'
import { Outlet } from 'react-router-dom'
import HomeHeader from 'components/home/HomeHeader'

const { Header, Sider, Content } = Layout

const Home: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.app.collapsed)
  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={230} theme={'light'}>
        <div className="logo" style={{ height: '64px', textAlign: 'center', lineHeight: '64px', borderBottom: '1px solid #ccc' }}>
          <h3 style={{ fontSize: '25px', fontWeight: 'bold' }}> {collapsed ? 'X' : 'XXX管理系统'} </h3>
        </div>
        <NarBar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <HomeHeader />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '15px 15px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
