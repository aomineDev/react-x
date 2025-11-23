# QUIZZ 3 – ¿Cuándo React renderiza?

Observa el siguiente componente:

```js
export default function Counter() {
  console.log('Render!')

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  )
}
```

¿Cuál de las siguientes afirmaciones describe correctamente cuándo React vuelve a renderizar este componente?

Selecciona la opción correcta:

Opciones

- A) React renderiza cada vez que haces clic en el botón, sin importar si el estado cambia o no.

- B) React solo renderiza si el nuevo estado es diferente del estado anterior. Si setCount() recibe el mismo valor, NO renderiza. \*

- C) React renderiza cuando cualquier componente de la app cambia, sin importar si este componente tiene estado o no.

- D) React solo renderiza una vez: durante el renderizado inicial, y nunca más a menos que recargues la página.
