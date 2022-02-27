import React, { useState } from 'react'
import { useDebounceFn } from 'ahooks'
import { parseJson } from '@/utils/index'
import Block from '../Block'
import { parse, Key } from './parse'
import TextArea from './TextArea'

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
    if (!value) return handelClear(null, value)

    try {
      setValue(JSON.stringify(parseJson(value), null, 2))
      debounceHandleParse(value)
    } catch (error: any) {
      handelClear(error, value)
    }
  }

  return (
    <Block title="Input" bodyPadding={0}>
      <TextArea
        bordered={false}
        value={json}
        placeholder="please input your JSON..."
        onChange={handleChange}
      />
    </Block>
  )
}

export default InputSection
