import React, { useState } from 'react'
import { InputSection, InputSectionProps } from './InputSection'
import { OutputSection } from './OutputSection'
import { Wrapper } from './style'

const Index: React.FC = () => {
  const [parsedObj, setParsedObj] = useState<any[]>([])
  const [errorMsg, setErrorMsg] = useState('')
  const [defaultExpandedKeys, setDefaultExpandedKeys] = useState<any[]>([])

  const onChange: InputSectionProps['onChange'] = (error, data, keys) => {
    setErrorMsg(error ? error.message : '')
    setParsedObj(data)
    setDefaultExpandedKeys(keys)
  }

  return (
    <Wrapper>
      <InputSection onChange={onChange} />
      <OutputSection
        treeData={parsedObj}
        errorMsg={errorMsg}
        defaultExpandedKeys={defaultExpandedKeys}
      />
    </Wrapper>
  )
}

export default Index
