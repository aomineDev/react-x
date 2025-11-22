import { useSandpack } from '@codesandbox/sandpack-react'
import { useEffect, useRef, useState } from 'react'
import { type Test } from '@/types/test.d'

const TestRunner = () => {
  const [tests, setTests] = useState<Test>({})

  const testRef = useRef<Test>({})
  const { listen } = useSandpack()

  useEffect(() => {
    const unsubscribe = listen((msg) => {
      if (msg.type === 'test') {
        console.log(msg)
        if (msg.event === 'test_end') {
          const status = msg.test.status
          console.log(status, ` - status === 'fail': `, status === 'fail')
          testRef.current[msg.test.name] = msg.test.status === 'fail' ? false : true
        }

        if (msg.event === 'total_test_end') {
          setTests({ ...testRef.current })
        }
      }
    })

    return unsubscribe
  }, [listen])

  return (
    <div>
      <h2>Tests:</h2>
      {Object.entries(tests).map(([test, passed]) => (
        <p key={test}>
          {test}: {passed ? 'passed' : 'failed'}
        </p>
      ))}
    </div>
  )
}

export default TestRunner
