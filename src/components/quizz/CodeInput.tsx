import { Input } from '../ui/input'

interface CodeInputProps {
  id: string
  width: string
  showFeedback: boolean
  quizzCompleted: boolean
  handleInputChange: (id: string, value: string) => void
  checkAnswer: (id: string) => boolean
}

const CodeInput = ({
  id,
  width,
  showFeedback,
  quizzCompleted,
  handleInputChange,
  checkAnswer,
}: CodeInputProps) => {
  const color = checkAnswer(id) ? 'green' : 'red'

  return (
    <Input
      type="text"
      id={id}
      style={{ width: `${width}px` }}
      className={`h-7 mx-1 
        ${
          showFeedback
            ? `text-${color}-500
              border-${color}-500                     
              focus-visible:ring-${color}-500         
              focus-visible:border-${color}-500       
              focus-visible:ring-offset-0          
              focus-visible:ring-2`
            : ''
        }
      `}
      onChange={(e) => handleInputChange(id, e.target.value)}
      autoComplete="off"
      readOnly={quizzCompleted}
    />
  )
}

export default CodeInput
