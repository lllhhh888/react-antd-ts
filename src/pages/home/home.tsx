import React from 'react'
import './home.css'
import { Layout, Tag } from 'antd'
import { RootState } from 'store/index'
import { useSelector } from 'react-redux'
import NarBar from 'components/home/NarBar'
import { Outlet } from 'react-router-dom'
import HomeHeader from 'components/home/HomeHeader'

const { Header, Sider, Content } = Layout

const Home: React.FC = () => {
  const collapsed = useSelector((state: RootState) => state.app.collapsed)
  const menuTabs = useSelector((state: RootState) => state.app.menuTabs)
  const menuActive = useSelector((state: RootState) => state.app.menuActive)
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
            marginTop: '50px',
            padding: 24,
            minHeight: 280,
            position: 'relative'
          }}
        >
          <div style={{ position: 'absolute', top: '-50px', left: '-15px', right: '-15px', padding: '10px 15px' }}>

            { menuTabs.map(item => {
              return (
                <Tag
                 closable={true}
                 color={menuActive === item.path ? 'blue' : ''}
                 style={{ padding: '5px' }}
                 key={item.path}>{item.title}</Tag>
              )
            })}
          </div>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
