# Nivel 2: Tipos de Datos en Props

En el nivel anterior solo pasaste strings y números. Ahora aprenderás a pasar arrays, objetos y booleanos para crear componentes más complejos.

- Objetivo:
  En este nivel, crearás una ficha completa de un libro con diferentes tipos de datos.

---

1.  Crea la ficha básica con strings y números

Comienza con el título, autor y número de páginas:

```jsx
export default function App() {
  return <FichaLibro titulo="1984" autor="George Orwell" paginas={328} />;
}

function FichaLibro(props) {
  return (
    <div className="ficha-libro">
      <h2>{props.titulo}</h2>
      <p>Autor: {props.autor}</p>
      <p>Páginas: {props.paginas}</p>
    </div>
  );
}
```

Los strings como `"1984"` van entre comillas. Los números como `{328}` van entre llaves. React distingue entre tipos de datos automáticamente.

---

2.  Agrega disponibilidad con un boolean

Ahora indica si el libro está disponible usando un valor booleano:

```jsx
<p style={{ color: props.disponible ? "green" : "red" }}>
  {props.disponible ? "Disponible" : "No disponible"}
</p>
```

Y en el componente padre

```jsx
<FichaLibro
  {/* props anteriores */}
  disponible={true}
/>
```

---

3.  Agrega las categorías con un array

Ahora agrega las categorías del libro usando un array:

```jsx
<h3>Categorías:</h3>
<ul>
  {props.categorias.map((categoria, index) => (
    <li key={index}>{categoria}</li>
  ))}
</ul>
```

y en el componente padre

```jsx
<FichaLibro
  {/* props anteriores */}
  categorias={["Ficción", "Distopía", "Clásico"]}
/>
```

---

4.  Agrega información de la editorial con un objeto

Ahora agrega los datos de la editorial usando un objeto:

```jsx
<div className="editorial">
  <h3>Editorial</h3>
  <p>Nombre: {props.editorial.nombre}</p>
  <p>País: {props.editorial.pais}</p>
  <p>Año de publicación: {props.editorial.año}</p>
</div>
```

y en el componente padre

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
