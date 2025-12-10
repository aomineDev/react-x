import type { QuizzStatus } from '@/types'
import { Button } from '../ui/button'
import { Check, RefreshCw, MoveRight } from 'lucide-react'
import ButtonContent from '../ButtonContent'

interface QuizzButtonProps {
  status: QuizzStatus
  disabled: boolean
  onClick: () => void
}

const QuizzButton = ({ status, disabled, onClick }: QuizzButtonProps) => {
  const btnClass =
    status === 'success'
      ? 'bg-green-600 hover:bg-green-700'
      : status === 'error'
      ? 'bg-red-600 hover:bg-red-700'
      : 'bg-blue-600 hover:bg-blue-700'

  return (
    <Button
      className={`cursor-pointer text-white w-full ${btnClass}`}
      size="lg"
      disabled={disabled}
      onClick={onClick}
    >
      {status === 'idle' && (
        <ButtonContent>
          Verificar <Check />
        </ButtonContent>
      )}
      {status === 'error' && (
        <ButtonContent>
          Reintentar <RefreshCw />
        </ButtonContent>
      )}
      {status === 'success' && (
        <ButtonContent>
          Continuar <MoveRight />
        </ButtonContent>
      )}
    </Button>
  )
}

export default QuizzButton
