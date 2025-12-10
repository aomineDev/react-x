import { type ReactNode } from 'react'

interface QuizzTitleProps {
  children: ReactNode
}

const QuizzTitle = ({ children }: QuizzTitleProps) => {
  return <h1 className="text-4xl capitalize font-bold primary-gradient">{children}</h1>
}

export default QuizzTitle
