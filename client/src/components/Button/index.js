import React from 'react'

import { SystemButton } from './styles'

const Button = ({ children, onClick }) => {
  return <SystemButton onClick={onClick}>{children}</SystemButton>
}

export default Button
