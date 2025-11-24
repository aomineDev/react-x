# Desestructuración y Valores por Defecto

Hasta ahora has escrito `props.nombre`, `props.edad` muchas veces. Existe una forma más limpia y profesional de trabajar con props.

- OBJETIVO:
  En este nivel, refactorizarás un componente de tarjeta de usuario para hacerlo más legible y robusto.

---

## 1. El problema: código repetitivo

Observa cuántas veces se repite `props.` en el componente `TarjetaUsuario.jsx`

```jsx showLineNumbers
export default function TarjetaUsuario(props) {
  return (
    <div>
      <h2>Su nombre es: {props.nombre}</h2>
      <p>Su profesion es: {props.profesion}</p>
      <p>Usted vive en: {props.ubicacion}</p>
      <p>Cuenta con: {props.experiencia} años de experiencia</p>
    </div>
  )
}
```

y en el componenete padre `App.js`

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.tsx'

export default function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Ana García"
        profesion="Desarrolladora Frontend"
        ubicacion="Lima, Perú"
        experiencia={5}
      />
    </div>
  )
}
```

El código funciona, pero escribir `props.` antes de cada propiedad hace el código más largo y difícil de leer. Imagina un componente con 10 o 15 props diferentes.

---

## Paso 1 - Desestructuración en los parámetros

Extrae las props directamente en los parámetros de la función en `TarjetaUsuario.tsx`

```jsx showLineNumbers
export default function TarjetaUsuario({ nombre, profesion, ubicacion, experiencia }) {
  return (
    <div className="tarjeta">
      <h2>Su nombre es: {nombre}</h2>
      <p>Su profesion es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```

y en `App.js` se usa normalmente

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.tsx'

export default function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Ana García"
        profesion="Desarrolladora Frontend"
        ubicacion="Lima, Perú"
        experiencia={5}
      />
    </div>
  )
}
```

La desestructuración `{ nombre, profesion, ubicacion, experiencia }` extrae las propiedades del objeto `props` automáticamente. Ahora usas `nombre` en lugar de `props.nombre`, hace el código es más limpio y fácil de leer.

---

## Paso 2 - Agrega valores por defecto

Crea otra tarjeta con otros campos y no le agreges ni la `ubicacion` ni `experiencia`

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.tsx'

export default function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Ana García"
        profesion="Desarrolladora Frontend"
        ubicacion="Lima, Perú"
        experiencia={5}
      />

      <TarjetaUsuario
        nombre="Carlos López"
        profesion="Diseñador UX"
        // Sin ubicacion ni experiencia
      />
    </div>
  )
}
```

y en `TarjetaUsuario.tsx` agregale una ubicacion por default

```jsx showLineNumbers
export default function TarjetaUsuario({
  nombre,
  profesion,
  ubicacion = 'Ubicación no especificada',
  experiencia = 0,
}) {
  return (
    <div className="tarjeta">
      <h2>Su nombre es: {nombre}</h2>
      <p>Su profesion es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```

Los valores por defecto se definen con `propiedad = valor`. Si no se pasa `ubicacion`, usará "Ubicación no especificada". Si no se pasa `experiencia`, usará `0`. Esto previene errores y hace tu componente más robusto.

---

## Paso 5 - Resultado final de `App.js`

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.tsx'

export default function App() {
  return (
    <div>
      <TarjetaUsuario
        nombre="Ana García"
        profesion="Desarrolladora Frontend"
        ubicacion="Lima, Perú"
        experiencia={5}
      />

      <TarjetaUsuario
        nombre="Carlos López"
        profesion="Diseñador UX"
        // Sin ubicacion ni experiencia
      />
    </div>
  )
}
```

---

## Paso 6 - Resultado final de `TarjeUsuario.tsx`

```jsx showLineNumbers
export default function TarjetaUsuario({
  nombre,
  profesion,
  ubicacion = 'Ubicación no especificada',
  experiencia = 0,
}) {
  return (
    <div className="tarjeta">
      <h2>Su nombre es: {nombre}</h2>
      <p>Su profesion es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```
