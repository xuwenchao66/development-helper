import { FC } from 'react'
import styled from 'styled-components'

interface JsonKeyProps {
  title: string
  className?: string
}

const JsonKey: FC<JsonKeyProps> = ({ title, className }) => (
  <span className={className}>{`${title} : `}</span>
)

export default styled(JsonKey)`
  font-weight: bold;
  color: #92278f;
`
