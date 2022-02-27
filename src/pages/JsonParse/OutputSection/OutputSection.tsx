import { FC, Key, ComponentProps, useState, useEffect } from 'react'
import Block from '../Block'
import Tree from './Tree'
import ErrorResult from './ErrorResult'

type OutputSectionProps = {
  treeData: ComponentProps<typeof Tree>['treeData']
  errorMsg?: string
  defaultExpandedKeys?: ComponentProps<typeof Tree>['defaultExpandedKeys']
}

const OutputSection: FC<OutputSectionProps> = ({
  treeData,
  defaultExpandedKeys = [],
  errorMsg
}) => {
  const [expandedKeys, setExpandedKeys] = useState<Key[]>([])
  const onExpand = (expandedKeysValue: Key[]) => {
    setExpandedKeys(expandedKeysValue)
  }

  useEffect(() => {
    setExpandedKeys(defaultExpandedKeys)
  }, [defaultExpandedKeys])

  return (
    <Block title="Output" span={1.5}>
      {errorMsg ? (
        <ErrorResult subTitle={errorMsg}></ErrorResult>
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
