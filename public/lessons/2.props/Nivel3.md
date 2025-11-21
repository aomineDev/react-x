# Nivel 3: Children Props

Hasta ahora has pasado datos específicos como `nombre`, `edad`, etc. Pero ¿qué pasa cuando quieres que un componente **envuelva** a otros componentes o contenido?

- OBJETIVO:
  En este nivel, crearás un componenete que ira creciendo hasta volverse una tarjeta completa de de contratacion de empleados

---

1.  Crea la tarjeta basica con `children`

Comienza creando una tarjeta básica que puede envolver cualquier contenido:

```jsx
function TarjetaEmpleado({ children }) {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      Tarjeta de contratacion de empleados
      {children}
    </div>
  );
}
```

`children`, representa cualquier elemento que pongas dentro del componente

Luego lo usaras asi, agregale tu nombre:

```jsx
export default function App() {
  return (
    <Tarjeta>
      <h1>Empleado : Leonardo</h1>
    </Tarjeta>
  );
}
```

`<h1>Empleado: Leonardo</h1>` se envía como children y aparece dentro de la tarjeta.

---

2.  Añade props, como profesion y color

Ahora la tarjeta debe recibir nueva información del empleado para volverse más completa, para ello ay que modificarla:

```jsx
function Tarjeta({ children, profesion, color }) {}
```

Tambien modificas lo que recibe

```jsx
<h2 style={{ color }}> Su profesion es {profesion}</h2>;

{
  children;
}
```

y lo usaras asi

```jsx
<Tarjeta profesion="Arquitecto" color="#4CAF50">
  <p>Nombre: Leonardo</p>
</Tarjeta>
```

El texto "Profesión: Arquitecto" se pinta en verde.
El contenido dentro de la tarjeta sigue viniendo del children
