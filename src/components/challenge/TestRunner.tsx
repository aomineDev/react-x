import { useSandpack } from '@codesandbox/sandpack-react'
import { useEffect, useRef, useState } from 'react'
import { type Test } from '@/types/test.d'
import { Button } from '../ui/button'
import { Play, Check, X } from 'lucide-react'
import { Spinner } from '../ui/spinner'
import type { QuizzProps } from '@/types'
import { useParams } from 'react-router-dom'
import { useAuth } from '@/store'
import { challengeService } from '@/services/api/challengeService'

interface TestRunnerProps extends Omit<QuizzProps, 'onContinue'> {
  onClick: () => void
  initialFiles: Record<string, string>
  challengeId: string
}

const TestRunner = ({ onClick, onSuccess, initialFiles, challengeId }: TestRunnerProps) => {
  const [tests, setTests] = useState<Test>({})
  const [loading, setLoading] = useState(false)
  const [isTestsInitialized, setIsTestsInitialized] = useState(false)
  const [success, setSuccess] = useState(false)
  const testRef = useRef<Test>({})
  const { listen, sandpack } = useSandpack()
  const { lessonId } = useParams()
  const { user } = useAuth()
  const [currentSucess, setCurrentSucess] = useState(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const unsubscribe = listen((msg) => {
      if (msg.type === 'start') {
        clearTimeout(timeoutId.current ?? 0)
        timeoutId.current = null
        testRef.current = {}
        setTests({})
        setIsTestsInitialized(false)
        return
      }

      if (msg.type !== 'test') return

      if (msg.event === 'test_count') {
        if (timeoutId.current === null)
          timeoutId.current = setTimeout(() => setIsTestsInitialized(true), 500)
      }

      if (msg.event === 'test_end') {
        testRef.current[msg.test.name] = msg.test.status === 'fail' ? false : true
      }

      if (msg.event === 'total_test_end') {
        setTests({ ...testRef.current })
        setLoading(false)
        setIsTestsInitialized(false)
        if (Object.values(testRef.current).every((passed) => passed)) {
          setSuccess(true)
        }
      }
    })

    return unsubscribe
  }, [listen])

  useEffect(() => {
    if (currentSucess) return

    async function handleSuccess() {
      setCurrentSucess(true)
      const files = sandpack.files
      const modifiedFiles: Record<string, string> = {}

      Object.keys(initialFiles).forEach((key) => {
        if (files[key]) {
          modifiedFiles[key] = files[key].code
        }
      })
      if (user && lessonId) {
        if (user.currentLesson === parseInt(lessonId))
          await challengeService.create({ lesson: parseInt(lessonId), files: modifiedFiles })
        else {
          if (challengeId) await challengeService.update(challengeId, { files: modifiedFiles })
          else await challengeService.create({ lesson: parseInt(lessonId), files: modifiedFiles })
        }
      }

      await onSuccess()
    }

    if (success) handleSuccess()
  }, [success, onSuccess, lessonId, user, sandpack.files, initialFiles, currentSucess, challengeId])

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
              'flex items-center gap-2 text-sm font-semibold ' +
              (passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')
            }
          >
            {passed ? <Check /> : <X />} {test}
          </p>
        ))}
      </div>
    </>
  )
}

export default TestRunner
