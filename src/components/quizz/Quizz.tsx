import type { ReactNode } from 'react'

interface QuizzProps {
  children: ReactNode
}

const Quizz = ({ children }: QuizzProps) => {
  return <div className="flex flex-col gap-5 items-center p-5">{children}</div>
}

export default Quizz
