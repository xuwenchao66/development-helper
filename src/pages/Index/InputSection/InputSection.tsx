import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { useDebounceFn } from 'ahooks'
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
  const handleParse = (value: string) => {
    const [data, keys] = parse(JSON.parse(value))
    onChange(data, keys)
  }
  const { run: debounceHandleParse } = useDebounceFn(handleParse, { wait: 200 })

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    try {
      const { value } = e.target

      setValue(JSON.stringify(JSON.parse(value), null, 2))
      debounceHandleParse(value)
    } catch (error) {
      setValue('')
      onChange([], [])
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
