import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  className?: string
}

const JsonKey: React.FC<Props> = ({ title, className }) => (
  <span className={className}>{`${title} : `}</span>
)

export default styled(JsonKey)`
  font-weight: bold;
  color: #92278f;
`
