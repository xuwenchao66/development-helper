import styled from 'styled-components'
import { Tree } from 'antd'

const StyledTree = styled(Tree)`
  resize: none;
  & .ant-tree-node-content-wrapper {
    word-break: break-all;
    user-select: auto;
  }
`

export default StyledTree
