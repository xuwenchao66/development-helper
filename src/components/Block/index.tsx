import { FC, ComponentProps } from 'react'
import { Card as AntdCard } from 'antd'
import styled, { CSSProperties } from 'styled-components'
import { BLOCK_PADDING } from '@/styles/theme'
import { isUndefined } from 'lodash'

interface BlockProps extends ComponentProps<typeof AntdCard> {
  flex: CSSProperties['flex']
  bodyPadding: number
}

const Block: FC<BlockProps> = ({ flex, bodyPadding, children, ...props }) => (
  <AntdCard {...props}>{children}</AntdCard>
)

export default styled(Block).attrs((props: BlockProps) => ({
  flex: props.flex,
  bodyPadding: isUndefined(props.bodyPadding)
    ? BLOCK_PADDING
    : props.bodyPadding
}))`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: column;
  height: 100%;
  & .ant-card-head {
    margin-bottom: 0;
  }
  & .ant-card-body {
    flex: 1;
    overflow-y: auto;
    padding: ${({ bodyPadding }) => `${bodyPadding}px`};
  }
`
