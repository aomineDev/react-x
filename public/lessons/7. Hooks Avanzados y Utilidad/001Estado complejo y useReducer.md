# Estado Complejo y useReducer

Manejar estados simples con `useState` funciona bien, pero cuando tu estado tiene múltiples valores relacionados o necesitas actualizaciones complejas basadas en acciones, el código puede volverse difícil de mantener.

Para gestionar estados complejos con lógica de transición, React proporciona el hook `useReducer`.

En esta actividad aprenderás a usar `useReducer` para manejar estados complejos.

Un reducer es una función que recibe el estado actual y una acción, y retorna el nuevo estado. Aquí un ejemplo:

## Definicion del reducer
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { count: state.count + 1 };
    case 'decrementar':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```
- El `switch` revisa el tipo de acción enviada.
- Cada caso devuelve un nuevo objeto de estado, nunca se modifica el existente.
- Si la acción no existe, se devuelve el estado actual.

## Como usar `useReducer` en el componente
```javascript
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
    </div>
  );
}
```
- `useReducer(reducer, { count: 0 })` inicializa el estado con `count: 0`.

- `state` contiene el estado actualizado.


## Enviar acciones con dispatch
```javascript
<button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
```
- `dispatch` permite enviar acciones al reducer.

---

## Crear la función reducer

Implementa la función `reducer` que maneje tres acciones:
- `'agregar'`: Incrementa `tareas` en 1
- `'completar'`: Incrementa `completadas` en 1
- `'reset'`: Reinicia ambos valores a 0

Usa esta estructura:
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'agregar':
      return { ...state, tareas: state.tareas + 1 };
    // Completa los demás casos
  }
}
```
## Explicacion
1. Se ejecuta dispatch({ type: 'incrementar' })
2. El reducer recibe la acción
3. Ejecuta el caso "incrementar"
4. Retorna un nuevo estado con count + 1
5. El componente se vuelve a renderizar mostrando el nuevo valor

## Usar useReducer en el componente

Reemplaza los comentarios con:
1. Evita que **completadas** supere el total de tareas.
```javascript
completadas: state.completadas < state.tareas ? state.completadas + 1 : state.completadas
```
2. `const [state, dispatch] = useReducer(reducer, { tareas: 0, completadas: 0 });`
3. Usa `dispatch({ type: 'agregar' })` en el primer botón
4. Usa `dispatch({ type: 'completar' })` en el segundo botón
5. Usa `dispatch({ type: 'reset' })` en el tercer botón

---

Implementa el código. Observa cómo useReducer centraliza la lógica del estado en una sola función.

Has aprendido a usar useReducer. A continuación aprenderás a acceder al DOM directamente con useRef.