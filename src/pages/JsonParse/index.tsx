import { FC, useState, memo } from 'react'
import { InputSection, InputSectionProps } from './InputSection'
import { OutputSection } from './OutputSection'
import Container from './Container'

const JsonParser: FC = memo(() => {
  const [parsedObj, setParsedObj] = useState<any[]>([])
  const [errorMsg, setErrorMsg] = useState('')
  const [defaultExpandedKeys, setDefaultExpandedKeys] = useState<any[]>([])

  const onParse: InputSectionProps['onParse'] = (error, data, keys) => {
    setErrorMsg(error ? error.message : '')
    setParsedObj(data)
    setDefaultExpandedKeys(keys)
  }

  return (
    <Container>
      <InputSection onParse={onParse} />
      <OutputSection
        treeData={parsedObj}
        errorMsg={errorMsg}
        defaultExpandedKeys={defaultExpandedKeys}
      />
    </Container>
  )
})

export default JsonParser
