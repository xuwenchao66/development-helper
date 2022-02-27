import { FC } from 'react'
import styled from 'styled-components'

const COLORS_MAP = {
  string: '#3ab54a',
  number: '#25aae2',
  boolean: '#f98280'
}

interface JsonValueProps {
  title: any
  color?: string
  className?: string
}

const JsonValue: FC<JsonValueProps> = ({ title, className }) => (
  <span className={className}>{`${title}`}</span>
)

export default styled(JsonValue)`
  font-weight: bold;
  color: ${({ title, color }) =>
    color || COLORS_MAP[typeof title as keyof typeof COLORS_MAP]};
`
