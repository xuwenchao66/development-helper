import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import App from '@/app'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
