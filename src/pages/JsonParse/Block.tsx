import { ComponentProps } from 'react'
import { Card as AntdCard } from 'antd'
import styled from 'styled-components'
import { BLOCK_PADDING } from '@/styles/theme'
import { isUndefined } from 'lodash'

interface BlockProps extends ComponentProps<typeof AntdCard> {
  span: number
  bodyPadding: number
}

const Block = styled(AntdCard).attrs((props: BlockProps) => ({
  span: props.span || 1,
  bodyPadding: isUndefined(props.bodyPadding)
    ? BLOCK_PADDING
    : props.bodyPadding
}))`
  display: flex;
  flex: ${({ span }) => span};
  flex-direction: column;
  height: 100%;
  & .ant-card-body {
    flex: 1;
    overflow-y: auto;
    padding: ${({ bodyPadding }) => `${bodyPadding}px`};
  }
`

export default Block
