import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import TrueFalse from '@/components/quizz/TrueFalse'
import OneSelect from '@/components/quizz/OneSelect'
import MultiSelect from '@/components/quizz/MultipleSelect'
import type { QuizConfig } from '@/types/quizConfig.d'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog'
import { ArrowRight, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import Confetti from '@/components/Confetti'

interface CarouselChallengeProps {
  quizzes: QuizConfig[]
  nivel?: string
  next: string
}

export default function CarouselChallenge({ quizzes, nivel, next }: CarouselChallengeProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set([0]))
  const [showModal, setShowModal] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleQuizComplete = (index: number) => {
    const newCompleted = new Set(completedQuizzes)
    newCompleted.add(index)

    if (index < quizzes.length - 1) {
      newCompleted.add(index + 1)
    }

    setCompletedQuizzes(newCompleted)

    if (index === quizzes.length - 1) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowModal(true)
      }, 500)
    } else {
      setTimeout(() => {
        api?.scrollNext()
      }, 1000)
    }
  }

  const canNavigateToSlide = (index: number) => {
    return completedQuizzes.has(index)
  }

  const renderQuiz = (config: QuizConfig, index: number) => {
    const commonProps = {
      onComplete: () => handleQuizComplete(index),
    }

    switch (config.type) {
      case 'truefalse':
        return <TrueFalse {...config} {...commonProps} />
      case 'one-select':
        return <OneSelect {...config} {...commonProps} />
      case 'complete-code':
        return <div>Complete Code no implementado aún</div>
      case 'multi-select':
        return <MultiSelect {...config} {...commonProps} />
      default:
        return <div>Tipo de quiz no soportado</div>
    }
  }

  return (
    <>
      <div className="w-full px-4 py-8">
        <h1 className="text-4xl capitalize font-bold primary-gradient">{nivel}</h1>

        <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {quizzes.map((quiz, i) => (
              <CarouselItem key={i}>{renderQuiz(quiz, i)}</CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4" disabled={current === 0} />
          <CarouselNext className="right-4" disabled={!canNavigateToSlide(current + 1)} />
        </Carousel>
      </div>

      <AlertDialog open={showModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Challenge superado!</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="p-5 flex justify-center">
                <Trophy className="text-yellow-500" size={75}></Trophy>
              </div>
              ¡Felicitaciones, has superado el reto! Puedes avanzar a la siguiente sección.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>
              <Link to={`${next}`} className="flex items-center gap-2">
                Continuar <ArrowRight />
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Confetti show={showConfetti && showModal} />
      <Confetti show={showConfetti && showModal} fall />
    </>
  )
}
