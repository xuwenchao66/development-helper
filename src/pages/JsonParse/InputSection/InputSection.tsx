import { FC, useState, ChangeEventHandler, useEffect } from 'react'
import { useDebounceFn } from 'ahooks'
import { parseJson } from '@/utils/index'
import { usePaste } from '@/hooks'
import styled from 'styled-components'
import { BLOCK_SPACE } from '@/styles/theme'
import Block from '@/components/Block'
import { parse, Key } from './parse'
import TextArea from '@/components/TextArea'
import TooBar from './TooBar'

export type InputSectionProps = {
  onParse: (error: any, data: any[], keys: Key[]) => void
}

const InputBlock = styled(Block)`
  margin-right: ${BLOCK_SPACE}px;
`

const InputSection: FC<InputSectionProps> = ({ onParse }) => {
  const [jsonString, setValue] = useState('')
  const { isPastable, paste } = usePaste()

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
      const text = await paste()
      setValue(text)
    } catch (error) {}
  }

  useEffect(() => {
    debounceHandleParse(jsonString)
  }, [debounceHandleParse, jsonString])

  return (
    <InputBlock
      title="Input"
      flex={1}
      bodyPadding={0}
      extra={
        <TooBar
          onReset={handelReset}
          onFormat={handleFormat}
          onPaste={isPastable ? handlePaste : undefined}
        />
      }
    >
      <TextArea
        value={jsonString}
        bordered={false}
        placeholder="Please input your json data ..."
        onChange={handleChange}
      />
    </InputBlock>
  )
}

export default InputSection
