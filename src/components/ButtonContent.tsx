import { type ReactNode } from 'react'

interface ButtonContentProps {
  children: ReactNode
}

const ButtonContent = ({ children }: ButtonContentProps) => {
  return <span className="flex items-center gap-1">{children}</span>
}

export default ButtonContent
