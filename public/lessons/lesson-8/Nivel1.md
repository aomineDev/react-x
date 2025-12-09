# props.children: Componentes Contenedores

Crear componentes reutilizables es fundamental en React. Muchas veces necesitas un componente que funcione como un "contenedor" que puede recibir cualquier contenido dentro de él, sin saber de antemano qué contenido será.

Para crear componentes que envuelven contenido dinámico, React proporciona la prop especial `children`.

En esta actividad aprenderás a usar `props.children` para crear componentes contenedores.

`props.children` contiene todo lo que colocas entre las etiquetas de apertura y cierre de un componente. Aquí un ejemplo:

## ~1~ Componente contenedor usando `children`

```javascript showLineNumbers
function Tarjeta({ children }) {
  return <div style={{ border: '1px solid #ccc', padding: '20px' }}> {children} </div>
}
```

- `{ children }`: React lo pasa automáticamente.
- Representa todo lo que coloques dentro del componente.
- Permite crear componentes genéricos y reutilizables

## ~2~ Uso del componente contenedor

```javascript showLineNumbers
export default function App() {
  return (
    <Tarjeta>
      <h2>Título</h2>
      <p>Contenido de la tarjeta</p>
    </Tarjeta>
  )
}
```

- Todo lo que está dentro de `<Tarjeta> ... </Tarjeta>` se envía como children.

---

## Crear el componente Tarjeta

Implementa el componente `Tarjeta` que reciba `children` y lo renderice dentro de un contenedor con estilos:

```javascript showLineNumbers {12}
function Tarjeta({ children }) {
  return (
    <div
      style={{
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#ffffff',
      }}
    >
      {children}
    </div>
  )
}
```

## Crear el componente Alerta

Implementa el componente `Alerta` que reciba `children` y `tipo` (puede ser 'info', 'exito', o 'error'):

```javascript showLineNumbers
function Alerta({ children, tipo = 'info' }) {
  const colores = {
    info: '#dbeafe',
    exito: '#dcfce7',
    error: '#fee2e2',
  }

  return (
    <div
      style={{
        backgroundColor: colores[tipo],
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '15px',
      }}
    >
      {children}
    </div>
  )
}
```

## Usar los componentes en App

Usa ambos componentes con diferente contenido para demostrar su reutilización.

---

Implementa el código. Observa cómo el mismo componente puede mostrar diferente contenido sin modificar su implementación.

Has aprendido a usar props.children. A continuación aprenderás a crear layouts complejos con este patrón.
