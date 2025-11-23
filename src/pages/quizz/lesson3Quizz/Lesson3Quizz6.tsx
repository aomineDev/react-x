// pages/LessonTrueFalse.tsx
import TrueFalse from '@/components/quizz/TrueFalse'

export default function Lesson3Quizz6() {
  const opciones = {
    nivel: 'Quizz - Verdadero/Falso',
    pregunta: '¿React actualiza el DOM inmediatamente cada vez que llamas a setState?',
    correcta: 'false',
  }

  return <TrueFalse pregunta={opciones.pregunta} nivel={opciones.nivel} correcta="false" />
}
