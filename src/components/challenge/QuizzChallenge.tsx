import type { QuizzChallengeConfig, QuizzConfig, QuizzProps } from '@/types'
import { useState } from 'react'
import { Tabs, TabsContent } from '../ui/tabs'
import { CompleteCode, MultiSelect, OneSelect, TrueFalse } from '../quizz'

interface QuizzChallengeProps extends QuizzChallengeConfig, QuizzProps {}

const QuizzChallenge = ({ quizzes, onSuccess, onContinue }: QuizzChallengeProps) => {
  const [activeTab, setActiveTab] = useState('quizz1')

  const tabs = quizzes.map((_quizz, index) => `quizz${index + 1}`)

  const goToNext = () => {
    const currentIndex = tabs.indexOf(activeTab)

    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1])
    else onContinue()
  }

  const handleSuccess = async (index: number) => {
    if (index === quizzes.length - 1) await onSuccess()
  }

  const renderQuizz = (config: QuizzConfig, index: number) => {
    const commonProps = {
      onSuccess: () => handleSuccess(index),
      onContinue: () => goToNext(),
    }

    switch (config.type) {
      case 'truefalse':
        return <TrueFalse {...config} {...commonProps} />
      case 'one-select':
        return <OneSelect {...config} {...commonProps} />
      case 'complete-code':
        return <CompleteCode {...config} {...commonProps} />
      case 'multi-select':
        return <MultiSelect {...config} {...commonProps} />
      default:
        return <div>Tipo de quiz no soportado</div>
    }
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {quizzes.map((quizz, index) => (
          <TabsContent key={index} value={tabs[index]}>
            {renderQuizz(quizz, index)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default QuizzChallenge
