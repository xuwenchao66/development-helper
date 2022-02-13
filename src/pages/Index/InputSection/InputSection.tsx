import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'
import { Wrapper } from './style'

const { TextArea } = Input
const StyledTextArea = styled(TextArea)`
  resize: none;
  &.ant-input {
    height: 100%;
  }
`

const InputSection: React.FC = () => {
  return (
    <Wrapper>
      <StyledTextArea />
    </Wrapper>
  )
}

export default InputSection
