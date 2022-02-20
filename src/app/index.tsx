import { Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { MENUS } from '@/constants'
import Content from './Content'
import Header from './Header'
import Menu from './Menu'
import Router from './Router'

const App = () => {
  const location = useLocation()

  return (
    <Layout className="App">
      <Header>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
          {MENUS.map((menu) => (
            <Menu.Item key={menu.path}>
              <Link to={menu.path}>{menu.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <Router />
      </Content>
    </Layout>
  )
}

export default App
