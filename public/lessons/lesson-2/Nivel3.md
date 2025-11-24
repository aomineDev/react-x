# Children Props

Hasta ahora has pasado datos específicos como `nombre`, `edad`, etc. Pero ¿qué pasa cuando quieres que un componente **envuelva** a otros elementos?

- OBJETIVO:
  En este nivel, crearás un componenete que ira creciendo hasta volverse una tarjeta completa de de contratacion de empleados

---

## Paso 1 - Crea la tarjeta basica con `children`

Comienza creando una tarjeta básica en `TarjetaEmpleado.tsx` que puede envolver cualquier contenido

```jsx
export default function TarjetaEmpleado({ children }) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      Tarjeta de contratacion de empleados
      {children}
    </div>
  )
}
```

`children`, representa cualquier elemento que pongas dentro del componente, luego lo usaras asi, en el componente padre `App.js`, agregale tu nombre y mas informacion

```jsx
import TarjetaEmpleado from './TarjetaEmpleado.jsx'

export default function App() {
  return (
    <TarjetaEmpleado>
      <h1>Nombre del Empleado : Leonardo</h1>
      <h2>Apellido: Murillo Alejandro</h2>
      <h2>Edad: 19 años</h2>
    </TarjetaEmpleado>
  )
}
```

`    <h1>Nombre del Empleado : Leonardo</h1>
...` se envía como children y aparece dentro de la tarjeta, puedes agregarle tantos campos como quieras.

---

## Paso 2 - Añade props, como profesion y color

Ahora la `TajetaEmpleado.tsx` debe recibir nueva información del empleado para volverse más completa, para ello ay que modificarla

```jsx
export default function TarjetaEmpleado({ children, profesion, color })
return (
<>
  {
    children
  }
  <h2 style={{ color }}> Su profesion es {profesion}</h2>

</>

```

y lo usaras asi en `App.js`

```jsx
<Tarjeta profesion="Arquitecto" color="#4CAF50">
  <h1>Nombre del Empleado : Leonardo</h1>
  <h2>Apellido: Murillo Alejandro</h2>
  <h2>Edad: 19 años</h2>
</Tarjeta>
```

`El texto "Profesión: Arquitecto" se pinta en verde.
El contenido dentro de la tarjeta sigue viniendo del children
`

---

## Paso 3 - Resultado final de `TarjetaEmpleado.tsx`

```jsx showLineNumbers {1, 11}
export default function TarjetaEmpleado({ children, profesion, color }) {
  return (
    <>
      {children}
      <h2 style={{ color }}> Su profesion es {profesion}</h2>
    </>
  )
}
```

---

## Paso 4 - Resultado final de `App.js`

```jsx showLineNumbers
import TarjetaEmpleado from './TarjetaEmpleado.jsx'

export default function App() {
  return (
    <TarjetaEmpleado profesion="Arquitecto" color="#4CAF50">
      <h1>Nombre del Empleado : Leonardo</h1>
      <h2>Apellido: Murillo Alejandro</h2>
      <h2>Edad: 19 años</h2>
    </TarjetaEmpleado>
  )
}
```
