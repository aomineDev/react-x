# QUIZZ 4 — Ordena el código

Objetivo: Construir un ejemplo correcto que optimiza un componente que recibe props y evita renders innecesarios.

Organiza los bloques para formar un componente funcional que usa React.memo + useCallback correctamente:

## Bloques desordenados

- A.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
function Parent() {
```

- B.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
return <Child onIncrement={handleIncrement} count={count} />;
}
```

- C.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
export default React.memo(function Child({ count, onIncrement }) {
```

- D.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const [count, setCount] = useState(0)
```

- E.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
import React, { useState, useCallback } from 'react'
```

- F.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
</button>;
});
```

- G.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
<button onClick={onIncrement}>
  Incrementar ({count})
```

- H.

```jsx showLineNumbers title="App.tsx" /MarkdownHooks/
const handleIncrement = useCallback(() => {
  setCount((prev) => prev + 1)
}, [])
```
