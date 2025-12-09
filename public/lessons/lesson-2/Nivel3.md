# Children Props

Hasta ahora has pasado datos específicos como `nombre`, `edad`, etc. Pero ¿qué pasa cuando quieres que un componente **envuelva** a otros elementos?

- **OBJETIVO:**
  En este nivel, crearás un componente que irá creciendo hasta volverse una tarjeta completa de contratación de empleados.

---

## ~1~ Crea la tarjeta básica con `children`

Comienza creando una tarjeta básica en `TarjetaEmpleado.jsx` que puede envolver cualquier contenido

```jsx showLineNumbers
export default function TarjetaEmpleado({ children }) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h3>Tarjeta de contratación de empleados</h3>
      {children}
    </div>
  )
}
```

> [!important] > `children` representa cualquier elemento que pongas dentro del componente. Es una prop especial de React.

Ahora en el componente padre `App.jsx`, agrégale tu nombre y más información

```jsx showLineNumbers
import TarjetaEmpleado from './TarjetaEmpleado.jsx'

export default function App() {
  return (
    <TarjetaEmpleado>
      <h1>Nombre del Empleado: Leonardo</h1>
      <h2>Apellido: Murillo Alejandro</h2>
      <h2>Edad: 19 años</h2>
    </TarjetaEmpleado>
  )
}
```

> [!note]
> Todo el contenido entre `<TarjetaEmpleado>` y `</TarjetaEmpleado>` se envía como `children` y aparece dentro de la tarjeta. Puedes agregarle tantos campos como quieras.

---

## ~2~ Añade props como profesión y color

Ahora la `TarjetaEmpleado.jsx` debe recibir nueva información del empleado para volverse más completa, para ello hay que modificarla

```jsx showLineNumbers {1, 12}
export default function TarjetaEmpleado({ children, profesion, color }) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h3>Tarjeta de contratación de empleados</h3>
      {children}
      <h2 style={{ color }}>Su profesión es {profesion}</h2>
    </div>
  )
}
```

Y lo usarás así en `App.jsx`

```jsx showLineNumbers {5}
import TarjetaEmpleado from './TarjetaEmpleado.jsx'

export default function App() {
  return (
    <TarjetaEmpleado profesion="Arquitecto" color="#4CAF50">
      <h1>Nombre del Empleado: Leonardo</h1>
      <h2>Apellido: Murillo Alejandro</h2>
      <h2>Edad: 19 años</h2>
    </TarjetaEmpleado>
  )
}
```

> [!tip]
> Puedes combinar `children` con otras props normales. El texto "Profesión: Arquitecto" se pinta en verde, mientras que el contenido dentro sigue viniendo del `children`.

---

## ~3~ Resultado final de `TarjetaEmpleado.jsx`

```jsx showLineNumbers
export default function TarjetaEmpleado({ children, profesion, color }) {
  return (
    <div
      style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <h3>Tarjeta de contratación de empleados</h3>
      {children}
      <h2 style={{ color }}>Su profesión es {profesion}</h2>
    </div>
  )
}
```

---

## ~4~ Resultado final de `App.jsx`

```jsx showLineNumbers
import TarjetaEmpleado from './TarjetaEmpleado.jsx'

export default function App() {
  return (
    <TarjetaEmpleado profesion="Arquitecto" color="#4CAF50">
      <h1>Nombre del Empleado: Leonardo</h1>
      <h2>Apellido: Murillo Alejandro</h2>
      <h2>Edad: 19 años</h2>
    </TarjetaEmpleado>
  )
}
```
