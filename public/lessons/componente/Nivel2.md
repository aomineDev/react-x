# Nivel 2: Sintanxis de JSX

JSX (JavaScript XML) es una extensión de sintaxis que te permite escribir código similar a HTML dentro de JavaScript. Es la forma principal de crear componentes en React.

- OBJETIVO:

  En este nivel, crearás una tarjeta de perfil de usuario y aprenderás las diferencias clave entre HTML y JSX.

---

## 1 - Crea el contenedor y el titulo

Agrega un div con una clase y un titulo dentro del componenete

```html
<div className="tarjeta">
  <h1 className="titulo">Perfil de Usuario</h1>
</div>
```

En JSX usas `className` en lugar de `class` porque `class` es una palabra reservada en JavaScript.

---

## 2 - Agrega la imagen de perfil

Dentro del contenedor, debajo del título, agrega la imagen

```html
<img src="imagen" alt="Foto de perfil" />
```

```
Para sacar una imagen usa este link: https://randomuser.me/api/portraits/men/1.jpg
```

En jsx, todas las etiquetas deben cerrarse `<img/>`

---

## 3 - Agrega información del usuario

Agrega más detalles del perfil con un párrafo y un salto de línea:

```html
<br />
<p>Sebastian García</p>
<p>Desarrolladoror Frontend</p>
```

`<br />` también debe cerrarse en JSX.

---

## 4 - Agrega un formulario de contacto

Completa la tarjeta agregando un campo de entrada con su etiqueta:

```html
<label htmlFor="email">Email:</label> <input type="email" id="email" />
```

En JSX se usa `htmlFor`, no for.

## 5 - Union de todos los pasos

```jsx
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
