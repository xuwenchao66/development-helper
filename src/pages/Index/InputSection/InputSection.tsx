import React, { useState } from 'react'
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
  const [json, setValue] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    try {
      const { value } = e.target
      const [data, keys] = parse(value)
      setValue(JSON.stringify(JSON.parse(value), null, 2))
      onChange(data, keys)
    } catch (error) {
      setValue('')
      onChange([], [])
      console.error(error)
    }
  }

  return (
    <Wrapper>
      <StyledTextArea
        value={json}
        placeholder="please input your JSON..."
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default InputSection
