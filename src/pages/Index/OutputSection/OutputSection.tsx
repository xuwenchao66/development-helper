import React, { ComponentProps, useState, useEffect } from 'react'
import { Tree } from 'antd'
import styled from 'styled-components'
import { Wrapper } from './style'

const StyledTree = styled(Tree)`
  resize: none;
  & .ant-tree-node-content-wrapper {
    word-break: break-all;
    user-select: auto;
  }
`

type OutputSectionProps = {
  treeData: ComponentProps<typeof Tree>['treeData']
  defaultExpandedKeys?: ComponentProps<typeof Tree>['defaultExpandedKeys']
}

const OutputSection: React.FC<OutputSectionProps> = ({
  treeData,
  defaultExpandedKeys = []
}) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue)
  }

  useEffect(() => {
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
