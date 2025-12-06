# Componentes Dinámicos

Las **props** permiten que los componentes reciban datos del componente padre. Son como los argumentos de una función, hacen que tus componentes sean dinámicos y reutilizables.

- **OBJETIVO:**
  En este nivel, crearás una tarjeta de perfil dinámica, que puedes usar muchas veces con diferentes datos.

---

## <span class='custom-order'>1</span> Pasa el nombre como prop

En el componente `App.jsx`, agrega el componente `TarjetaPerfil.jsx` enviando un nombre

```jsx showLineNumbers {6}
import TarjetaPerfil from './TarjetaPerfil.jsx'

export default function App() {
  return (
    <div>
      <TarjetaPerfil nombre="Leonardo M.A" />
    </div>
  )
}
```

En el componente `TarjetaPerfil.jsx`, muéstralo a través del `prop`

```jsx showLineNumbers {4}
export default function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
    </div>
  )
}
```

> [!note]
> Las props se pasan como atributos en JSX y se reciben como un objeto en el componente hijo.

---

## <span class='custom-order'>2</span> Agrega el nombre de usuario como prop

En `App.jsx`, agrega la prop

```jsx showLineNumbers
username = 'leonardo19'
```

En `TarjetaPerfil.jsx`, muéstralo así

```jsx showLineNumbers
<p>Nombre de usuario: @{props.username}</p>
```

---

## <span class='custom-order'>3</span> Agrega biografía y seguidores

En `App.jsx`, agrega las nuevas props

```jsx showLineNumbers
bio="Desarrollador Frontend | React lover💙"
seguidores={1250}
```

En `TarjetaPerfil.jsx`, muéstralas

```jsx showLineNumbers
<p>Biografía: {props.bio}</p>
<p>Seguidores: {props.seguidores} followers</p>
```

> [!important]
> Los valores de texto se pasan entre comillas `"texto"`, pero los números y expresiones JavaScript deben ir entre llaves `{1250}`.

---

## <span class='custom-order'>4</span> Resultado final en `App.jsx`

```jsx showLineNumbers
import TarjetaPerfil from './TarjetaPerfil.jsx'

export default function App() {
  return (
    <div>
      <TarjetaPerfil
        nombre="Leonardo M.A"
        username="leonardo19"
        bio="Desarrollador Frontend | React lover💙"
        seguidores={1250}
      />
    </div>
  )
}
```

---

## <span class='custom-order'>5</span> Resultado final en `TarjetaPerfil.jsx`

```jsx showLineNumbers
export default function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Nombre de usuario: @{props.username}</p>
      <p>Biografía: {props.bio}</p>
      <p>Seguidores: {props.seguidores} followers</p>
    </div>
  )
}
```

> [!tip]
> De esta manera puedes reutilizar el componente con datos diferentes:
>
> ```jsx
> <TarjetaPerfil nombre="Carlos López" username="carlos_dev" ... />
> <TarjetaPerfil nombre="María Torres" username="maria_codes" ... />
> ```
