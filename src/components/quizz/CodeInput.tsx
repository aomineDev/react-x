import { Input } from '../ui/input'

interface CodeInputProps {
  id: string
  width: string
  showFeedback: boolean
  readOnly: boolean
  handleInputChange: (id: string, value: string) => void
  checkAnswer: (id: string) => boolean
}

const CodeInput = ({
  id,
  width,
  showFeedback,
  readOnly,
  handleInputChange,
  checkAnswer,
}: CodeInputProps) => {
  const isCorrect = checkAnswer(id)

  return (
    <Input
      type="text"
      id={id}
      style={{ width: `${width}px` }}
      className={`h-7 mx-1 
        ${
          showFeedback &&
          (isCorrect
            ? 'text-green-500 border-green-500 focus-visible:ring-green-500 focus-visible:border-green-500 focus-visible:ring-offset-0 focus-visible:ring-2'
            : 'text-red-500 border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500 focus-visible:ring-offset-0 focus-visible:ring-2')
        }
      `}
      onChange={(e) => handleInputChange(id, e.target.value)}
      autoComplete="off"
      readOnly={readOnly}
    />
  )
}

export default CodeInput
