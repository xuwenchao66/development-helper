import styled from 'styled-components'
import { Menu } from 'antd'

const StyledMenu = styled(Menu)`
  font-weight: ${(props) => (props.inlineCollapsed ? 'bold' : 'normal')};
`

export default StyledMenu
