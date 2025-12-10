# Estado en React con useState

En muchos componentes necesitas manejar información que cambia a medida que el usuario interactúa. React maneja estos cambios usando estado, una especie de pequeña “memoria viva” dentro del componente.

> [!note]
> Cuando el estado cambia, React vuelve a renderizar el componente para mostrar la nueva información.

> [!tip]
> El estado permite que tus componentes sean dinámicos y reactivos. Cada cambio de estado provoca un re-render del componente, pero React optimiza el proceso usando el **DOM virtual**.

## ~1~ Importar useState

Primero traemos el hook desde React:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'
```

> [!important]
> Siempre importa useState desde 'react' antes de usarlo. De lo contrario, el hook no funcionará y el componente lanzará errores.

## ~2~ Declarar estado

Construyamos un pequeño contador de `Likes`, como si estuviéramos armando un prototipo para una app social.

Declaramos el estado dentro del componente:

```jsx showLineNumbers {4} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [likes, setLikes] = useState(0)

  return <button>Likes: {likes}</button>
}
```

- `likes` es el valor actual
- `setLikes` es la función que cambia ese valor
- `useState(0)` indica que el contador inicia en 0

> [!note]
> likes es el valor actual, setLikes la función que lo cambia, y useState(0) indica que el contador inicia en 0.

> [!tip]
> Puedes usar cualquier tipo de valor en el estado: números, strings, booleanos, arrays u objetos. React los manejará correctamente si usas setEstado.

> [!important]
> La convención es nombrar variables de estado como `[algo, setAlgo]` usando desestructuración de arrays.

## ~3~ Actualizar estado al hacer clic

Ahora le damos vida real: cuando el usuario hace clic, incrementamos los likes.

```jsx showLineNumbers {6-8,10} title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes(likes + 1)
  }

  return <button onClick={handleLike}>Likes: {likes}</button>
}
```

Aquí pasa algo crucial:

- Llamas a setLikes(likes + 1)
- El estado cambia
- React vuelve a renderizar
- El botón muestra el nuevo número

> [!note]
> Cada vez que llamas setLikes(likes + 1), React vuelve a renderizar el componente y muestra el nuevo número.

> [!tip]
> Puedes usar funciones dentro de setLikes para manejar actualizaciones basadas en el estado anterior, útil si hay múltiples actualizaciones rápidas:

`Ahora es tu turno de implementarlo, gran trabajo`
