import { FC, ChangeEventHandler, useEffect } from 'react'
import { useDebounceFn } from 'ahooks'
import { parseJson } from '@/utils/index'
import { useString } from '@/hooks'
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
  const [string, { set, isPastable, paste, clear }] = useString()

  const handelError = (error: any) => {
    onParse(error, [], [])
  }

  const handelReset = () => {
    clear()
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

    set(value)
  }

  const handleFormat = () => {
    try {
      set(JSON.stringify(parseJson(string), null, 2))
    } catch (error) {
      handelError(error)
    }
  }

  useEffect(() => {
    debounceHandleParse(string)
  }, [debounceHandleParse, string])

  return (
    <InputBlock
      title="Input"
      flex={1}
      bodyPadding={0}
      extra={
        <TooBar
          onReset={handelReset}
          onFormat={handleFormat}
          onPaste={isPastable ? paste : undefined}
        />
      }
    >
      <TextArea
        value={string}
        bordered={false}
        placeholder="Please input your json data ..."
        onChange={handleChange}
      />
    </InputBlock>
  )
}

export default InputSection
