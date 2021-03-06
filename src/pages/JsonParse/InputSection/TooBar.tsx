import { FC } from 'react'
import { Button, Space } from 'antd'

interface TooBarProps {
  onPaste?: () => void
  onFormat: () => void
  onClear: () => void
}

const TooBar: FC<TooBarProps> = ({ onPaste, onFormat, onClear }) => (
  <Space>
    {onPaste && (
      <Button size="small" onClick={onPaste}>
        Paste
      </Button>
    )}
    <Button size="small" onClick={onFormat}>
      Format
    </Button>
    <Button size="small" onClick={onClear}>
      Clear
    </Button>
  </Space>
)

export default TooBar
