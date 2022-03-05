import { FC } from 'react'
import styled from 'styled-components'
import Block from '@/components/Block'
import TextArea from '@/components/TextArea'
import { BLOCK_SPACE } from '@/styles/theme'
import Container from './Container'

const TransformBlock = styled(Block)`
  margin-bottom: ${BLOCK_SPACE}px;
`

const StringTransform: FC = () => {
  return (
    <Container>
      <TransformBlock title="Transform" flex={0}>
        1
      </TransformBlock>
      <Block title="String" bodyPadding={0}>
        <TextArea bordered={false} placeholder="Please input your string ..." />
      </Block>
    </Container>
  )
}

export default StringTransform
