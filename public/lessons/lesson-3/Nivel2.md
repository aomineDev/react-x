# Nivel 2 - Handlers (Funciones manejadoras de eventos)

Los handlers son funciones que React ejecuta cuando ocurre un evento en la UI.

Son el puente entre la interacción del usuario y la lógica del componente.

Un handler puede leer datos, actualizar el estado, validar información o ejecutar cualquier lógica que necesites.

> React no llama automáticamente a la función: tú le pasas la función, y React decide cuándo ejecutarla.

## Paso 1 - Crea el componente y define una función manejadora

Primero, define tu componente y dentro de él crea una función llamada `handleClick`.

```jsx showLineNumbers {2-4} title="App.tsx" /MarkdownHooks/
export default function App() {
  function handleClick() {
    console.log('Botón presionado')
  }

  return <div>Componente cargado</div>
}
```

En este punto:

- Ya existe un handler.
- Aún no está conectado a nada.
- No se ejecutará hasta que tú lo enlaces a un evento.

## Paso 2 - Enlaza el handler a un botón usando onClick

Ahora conecta la función al evento del botón.

> Recuerda: pasas la función, no la ejecutas → es decir, sin paréntesis.

```jsx showLineNumbers {6} title="App.tsx" /MarkdownHooks/
export default function App() {
  function handleClick() {
    console.log('Botón presionado')
  }

  return <button onClick={handleClick}>Presionar</button>
}
```

Ahora sí:

- React ejecutará handleClick cuando el usuario haga clic.

- `onClick={handleClick}` significa:

> “React, aquí tienes la función. Llama a esta función cuando ocurra el clic.”

## Paso 3 - Usa datos dentro del handler

Los handlers viven dentro del componente para poder usar props, estado o datos internos.

Agreguemos un mensaje dinámico:

```jsx showLineNumbers {2} title="App.tsx" /MarkdownHooks/
export default function App() {
  const mensaje = 'Gracias por hacer clic'

  function handleClick() {
    console.log(mensaje)
  }

  return <button onClick={handleClick}>Presionar</button>
}
```

Gracias a estar dentro del componente, el handler puede acceder a:

- mensaje
- props
- state
- cualquier valor que declares dentro del componente

`Ahora es tu turno de implementarlo, gran trabajo`
