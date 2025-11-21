# Nivel 6 – Compartir Estado Entre Componentes en React

Cuando tienes dos o más componentes que necesitan acceder o modificar el mismo estado, NO debes duplicar ese estado.

La solución correcta es “elevar el estado” (lifting state up).

Idea clave: El estado debe vivir en el componente más cercano que necesite compartirlo.

Vamos a construir un ejemplo práctico:

Queremos dos componentes:

- CounterButton → suma +1 cada vez que lo presionas

- InfoPanel → muestra el valor actual del contador

Ambos dependen del mismo estado, por lo tanto el estado debe vivir en el componente padre.

## Paso 1 — Componente padre que guarda el estado

```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterButton count={count} setCount={setCount} />
      <InfoPanel count={count} />
    </div>
  );
}
```

Aquí ocurre la magia:

- App es dueño del estado

- CounterButton recibe el estado y una función para actualizarlo

- InfoPanel recibe solo el valor para mostrarlo

## Paso 2 — Componente que modifica el estado

```jsx
function CounterButton({ count, setCount }) {
  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Sumar (+1)</button>;
}
```

## Paso 3 — Componente que solo lee el estado

```jsx
function InfoPanel({ count }) {
  return <p>Valor actual del contador: {count}</p>;
}
```

## Paso 4 — Resultado final

```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterButton count={count} setCount={setCount} />
      <InfoPanel count={count} />
    </div>
  );
}

function CounterButton({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Sumar (+1)</button>;
}

function InfoPanel({ count }) {
  return <p>Valor actual del contador: {count}</p>;
}
```

**Ahora es tu turno de implementarlo, gran trabajo**
