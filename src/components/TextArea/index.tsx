import { Input } from 'antd'
import { BLOCK_PADDING } from '@/styles/theme'
import styled from 'styled-components'

const { TextArea } = Input

const StyledTextArea = styled(TextArea)`
  resize: none;
  &.ant-input {
    height: 100%;
    padding: ${BLOCK_PADDING}px;
  }
`

export default StyledTextArea
