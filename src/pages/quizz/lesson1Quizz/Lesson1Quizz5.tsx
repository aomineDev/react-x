import CodeBlock from '@/components/CodeBlock'
import OneSelect from '@/components/quizz/OneSelect'

export default function Lesson1Quizz5() {
  const opciones = {
    nivel: 'Quizz 5',
    pregunta: '¿Qué se mostrará en pantalla?',
    codigo: (
      <CodeBlock>{`export default function Productos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
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
}
`}</CodeBlock>
    ),
    opciones: [
      { clave: 'a', texto: 'Ambos productos con sus precios' },
      { clave: 'b', texto: 'Solo "Laptop - $1200' },
      { clave: 'c', texto: 'Solo los nombres sin precios' },
      { clave: 'd', texto: 'Error porque falta el índice en map' },
    ],
    correcta: 'a',
    next: '/lesson/2/1',
  }

  return <OneSelect opciones={opciones} />
}
