import React, { useState } from 'react'
import { InputSection, InputSectionProps } from './InputSection'
import { OutputSection } from './OutputSection'
import Container from './Container'

const JsonParser: React.FC = () => {
  const [parsedObj, setParsedObj] = useState<any[]>([])
  const [errorMsg, setErrorMsg] = useState('')
  const [defaultExpandedKeys, setDefaultExpandedKeys] = useState<any[]>([])

  const onChange: InputSectionProps['onChange'] = (error, data, keys) => {
    setErrorMsg(error ? error.message : '')
    setParsedObj(data)
    setDefaultExpandedKeys(keys)
  }

  return (
    <Container>
      <InputSection onChange={onChange} />
      <OutputSection
        treeData={parsedObj}
        errorMsg={errorMsg}
        defaultExpandedKeys={defaultExpandedKeys}
      />
    </Container>
  )
}

export default JsonParser
