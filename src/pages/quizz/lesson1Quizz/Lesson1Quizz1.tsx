import OneSelect from '@/components/quizz/OneSelect'
export default function Lesson1Quizz1() {
  const opciones = {
    nivel: 'Quizz 1',
    pregunta: '¿Cuantos elementos contenedores puede retornar React',
    opciones: [
      { clave: 'a', texto: '1' },
      { clave: 'b', texto: 'Madrid' },
      { clave: 'c', texto: 'París' },
      { clave: 'd', texto: 'Lima' },
    ],
    correcta: 'd',
    next: '/lesson/1/2',
  }
  return (
    <>
      <OneSelect opciones={opciones} />
    </>
  )
}
