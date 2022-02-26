import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MENUS } from '@/constants'
import Layout from './Layout'
import Content from './Content'
import Menu from './Menu'
import Router from './Router'

const { Sider } = Layout

const App = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          inlineCollapsed={collapsed}
        >
          {MENUS.map(({ title, path }) => {
            const menuTitle = collapsed ? title[0] : title
            return (
              <Menu.Item key={path} title={title}>
                <Link to={path}>{menuTitle}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Content>
        <Router />
      </Content>
    </Layout>
  )
}

export default App
