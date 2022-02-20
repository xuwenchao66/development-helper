import React, { useState } from 'react'
import { useDebounceFn } from 'ahooks'
import Container from './Container'
import { parse, Key } from './parse'
import TextArea from './TextArea'
import { parseJson } from '@/utils/index'

export type InputSectionProps = {
  onChange: (error: any, data: any[], keys: Key[]) => void
}

const InputSection: React.FC<InputSectionProps> = ({ onChange }) => {
  const [json, setValue] = useState('')

  const handleParse = (value: string) => {
    const [data, keys] = parse(parseJson(value))
    onChange(null, data, keys)
  }

  const { run: debounceHandleParse } = useDebounceFn(handleParse, { wait: 200 })

  const handelClear = (error: any, value: string) => {
    setValue(value)
    onChange(error, [], [])
  }

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target
    console.log(value)
    if (!value) return handelClear(null, value)

    try {
      setValue(JSON.stringify(parseJson(value), null, 2))
      debounceHandleParse(value)
    } catch (error: any) {
      handelClear(error, value)
      console.error(error)
    }
  }

  return (
    <Container>
      <TextArea
        value={json}
        placeholder="please input your JSON..."
        onChange={handleChange}
      />
    </Container>
  )
}

export default InputSection
