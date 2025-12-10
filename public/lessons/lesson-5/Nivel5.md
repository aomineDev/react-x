# Evitar re-renders innecesarios en React

Cuando una app crece, lo que más suele causar lentitud no es “mucho código”, sino componentes que se vuelven a renderizar cuando no deberían.

React re-renderiza un componente cuando:

- Cambian sus props

- Cambia su estado

- Cambia el contexto al que está suscrito

- Su padre vuelve a renderizar

> Evitar renders innecesarios NO significa “evitar renders por completo”, sino evitar los que no aportan nada.

## ~1~ Creamos 3 componentes

Añadimos una App donde tres componentes se están re-renderizando aunque no deberían.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <ProductList />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

function Header() {
  console.log('Header render')
  return <h1>Tienda</h1>
}

function ProductList() {
  console.log('ProductList render')
  return (
    <ul>
      <li>Mouse</li>
      <li>Teclado</li>
    </ul>
  )
}
```

Aquí todo se re-renderiza cuando solo cambia `count`.

## ~2~ Detectar re-renders usando la consola

En la consola vemos lo siguiente:

```nota
Header render
ProductList render
```

aunque nunca cambiaron.

> ¿Por qué sucede? React re-renderiza a todos los hijos del componente que cambió de estado (App).

## ~3~ Corregir con memo

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const Header = React.memo(function Header() {
  console.log('Header render')
  return <h1>Tienda</h1>
})
```

Ahora ya no renderiza Header.

## ~4~ Evitar renders por props nuevas

Por ejemplo:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<ProductCard product={{ name: 'Mouse' }} />
```

Aquí React cree que { name: "Mouse" } es NUEVO en cada render → re-render innecesario.

**Solución**: memorizar el objeto.

> React re-renderiza cuando el componente o sus props cambian de referencia.
