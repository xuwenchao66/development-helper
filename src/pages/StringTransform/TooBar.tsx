import { FC } from 'react'
import { Button, Space } from 'antd'

interface TooBarProps {
  onPaste?: () => void
  onCopy: () => void
  onClear: () => void
}

const TooBar: FC<TooBarProps> = ({ onPaste, onCopy, onClear }) => (
  <Space>
    {onPaste && (
      <Button size="small" onClick={onPaste}>
        Paste
      </Button>
    )}
    <Button size="small" onClick={onCopy}>
      Copy
    </Button>
    <Button size="small" onClick={onClear}>
      Clear
    </Button>
  </Space>
)

export default TooBar
