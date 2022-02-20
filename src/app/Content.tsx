import styled from 'styled-components'
import { Layout } from 'antd'
const { Content } = Layout

const StyledContent = styled(Content)`
  display: flex;
  padding: 20px;
  height: calc(100vh - 64px);
`

export default StyledContent
