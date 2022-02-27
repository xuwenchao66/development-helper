import styled from 'styled-components'
import { BLOCK_PADDING } from '@/styles/theme'
import { Layout } from 'antd'

const { Content } = Layout

const StyledContent = styled(Content)`
  display: flex;
  padding: ${BLOCK_PADDING}px;
`

export default StyledContent
