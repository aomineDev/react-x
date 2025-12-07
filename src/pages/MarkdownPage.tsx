import CompleteCode from '@/components/quizz/CompleteCode'
import SafeLayout from '@/layout/SafeLayout'

const MarkdownPage = () => {
  const code = [
    "import { ___1_useState___ } from 'react';",
    '',
    'function Counter() {',
    '   const [count, setCount] = useState(0);',
    ' return <div>{ ___2_count___ }</div>;',
    '}',
  ]
  return (
    <SafeLayout>
      <CompleteCode code={code} answer="Completa el siguiente componente" />
    </SafeLayout>
  )
}

export default MarkdownPage
