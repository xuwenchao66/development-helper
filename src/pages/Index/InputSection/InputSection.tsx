import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { Wrapper } from './style'
import { parse, Key } from './parse'

const { TextArea } = Input
const StyledTextArea = styled(TextArea)`
  resize: none;
  &.ant-input {
    height: 100%;
  }
`

export type InputSectionProps = {
  onChange: (data: any[], keys: Key[]) => void
}

const InputSection: React.FC<InputSectionProps> = ({ onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const [data, keys] = parse(e.target.value)
    onChange && onChange(data, keys)
  }

  return (
    <Wrapper>
      <StyledTextArea
        placeholder="please input your JSON..."
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default InputSection
