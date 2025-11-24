import CodeBlock from '@/components/CodeBlock'
import OneSelect from '@/components/quizz/OneSelect'

export default function Lesson1Quizz4() {
  const opciones = {
    nivel: 'Quizz 4',
    pregunta: '¿Qué se mostrará en pantalla?',
    codigo: (
      <CodeBlock>{`export default function Producto() {
  const tieneDescuento = false;
  const stock = 3;
  const precio = 2000;

  return (
    <div>
      {
        tieneDescuento
          ? <p>S/ {precio - precio * 0.20} con descuento</p>
          : <p>Sin descuento: S/ {precio}</p>
      }

      {
        stock < 5 && <p>¡Solo quedan {stock} unidades!</p>
      }
    </div>
  );
}
`}</CodeBlock>
    ),
    opciones: [
      { clave: 'a', texto: 'S/ 1600 con descuento' },
      { clave: 'b', texto: 'Sin descuento: S/ 2000 y ¡Solo quedan 3 unidades!' },
      { clave: 'c', texto: 'Sin descuento: S/ 2000' },
      { clave: 'd', texto: '¡Solo quedan 3 unidades!' },
    ],
    correcta: 'b',
    next: '/lesson/1/5',
  }

  return <OneSelect opciones={opciones} />
}
