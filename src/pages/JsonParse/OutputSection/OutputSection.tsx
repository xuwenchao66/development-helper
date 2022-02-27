import React, { ComponentProps, useState, useEffect } from 'react'
import Block from '../Block'
import Tree from './Tree'
import { Result } from 'antd'

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
    <Block title="Output" span={1.5}>
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
    </Block>
  )
}

export default OutputSection
