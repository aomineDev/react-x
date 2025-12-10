# Estado en React con useState

En muchos componentes necesitas manejar información que cambia a medida que el usuario interactúa. React maneja estos cambios usando estado, una especie de pequeña “memoria viva” dentro del componente.

> [!note]
> Cuando el estado cambia, React vuelve a renderizar el componente para mostrar la nueva información.

## ~1~ Importar useState

Primero traemos el hook desde React:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'
```

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

`Ahora es tu turno de implementarlo, gran trabajo`
