import styled from 'styled-components'
import { BLOCK_PADDING } from '@/styles/theme'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  & .ant-card:nth-child(1) {
    margin-right: ${BLOCK_PADDING / 2}px;
  }
`

export default Wrapper
