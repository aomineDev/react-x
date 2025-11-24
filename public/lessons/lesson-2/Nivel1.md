# Componentes dinamicos

Las **props** permiten que los componentes reciban datos del componente padre. Son como los argumentos de una función, hacen que tus componentes sean dinámicos y reutilizables.

- OBJETIVO:

  En este nivel, crearas una tarjeta de perfil dinamica, que puedes usar muchas veces con diferentes datos.

---

## Paso 1 - Pasa el nombre como prop

En el componente `App.js`, agrega el componente `TarjetaPerfil.tsx` enviando un nombre

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

En el componente `TarjetaPerfil.tsx`, muestralo atraves del `prop`

```jsx showLineNumbers {4}
export default function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
    </div>
  )
}
```

---

## Paso 2 - Agrega el nombre de usuario como prop

En `App.js`, agrega la prop

```jsx showLineNumbers
username = 'leonardo19'
```

En `tarjetaPerfil.jsx`, muestralo asi

```jsx showLineNumbers
<p>Nombre de usuario: @{props.username}</p>
```

---

## Paso 3 - Agrega biografia y seguidores

En `App.js`, agrega las nuevas props

```jsx showLineNumbers
bio="Desarrollador Frontend | React lover💙"
seguidores={1250}
```

En `TarjetaPerfil.jsx`, muestralas

```jsx showLineNumbers
<p>Biografia: {props.bio}</p>
<p>Seguidores: {props.seguidores} folowers</p>
```

---

## Paso 4 - Resultado final es `App.js`

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

## Paso 5 - Resultado final es `TarjetaPerfil.tsx`

```jsx showLineNumbers
export default function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Nombre de usuario: @{props.username}</p>
      <p>Biografia: {props.bio}</p>
      <p>Seguidores: {props.seguidores} folowers</p>
    </div>
  )
}
```

De esta manera puedes agregar componenetes con datos dinamicos

```jsx
<TarjetaPerfil nombre="Carlos López" ... />
<TarjetaPerfil nombre="María Torres" ... />
```
