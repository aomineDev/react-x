# QUIZZ – Predecir el Output

Pregunta

Observa el siguiente componente:

```js
import { useState } from "react";

export default function CounterTest() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}
```

¿Qué número se mostrará en pantalla después del clic?

- A) 1 \*
- B) 2
- C) 3
- D) 4

```
Cuando se hace clic:

setCount(count + 1) → usa el valor actual 0 → programa un cambio a 1.

Segundo setCount(count + 1) → sigue usando 0 (porque el estado aún no ha cambiado) → programa un cambio a 1 otra vez.
```
