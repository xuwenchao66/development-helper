import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { Result } from 'antd'

const ErrorResult: FC<ComponentProps<typeof Result>> = (props) => (
  <Result status="error" title="Parse Failed" {...props}></Result>
)

export default styled(ErrorResult)`
  word-break: break-word;
`
