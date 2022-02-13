import React, { ComponentProps, useState, useEffect } from 'react'
import { Tree, Input } from 'antd'
import styled from 'styled-components'
import isString from 'lodash/isString'
import { Wrapper } from './style'

const { Search } = Input
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
  const [highlight, setHighlightWords] = useState('')
  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue)
  }

  useEffect(() => {
    setExpandedKeys(defaultExpandedKeys)
  }, [defaultExpandedKeys])

  return (
    <Wrapper>
      <Search
        placeholder="Hight light"
        onChange={(e) => setHighlightWords(e.target.value)}
      />
      <StyledTree
        showLine={{ showLeafIcon: false }}
        onExpand={onExpand}
        treeData={treeData}
        filterTreeNode={(node) => {
          if (!highlight) return false
          if (isString(node.title)) return node.title.indexOf(highlight) !== -1
          return true
        }}
        expandedKeys={expandedKeys}
      />
    </Wrapper>
  )
}

export default OutputSection
