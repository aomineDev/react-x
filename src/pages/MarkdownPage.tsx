import CompleteCode from '@/components/quizz/CompleteCode'
import SafeLayout from '@/layout/SafeLayout'
import type { CompleteCodeQuizz } from '@/types/quizConfig'

const MarkdownPage = () => {
  const code = [
    "import { ___1_useState___ } from 'react';",
    '',
    'function Counter() {',
    '   const [count, setCount] = useState(0);',
    ' return <div>{ ___2_count___ }</div>;',
    '}',
  ]

  const config: CompleteCodeQuizz = {
    type: 'complete-code',
    code,
    answer: 'Completa el siguiente componente',
    nivel: '1',
    next: '/lesson/0/1',
  }
  return (
    <SafeLayout>
      <CompleteCode {...config} />
    </SafeLayout>
  )
}

export default MarkdownPage
