import JsonParser from '@/pages/JsonParser'
import { Layout, ConfigProvider } from 'antd'
import Content from './Content'
import Header from './Header'
import Menu from './Menu'

const App = () => {
  return (
    <ConfigProvider>
      <Layout className="App">
        <Header>
          <Menu theme="light" mode="horizontal">
            {new Array(8).fill(null).map((_, index) => {
              const key = index + 1
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
            })}
          </Menu>
        </Header>
        <Content>
          <JsonParser />
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
