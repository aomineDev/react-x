import { type ReactNode } from 'react'

interface QuizzDescriptionProps {
  children: ReactNode
}

const QuizzDescription = ({ children }: QuizzDescriptionProps) => {
  return <h3>{children}</h3>
}

export default QuizzDescription
