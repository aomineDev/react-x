# Tipos de Datos en Props

En el nivel anterior solo pasaste strings y números. Ahora aprenderás a pasar arrays, objetos y booleanos para crear componentes más completos.

- **OBJETIVO:**
  En este nivel, crearás una ficha completa de un libro con diferentes tipos de datos.

---

## <span class='custom-order'>1</span> Crea la ficha básica con strings y números

En el componente `App.jsx`, agrega el componente `FichaLibro.jsx` enviando el título, autor y páginas

```jsx showLineNumbers {2}
export default function App() {
  return <FichaLibro titulo="1984" autor="George Orwell" paginas={328} />
}
```

En el componente `FichaLibro.jsx`, muéstralo

```jsx showLineNumbers {4, 5, 6}
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

> [!note]
> Los strings van entre comillas `"texto"` y los números entre llaves `{123}`. React los distingue automáticamente.

---

## <span class='custom-order'>2</span> Agrega disponibilidad con un boolean

Ahora en `FichaLibro.jsx` indica si el libro está disponible usando un valor booleano:

```jsx showLineNumbers {1, 3}
<p style={{ color: props.disponible ? 'green' : 'red' }}>
  Disponibilidad:
  {props.disponible ? 'Disponible' : 'No disponible'}
</p>
```

Y en el componente padre `App.jsx`

```jsx showLineNumbers {3}
<FichaLibro
  {/* props anteriores */}
  disponible={true}
/>
```

> [!important]
> Los booleanos siempre van entre llaves: `{true}` o `{false}`. Son útiles para renderizado condicional.

---

## <span class='custom-order'>3</span> Agrega las categorías con un array

Ahora en `FichaLibro.jsx` agrega las categorías del libro usando un array:

```jsx showLineNumbers {3, 4}
<h3>Categoría:</h3>
<ul>
  {props.categorias.map((categoria, index) => (
    <li key={index}>{categoria}</li>
  ))}
</ul>
```

Y en el componente padre `App.jsx`

```jsx showLineNumbers {3}
<FichaLibro
  {/* props anteriores */}
  categorias={["Ficción", "Distopía", "Clásico"]}
/>
```

---

## <span class='custom-order'>4</span> Agrega información de la editorial con un objeto

Ahora en `FichaLibro.jsx` agrega los datos de la editorial usando un objeto:

```jsx showLineNumbers {3, 4, 5}
<div className="editorial">
  <h3>Editorial</h3>
  <p>Nombre: {props.editorial.nombre}</p>
  <p>País: {props.editorial.pais}</p>
  <p>Año de publicación: {props.editorial.año}</p>
</div>
```

Y en el componente padre `App.jsx`

```jsx showLineNumbers {3, 4, 5, 6}
<FichaLibro
  {/* props anteriores */}
  editorial={{
    nombre: "Penguin Books",
    pais: "Reino Unido",
    año: 1949,
  }}
/>
```

> [!tip]
> Los objetos permiten agrupar datos relacionados. Accede a sus propiedades con `props.objeto.propiedad`.

---

## <span class='custom-order'>5</span> Resultado final en `FichaLibro.jsx`

```jsx showLineNumbers
export default function FichaLibro(props) {
  return (
    <div className="ficha-libro">
      <h2>Nombre del libro: {props.titulo}</h2>
      <p>Autor: {props.autor}</p>
      <p>Páginas: {props.paginas}</p>
      <p style={{ color: props.disponible ? 'green' : 'red' }}>
        Disponibilidad:
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

## <span class='custom-order'>6</span> Resultado final en `App.jsx`

```jsx showLineNumbers
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
