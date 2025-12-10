import type { ReactNode } from 'react'

interface QuizzBtnGroupProps {
  children: ReactNode
}
const QuizzButtonGroup = ({ children }: QuizzBtnGroupProps) => {
  return <div className="flex flex-col gap-4 w-100">{children}</div>
}

export default QuizzButtonGroup
