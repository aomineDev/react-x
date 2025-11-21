## Nivel 1: Componentes dinamicos

Las **props** permiten que los componentes reciban datos del componente padre. Son como los argumentos de una función, hacen que tus componentes sean dinámicos y reutilizables.

- OBJETIVO:
  En este nivel, convertirás una tarjeta de perfil estática en una dinámica que puede mostrar diferentes usuarios.

---

1.  Pasa el nombre como prop

En el componente `App`, agrega el componente `TarjetaPerfil` enviando el nombre:

```jsx
export default function App() {
  return (
    <div>
      <TarjetaPerfil nombre="Ana García" />
    </div>
  );
}
```

En el componente `TarjetaPerfil`, reemplaza el texto del nombre por `{props.nombre}`

```JSX
function TarjetaPerfil(props) {
return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>@anagarcia</p>
    </div>
);
}
```

---

2.  Agrega el nombre de usuario como prop

En `App`, agrega la prop

```jsx
username = "leonardo19";
```

En `tarjetaPerfil`, usala asi

```jsx
<p>@{props.username}</p>
```

---

3.  Agrega biografia y seguidores

En `App`, incluye

```jsx
bio="Desarrollador Frontend | React lover💙"
seguidores={1250}
```

Agregalos en `TarjetaPerfil`

```jsx
<p>{props.bio}</p>
<p>{props.seguidores} seguidores</p>
```

5.  Crea múltiples tarjetas con diferentes datos

En `App`, agrega mas llamadas al componente, solo cambia las props

```jsx
<TarjetaPerfil nombre="Carlos López" ... />
<TarjetaPerfil nombre="María Torres" ... />

```
