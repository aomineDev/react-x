import CodeBlock from '@/components/CodeBlock'
import OneSelect from '@/components/quizz/OneSelect'

export default function Lesson1Quizz2() {
  const opciones = {
    nivel: 'Quizz 2',
    pregunta: '¿Donde esta el error?',
    codigo: (
      <CodeBlock>{`export default function TarjetaProducto() {
  return (
    <div className="producto-card">
      <h2>Producto Destacado</h2>

      <img src="https://picsum.photos/200" alt="Foto del producto" />

      <p>Nombre: Audífonos Pro</p>

      <button className="btn-comprar">Comprar ahora</button>

      <label for="cantidad">Cantidad:</label>
      <input type="number" id="cantidad"/>

    </div>
  );
}
`}</CodeBlock>
    ),
    opciones: [
      { clave: 'd', texto: 'className está mal escrito' },
      { clave: 'c', texto: 'El <img> no tiene atributo alt' },
      { clave: 'b', texto: 'Falta un <div> envolviendo a todo el contenido' },
      { clave: 'a', texto: 'La etiqueta <label> usa for en lugar de htmlFor ' },
    ],
    correcta: 'a',
    next: '/lesson/1/3',
  }
  return (
    <>
      <OneSelect opciones={opciones} />
    </>
  )
}
