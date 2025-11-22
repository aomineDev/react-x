# Efectos de Renderizado y Concurrencia

React 18 introdujo nuevas capacidades para manejar actualizaciones de interfaz de manera más eficiente. A veces necesitas que un efecto se ejecute de manera síncrona antes de que el navegador pinte la pantalla, y otras veces quieres marcar actualizaciones como no urgentes.

Para estos casos avanzados, React proporciona `useLayoutEffect`, `useTransition` y `useDeferredValue`.

En esta actividad aprenderás a usar estos hooks modernos de React.

`useLayoutEffect` es similar a `useEffect`, pero se ejecuta síncronamente después de todas las mutaciones del DOM. Aquí un ejemplo con `useTransition`:

## Paso 1 - **Importación de hooks**
```javascript
import { useState, useTransition } from 'react';
```
- `useTransition` permite marcar actualizaciones como no urgentes, evitando bloquear la UI.

## Paso 2 - **Estados del componente**
```javascript
export default function App() {
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]);
  const [isPending, startTransition] = useTransition();
```
- `input `- estado del texto.
- `lista `- lista grande que “pesa” en rendimiento.
- `startTransition `- permite hacer actualizaciones sin bloquear el input.

## Paso 3 - **Manejador del input**
```javascript
const manejarCambio = (e) => {
  setInput(e.target.value);
```
- La actualización del input es urgente (UI inmediata).

## Paso 4 - **Actualización no urgente con startTransition**
```javascript
  startTransition(() => {
    const nuevaLista = Array(20000).fill(e.target.value);
    setLista(nuevaLista);
  });
};
```
- Se crea una lista de 20,000 elementos.
- Como es pesado, se marca como no urgente usando `startTransition`.
- Evita que la UI se congele al escribir.

## Paso 5 - **Render simple**
```javascript 
return <input value={input} onChange={manejarCambio} />;
```
- El input siempre responde rápido gracias a `useTransition`.

---

## Implementar useTransition

Usa `useTransition` para crear `isPending` y `startTransition`:
```javascript
const [isPending, startTransition] = useTransition();
```

## Envolver la actualización costosa

En la función `filtrarItems`, envuelve la actualización de `itemsFiltrados` con `startTransition`:
```javascript
startTransition(() => {
  const filtrados = todosLosItems.filter(item => 
    item.toLowerCase().includes(busqueda.toLowerCase())
  );
  setItemsFiltrados(filtrados);
});
```
---

Implementa el código. Observa cómo la interfaz permanece responsiva mientras se actualiza la lista filtrada.

Has completado el módulo de Hooks Avanzados. Ahora dominas las herramientas de optimización y gestión de estado de React, listo para aprender patrones avanzados.