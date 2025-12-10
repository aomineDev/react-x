# Validación Básica de Formularios en React

En este nivel aprenderás a realizar validaciones simples directamente desde el componente, sin librerías externas.

Esto es ideal para formularios pequeños o para entender los fundamentos antes de usar herramientas más avanzadas como React Hook Form o Formik.

A continuación, vamos a construir un formulario donde:

- El nombre es obligatorio

- El email debe contener un "@"

- Si algún campo es inválido → mostramos un mensaje de error

- Solo enviamos si todo está correcto

## Paso 1 — Crear estados para los inputs y los errores

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // estado para errores
  const [errors, setErrors] = useState({})

  // ...
}
```

## Paso 2 — Handlers que actualizan los valores

Inputs controlados:

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

## Paso 3 — Validar en el onSubmit

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function handleSubmit(e) {
  e.preventDefault()

  const newErrors = {}

  if (!name.trim()) {
    newErrors.name = 'El nombre es obligatorio'
  }

  if (!email.includes('@')) {
    newErrors.email = 'El correo debe contener @'
  }

  setErrors(newErrors)

  // si hay errores, no enviamos
  if (Object.keys(newErrors).length > 0) return

  alert('Formulario válido ✨')
}
```

## Paso 4 — Mostrar errores debajo de cada input

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
{
  errors.name && <p style={{ color: 'red' }}>{errors.name}</p>
}
{
  errors.email && <p style={{ color: 'red' }}>{errors.email}</p>
}
```

## Paso 5 — Resultado final

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    }

    if (!email.includes('@')) {
      newErrors.email = 'El correo debe contener @'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    alert('Formulario válido ✨')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Correo:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button>Enviar</button>
    </form>
  )
}
```

`Ahora es tu turno de implementarlo, gran trabajo`
