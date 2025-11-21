# Propagación de Datos Global

Cuando necesitas compartir datos entre múltiples componentes que están en diferentes niveles del árbol, pasar props puede volverse tedioso. Este problema se conoce como "prop drilling".

Para compartir datos globalmente sin pasar props, React proporciona la API de Context con el hook `useContext`.

En esta actividad aprenderás a usar Context para compartir datos globalmente.

Context permite compartir valores entre componentes sin pasar props manualmente. Aquí un ejemplo:

- Importamos nuestros hooks
```javascript
import { createContext, useContext, useState } from 'react';
```
## 1. `createContext`
```javascript
const TemaContext = createContext();
```
- Crea un contexto llamado TemaContext.
- Sirve para compartir datos (en este caso, el tema) entre componentes.

## 2. Estado en el componente principal
```javascript
export default function App() {
  const [tema, setTema] = useState('claro');
 ```
 - Se define un estado `tema` con valor inicial `"claro"`.
- `setTema` es la función para cambiar el estado.

## 3. Proveedor del contexto
```javascript
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <ComponenteHijo />
    </TemaContext.Provider>
  );
```
- El `Provider` envuelve a `ComponenteHijo`.
- Proporciona el valor { `tema`, `setTema` } a todos los componentes dentro de él.
- Así, `ComponenteHijo` puede acceder directamente al tema y a la función para cambiarlo.

## 4.Consumidor del contexto
```javascript
function ComponenteHijo() {
  const { tema, setTema } = useContext(TemaContext);
```
- `useContext` permite acceder al valor del contexto (`tema` y `setTema`).
- Ya no es necesario recibirlos como props.

## 5.Componente hijo
```javascript
  return <button onClick={() => setTema('oscuro')}>{tema}</button>;
```
- Muestra un botón con el texto del tema actual (`claro` u `oscuro`).
- Al hacer clic, cambia el tema a `"oscuro"` usando `setTema`.

Tres pasos para usar Context:

- **Crear el Context**: Usa `createContext()` fuera del componente
- **Proveer el valor**: Envuelve componentes con `Provider` y pasa el valor
- **Consumir el valor**: Usa `useContext()` en cualquier componente hijo

---

## Crear el Context

Ya está creado `TemaContext` usando `createContext()`.

## Proveer el valor en el Provider

El `TemaContext.Provider` ya está configurado con el valor `{ tema, cambiarTema }`.

## Consumir el Context en los componentes

En `Header` y `Contenido`, usa `useContext(TemaContext)` para obtener `tema` y `cambiarTema`.

Implementa:
```javascript
const { tema, cambiarTema } = useContext(TemaContext);
```

---

Implementa el código. Observa cómo ambos componentes pueden acceder al tema sin necesidad de pasar props.

Has aprendido a usar Context. A continuación aprenderás sobre efectos síncronos con useLayoutEffect y hooks de concurrencia.