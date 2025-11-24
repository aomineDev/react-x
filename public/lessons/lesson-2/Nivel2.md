# Tipos de Datos en Props

En el nivel anterior solo pasaste strings y números. Ahora aprenderás a pasar arrays, objetos y booleanos para crear componentes más completos.

- Objetivo:
  En este nivel, crearás una ficha completa de un libro con diferentes tipos de datos.

---

## Paso 1 - Crea la ficha básica con strings y números

En el componente `App.js`, agrega el componente `FichaLibro.tsx` enviando el `titulo`, `autor` y `paginas`

```jsx
export default function App() {
  return <FichaLibro titulo="1984" autor="George Orwell" paginas={328} />
}
```

En el componente `FichaLibro.tsx`, muestralo

```jsx
export default function FichaLibro(props) {
  return (
    <div className="ficha-libro">
      <h2>Nombre del libro: {props.titulo}</h2>
      <p>Autor: {props.autor}</p>
      <p>Páginas: {props.paginas}</p>
    </div>
  )
}
```

Los strings como `"1984"` van entre comillas. Los números como `{328}` van entre llaves. React distingue entre tipos de datos automáticamente.

---

## Paso 2 - Agrega disponibilidad con un boolean

Ahora en el `FichaLibro.tsx`indica si el libro está disponible usando un valor booleano:

```jsx
<p style={{ color: props.disponible ? 'green' : 'red' }}>
  Disponibilidad:
  {props.disponible ? 'Disponible' : 'No disponible'}
</p>
```

Y en el componente padre `App.js`

```jsx
<FichaLibro
  {/* props anteriores */}
  disponible={true}
/>
```

---

## Paso 3 - Agrega las categorías con un array

Ahora en `FichaLibro.tsx` agrega las categorías del libro usando un array:

```jsx
<h3>Categoría:</h3>
<ul>
  {props.categorias.map((categoria, index) => (
    <li key={index}>{categoria}</li>
  ))}
</ul>
```

y en el componente padre `App.js`

```jsx
<FichaLibro
  {/* props anteriores */}
  categorias={["Ficción", "Distopía", "Clásico"]}
/>
```

---

## Paso 4 - Agrega información de la editorial con un objeto

Ahora en `FichaLibro.tsx`agrega los datos de la editorial usando un objeto:

```jsx
<div className="editorial">
  <h3>Editorial</h3>
  <p>Nombre: {props.editorial.nombre}</p>
  <p>País: {props.editorial.pais}</p>
  <p>Año de publicación: {props.editorial.año}</p>
</div>
```

y en el componente padre `App.js`

```jsx
<FichaLibro
  {/* props anteriores */}
  editorial={{
    nombre: "Penguin Books",
    pais: "Reino Unido",
    año: 1949,
  }}
/>
```

---

## Paso 5 - Resultado final en `FichaLibro.tsx`

```jsx
export default function FichaLibro(props) {
  return (
    <div className="ficha-libro">
      <h2>Nombre del libro: {props.titulo}</h2>
      <p>Autor: {props.autor}</p>
      <p>Páginas: {props.paginas}</p>
      <p style={{ color: props.disponible ? 'green' : 'red' }}>
        {' '}
        Disponible:
        {props.disponible ? 'Disponible' : 'No disponible'}
      </p>
      <h3>Categoría:</h3>
      <ul>
        {props.categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
      <div className="editorial">
        <h3>Editorial</h3>
        <p>Nombre: {props.editorial.nombre}</p>
        <p>País: {props.editorial.pais}</p>
        <p>Año de publicación: {props.editorial.año}</p>
      </div>
    </div>
  )
}
```

---

## Paso 6 - Resultado final en `App.js`

```jsx
import FichaLibro from './FichaLibro.jsx'
export default function App() {
  return (
    <FichaLibro
      titulo="1984"
      autor="George Orwell"
      paginas={328}
      disponible={true}
      categorias={['Ficción', 'Distopía', 'Clásico']}
      editorial={{
        nombre: 'Penguin Books',
        pais: 'Reino Unido',
        año: 1949,
      }}
    />
  )
}
```
