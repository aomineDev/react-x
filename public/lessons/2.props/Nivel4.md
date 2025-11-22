# Nivel 4: Desestructuración y Valores por Defecto

Hasta ahora has escrito `props.nombre`, `props.edad` muchas veces. Existe una forma más limpia y profesional de trabajar con props.

- OBJETIVO:
  En este nivel, refactorizarás un componente de tarjeta de usuario para hacerlo más legible y robusto.

---

1.  El problema: código repetitivo

Observa cuántas veces se repite `props.`:

```jsx
export default function App() {
  return (
    <TarjetaUsuario
      nombre="Ana García"
      profesion="Desarrolladora Frontend"
      ubicacion="Lima, Perú"
      experiencia={5}
    />
  );
}

function TarjetaUsuario(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>{props.profesion}</p>
      <p>{props.ubicacion}</p>
      <p>{props.experiencia} años de experiencia</p>
    </div>
  );
}
```

El código funciona, pero escribir `props.` antes de cada propiedad hace el código más largo y difícil de leer. Imagina un componente con 10 o 15 props diferentes.

---

2.  Solución: desestructuración en los parámetros

Extrae las props directamente en los parámetros de la función:

```jsx
export default function App() {
  return (
    <TarjetaUsuario
      nombre="Ana García"
      profesion="Desarrolladora Frontend"
      ubicacion="Lima, Perú"
      experiencia={5}
    />
  );
}

function TarjetaUsuario({ nombre, profesion, ubicacion, experiencia }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{ubicacion}</p>
      <p>{experiencia} años de experiencia</p>
    </div>
  );
}
```

La desestructuración `{ nombre, profesion, ubicacion, experiencia }` extrae las propiedades del objeto `props` automáticamente. Ahora usas `nombre` en lugar de `props.nombre`. El código es más limpio y fácil de leer.

---

3.  Agrega valores por defecto

¿Qué pasa si no pasas alguna prop? Agrega valores por defecto:

```jsx
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
  );
}

function TarjetaUsuario({
  nombre,
  profesion,
  ubicacion = "Ubicación no especificada",
  experiencia = 0,
}) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p> {ubicacion}</p>
      <p> {experiencia} años de experiencia</p>
    </div>
  );
}
```

Los valores por defecto se definen con `propiedad = valor`. Si no se pasa `ubicacion`, usará "Ubicación no especificada". Si no se pasa `experiencia`, usará `0`. Esto previene errores y hace tu componente más robusto.

---
