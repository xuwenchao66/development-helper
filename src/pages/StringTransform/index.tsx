import { FC, memo, useRef, useState } from 'react'
import { Space, Button } from 'antd'
import styled from 'styled-components'
import Block from '@/components/Block'
import TextArea from '@/components/TextArea'
import { BLOCK_SPACE } from '@/styles/theme'
import { useString } from '@/hooks'
import Container from './Container'
import { TRANSFORMERS } from './constant'
import TooBar from './TooBar'

const TransformBlock = styled(Block)`
  margin-bottom: ${BLOCK_SPACE}px;
`

const StringTransform: FC = memo(() => {
  const [string, { set, clear, isPastable, copy, paste }] = useString()
  const [transformed, setTransformed] = useState(false)
  const originalString = useRef(string)

  const reset = () => {
    clear()
    originalString.current = ''
    setTransformed(false)
  }

  const setString = (value: string, isOriginal = false) => {
    if (!value) return reset()

    if (isOriginal) {
      originalString.current = value
    } else {
      setTransformed(true)
    }

    set(value)
  }

  const recover = () => {
    set(originalString.current)
    setTransformed(false)
  }

  return (
    <Container>
      <TransformBlock title="Transform" flex={0}>
        <Space>
          <Button disabled={!transformed} onClick={recover}>
            Original string
          </Button>
          {TRANSFORMERS.map(({ title, handle }) => (
            <Button type="primary" onClick={() => setString(handle(string))}>
              {title}
            </Button>
          ))}
        </Space>
      </TransformBlock>
      <Block
        title="String"
        bodyPadding={0}
        extra={
          <TooBar
            onClear={reset}
            onCopy={copy}
            onPaste={isPastable ? paste : undefined}
          />
        }
      >
        <TextArea
          value={string}
          onChange={(e) => setString(e.target.value, true)}
          bordered={false}
          placeholder="Please input your string ..."
        />
      </Block>
    </Container>
  )
})

export default StringTransform
