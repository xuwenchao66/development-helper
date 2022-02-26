import { Input } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input

const StyledTextArea = styled(TextArea)`
  resize: none;
  &.ant-input {
    height: 100%;
  }
`

export default StyledTextArea
