import React, { ComponentProps, useState, useEffect } from 'react'
import { Tree } from 'antd'
import styled from 'styled-components'
import { Result } from 'antd'
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
  errorMsg?: string
  defaultExpandedKeys?: ComponentProps<typeof Tree>['defaultExpandedKeys']
}

const OutputSection: React.FC<OutputSectionProps> = ({
  treeData,
  defaultExpandedKeys = [],
  errorMsg
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
      {errorMsg ? (
        <Result
          status="error"
          title="Parse Failed"
          subTitle={errorMsg}
        ></Result>
      ) : (
        <StyledTree
          showLine={{ showLeafIcon: false }}
          onExpand={onExpand}
          treeData={treeData}
          expandedKeys={expandedKeys}
        />
      )}
    </Wrapper>
  )
}

export default OutputSection
