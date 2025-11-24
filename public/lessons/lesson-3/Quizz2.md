# QUIZZ 2 - Handlers (Eventos)

Tienes el siguiente componente:

```jsx
export default function App() {
  let contador = 0;

  function handleClick() {
    contador = contador + 1;
    console.log("Contador:", contador);
  }

  return <button onClick={_______}>Sumar</button>;
}
```

¿Qué debes escribir en el espacio para que el botón ejecute el handler?

- A) handleClick()
- B) handleClick \*
- C) "handleClick"
- D) () => handleClick()
