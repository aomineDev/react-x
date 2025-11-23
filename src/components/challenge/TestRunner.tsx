import { useSandpack } from '@codesandbox/sandpack-react'
import { useEffect, useRef, useState } from 'react'
import { type Test } from '@/types/test.d'
import { Button } from '../ui/button'
import { Play, Check, X, Trophy, ArrowRight } from 'lucide-react'
import { Spinner } from '../ui/spinner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import Confetti from '@/components/Confetti'
import { Link } from 'react-router'

interface TestRunnerProps {
  onClick: () => void
}

const TestRunner = ({ onClick }: TestRunnerProps) => {
  const [tests, setTests] = useState<Test>({})
  const [loading, setLoading] = useState(false)
  const [isTestsInitialized, setIsTestsInitialized] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)

  const testRef = useRef<Test>({})
  const { listen } = useSandpack()

  useEffect(() => {
    const unsubscribe = listen((msg) => {
      if (msg.type === 'start') {
        testRef.current = {}
        setTests({})
        setIsTestsInitialized(false)
        return
      }

      if (msg.type !== 'test') return

      if (msg.event === 'test_count') setIsTestsInitialized(true)

      if (msg.event === 'test_end') {
        testRef.current[msg.test.name] = msg.test.status === 'fail' ? false : true
      }

      if (msg.event === 'total_test_end') {
        setTests({ ...testRef.current })
        setLoading(false)
        setIsTestsInitialized(false)
        if (Object.values(testRef.current).every((passed) => passed)) {
          setShowModal(true)
          setSuccess(true)
        }
      }
    })

    return unsubscribe
  }, [listen])

  const handleClick = () => {
    setLoading(true)
    onClick()
  }

  return (
    <>
      <div className="p-5 prose dark:prose-invert max-h-full min-w-full overflow-y-auto custom-scroll border-t border-t-gray-500">
        <Button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-400 text-white cursor-pointer mt-5"
          disabled={loading || !isTestsInitialized}
        >
          Ejecutar Tests {loading ? <Spinner /> : <Play />}
        </Button>
        {Object.keys(tests).length > 0 && <h2 className="mt-5">Resultados:</h2>}
        {Object.entries(tests).map(([test, passed]) => (
          <p
            key={test}
            className={
              'flex items-center gap-2 ' +
              (passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
            }
          >
            {passed ? <Check /> : <X />} {test}
          </p>
        ))}
      </div>

      <AlertDialog open={showModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¡Reto Superado!</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="p-5 flex justify-center">
                <Trophy className="text-yellow-500" size={75}></Trophy>
              </div>
              ¡Felicitaciones, has superado el reto! Puedes avanzar a la siguiente sección.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>
              <Link to="/" className="flex items-center gap-2">
                Continuar <ArrowRight />
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Confetti show={success && showModal} />
      <Confetti show={success && showModal} fall />
    </>
  )
}

export default TestRunner
