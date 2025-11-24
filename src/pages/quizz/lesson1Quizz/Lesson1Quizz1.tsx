import OneSelect from '@/components/quizz/OneSelect'
import CodeBlock from '@/components/CodeBlock'
export default function Lesson1Quizz1() {
  const opciones = {
    nivel: 'Quizz 1',
    pregunta: '¿Donde esta el error?',
    codigo: (
      <CodeBlock>{
        /*html*/ `function Productos() {
  const productos = [ { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
  ];

  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          {producto.nombre} - {producto.precio}
        </li>
      ))}
    </ul>
  );
}`
      }</CodeBlock>
    ),
    opciones: [
      { clave: 'a', texto: 'Roma' },
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
