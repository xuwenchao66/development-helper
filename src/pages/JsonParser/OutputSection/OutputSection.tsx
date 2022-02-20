import React, { ComponentProps, useState, useEffect } from 'react'
import Tree from './Tree'
import { Result } from 'antd'
import Container from './Container'

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
    <Container>
      {errorMsg ? (
        <Result
          status="error"
          title="Parse Failed"
          subTitle={errorMsg}
        ></Result>
      ) : (
        <Tree
          showLine={{ showLeafIcon: false }}
          onExpand={onExpand}
          treeData={treeData}
          expandedKeys={expandedKeys}
        />
      )}
    </Container>
  )
}

export default OutputSection
