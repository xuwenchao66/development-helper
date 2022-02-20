import styled from 'styled-components'
import { Layout } from 'antd'
const { Content } = Layout

const StyledContent = styled(Content)`
  display: flex;
  padding: 24px;
  height: calc(100vh - 64px);
`

export default StyledContent
