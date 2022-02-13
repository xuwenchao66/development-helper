import React, { ComponentProps, useState } from 'react'
import { Tree } from 'antd'
import styled from 'styled-components'
import { Wrapper } from './style'

type OutputSectionProps = {
  treeData: ComponentProps<typeof Tree>['treeData']
  defaultExpandedKeys?: ComponentProps<typeof Tree>['defaultExpandedKeys']
}
const StyledTree = styled(Tree)`
  resize: none;
  & .ant-tree-node-content-wrapper {
    word-break: break-all;
    user-select: auto;
  }
`

const OutputSection: React.FC<OutputSectionProps> = ({
  treeData,
  defaultExpandedKeys = []
}) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue)
  }

  React.useEffect(() => {
    setExpandedKeys(defaultExpandedKeys)
  }, [defaultExpandedKeys])

  return (
    <Wrapper>
      <StyledTree
        showLine={{ showLeafIcon: false }}
        onExpand={onExpand}
        treeData={treeData}
        expandedKeys={expandedKeys}
      />
    </Wrapper>
  )
}

export default OutputSection
