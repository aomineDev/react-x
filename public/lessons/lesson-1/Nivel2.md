# Sintaxis de JSX

JSX (JavaScript XML) es una extensión de sintaxis que te permite escribir código similar a HTML dentro de JavaScript. Es la forma principal de crear componentes en React.

- **OBJETIVO:**
  En este nivel, crearás una tarjeta de perfil de usuario y aprenderás las diferencias clave entre HTML y JSX.

---

## <span class='custom-order'>1</span> Crea el contenedor y el título

Agrega un div con una clase y un título dentro del componente

```jsx showLineNumbers
<div className="tarjeta">
  <h1 className="titulo">Perfil de Usuario</h1>
</div>
```

> [!important]
> En JSX se usa `className` en lugar de `class` porque `class` es una palabra reservada en JavaScript.

---

## <span class='custom-order'>2</span> Agrega la imagen de perfil

Dentro del contenedor, debajo del título, agrega la imagen `<img/>`

```jsx showLineNumbers
<img src="imagen" alt="Foto de perfil" />
```

```
Para sacar una imagen usa este link: https://randomuser.me/api/portraits/men/1.jpg
```

> [!note]
> En JSX, todas las etiquetas deben cerrarse explícitamente: `<img />`, `<br />`, `<input />`, etc.

---

## <span class='custom-order'>3</span> Agrega información del usuario

Agrega más detalles del perfil con un párrafo y un salto de línea:

```jsx showLineNumbers
<br />
<p>Sebastian García</p>
<p>Desarrollador Frontend</p>
```

---

## <span class='custom-order'>4</span> Agrega un formulario de contacto

Completa la tarjeta agregando un campo de entrada con su etiqueta:

```jsx showLineNumbers
<label htmlFor="email">Email:</label> <input type="email" id="email" />
```

> [!important]
> En JSX se usa `htmlFor` en lugar de `for` para asociar etiquetas con inputs.

---

## <span class='custom-order'>5</span> Unión de todos los pasos

```jsx showLineNumbers
export default function Usuario() {
  return (
    <>
      <div className="tarjeta">
        <h1 className="titulo">Perfil de Usuario</h1>
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto de perfil" />
        <br />
        <p>Sebastian García</p>
        <p>Desarrollador Frontend</p>
      </div>
      <label htmlFor="email">Email:</label> <input type="email" id="email" />
    </>
  )
}
```

> [!tip]
> El fragmento vacío `<>...</>` te permite retornar múltiples elementos sin agregar un nodo extra al DOM.
