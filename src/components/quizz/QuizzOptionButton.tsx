import { Button } from '../ui/button'

interface QuizzOptionButtonProps<T> {
  isSelected: boolean
  onClick: (id: T) => void
  status: string
  text: string
  id: T
}

const QuizzOptionButton = <T,>({
  isSelected,
  onClick,
  status,
  text,
  id,
}: QuizzOptionButtonProps<T>) => {
  const getClaseOpcion = () => {
    if (isSelected) {
      if (status === 'success')
        return 'border-green-500 dark:border-green-500 bg-green-500/10 dark:bg-green-500/10 text-green-500 hover:bg-green-500/10 dark:hover:bg-green-500/10 hover:text-green-500'
      else if (status === 'error')
        return 'border-red-500 dark:border-red-500 bg-red-500/10 dark:bg-red-500/10 text-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/10 hover:text-red-500'
      else
        return 'border-blue-500 dark:border-blue-500 bg-blue-500/10 dark:bg-blue-500/10 text-blue-500 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 hover:text-blue-500'
    }

    return ''
  }

  return (
    <Button
      className={`w-full
                border-2
                border-b-4
                transition-all
                duration-200
                cursor-pointer
                whitespace-normal
                wrap-break-words
                text-left
                p-6  ${getClaseOpcion()}`}
      onClick={() => onClick(id)}
      disabled={status !== 'idle'}
      variant="outline"
    >
      {text}
    </Button>
  )
}

export default QuizzOptionButton
