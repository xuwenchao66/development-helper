import { FC } from 'react'
import { Button, Space } from 'antd'

interface TooBarProps {
  onPaste?: () => void
  onFormat: () => void
  onReset: () => void
}

const TooBar: FC<TooBarProps> = ({ onPaste, onFormat, onReset }) => (
  <Space>
    {onPaste && (
      <Button size="small" onClick={onPaste}>
        Paste
      </Button>
    )}
    <Button size="small" onClick={onFormat}>
      Format
    </Button>
    <Button size="small" onClick={onReset}>
      Clear
    </Button>
  </Space>
)

export default TooBar
