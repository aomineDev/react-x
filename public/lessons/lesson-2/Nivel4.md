# Desestructuración y Valores por Defecto

Hasta ahora has escrito `props.nombre`, `props.edad` muchas veces. Existe una forma más limpia y profesional de trabajar con props.

- **OBJETIVO:**
  En este nivel, refactorizarás un componente de tarjeta de usuario para hacerlo más legible y robusto.

---

## <span class='custom-order'>1</span> El problema: código repetitivo

Observa cuántas veces se repite `props.` en el componente `TarjetaUsuario.jsx`

```jsx showLineNumbers
export default function TarjetaUsuario(props) {
  return (
    <div>
      <h2>Su nombre es: {props.nombre}</h2>
      <p>Su profesión es: {props.profesion}</p>
      <p>Usted vive en: {props.ubicacion}</p>
      <p>Cuenta con: {props.experiencia} años de experiencia</p>
    </div>
  )
}
```

Y en el componente padre `App.jsx`

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.jsx'

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

> [!note]
> El código funciona, pero escribir `props.` antes de cada propiedad hace el código más largo y difícil de leer. Imagina un componente con 10 o 15 props diferentes.

---

## <span class='custom-order'>2</span> Desestructuración en los parámetros

Extrae las props directamente en los parámetros de la función en `TarjetaUsuario.jsx`

```jsx showLineNumbers {1}
export default function TarjetaUsuario({ nombre, profesion, ubicacion, experiencia }) {
  return (
    <div className="tarjeta">
      <h2>Su nombre es: {nombre}</h2>
      <p>Su profesión es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```

Y en `App.jsx` se usa normalmente

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.jsx'

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

> [!important]
> La desestructuración `{ nombre, profesion, ubicacion, experiencia }` extrae las propiedades del objeto `props` automáticamente. Ahora usas `nombre` en lugar de `props.nombre`, haciendo el código más limpio y fácil de leer.

---

## <span class='custom-order'>3</span> Agrega valores por defecto

Crea otra tarjeta con otros campos y no le agregues ni la `ubicacion` ni `experiencia`

```jsx showLineNumbers {13, 14, 15}
import TarjetaUsuario from './TarjetaUsuario.jsx'

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

Y en `TarjetaUsuario.jsx` agrégale una ubicación por defecto

```jsx showLineNumbers {4, 5}
export default function TarjetaUsuario({
  nombre,
  profesion,
  ubicacion = 'Ubicación no especificada',
  experiencia = 0,
}) {
  return (
    <div className="tarjeta">
      <h2>Su nombre es: {nombre}</h2>
      <p>Su profesión es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```

> [!tip]
> Los valores por defecto se definen con `propiedad = valor`. Si no se pasa `ubicacion`, usará "Ubicación no especificada". Si no se pasa `experiencia`, usará `0`. Esto previene errores y hace tu componente más robusto.

---

## <span class='custom-order'>4</span> Resultado final de `App.jsx`

```jsx showLineNumbers
import TarjetaUsuario from './TarjetaUsuario.jsx'

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

## <span class='custom-order'>5</span> Resultado final de `TarjetaUsuario.jsx`

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
      <p>Su profesión es: {profesion}</p>
      <p>Usted vive en: {ubicacion}</p>
      <p>Cuenta con: {experiencia} años de experiencia</p>
    </div>
  )
}
```
