import { FC, useState, ChangeEventHandler, useEffect } from 'react'
import { useDebounceFn } from 'ahooks'
import { parseJson } from '@/utils/index'
import Block from '../Block'
import { parse, Key } from './parse'
import TextArea from './TextArea'
import TooBar from './TooBar'

export type InputSectionProps = {
  onParse: (error: any, data: any[], keys: Key[]) => void
}

const InputSection: FC<InputSectionProps> = ({ onParse }) => {
  const [jsonString, setValue] = useState('')

  const handelError = (error: any) => {
    onParse(error, [], [])
  }

  const handelReset = () => {
    setValue('')
    onParse(null, [], [])
  }

  const handleParse = (value: string) => {
    try {
      if (!value) return
      const [data, keys] = parse(parseJson(value))
      onParse(null, data, keys)
    } catch (error) {
      handelError(error)
    }
  }

  const { run: debounceHandleParse } = useDebounceFn(handleParse, { wait: 200 })

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target
    if (!value) return handelReset()

    setValue(value)
  }

  const handleFormat = () => {
    try {
      setValue(JSON.stringify(parseJson(jsonString), null, 2))
    } catch (error) {
      handelError(error)
    }
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setValue(text)
    } catch (error) {}
  }

  useEffect(() => {
    debounceHandleParse(jsonString)
  }, [debounceHandleParse, jsonString])

  return (
    <Block
      title="Input"
      bodyPadding={0}
      extra={
        <TooBar
          onReset={handelReset}
          onFormat={handleFormat}
          onPaste={handlePaste}
        />
      }
    >
      <TextArea
        value={jsonString}
        bordered={false}
        placeholder="please input your JSON..."
        onChange={handleChange}
      />
    </Block>
  )
}

export default InputSection
