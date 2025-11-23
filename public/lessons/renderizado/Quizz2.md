# QUIZZ 2 – Predecir el Output

Observa el siguiente componente que:

- Filtra una lista,

- La ordena,

- Y la renderiza usando `.map()` con keys.

```js
export default function App() {
  const users = [
    { id: 1, name: 'Carlos', age: 22 },
    { id: 2, name: 'Ana', age: 28 },
    { id: 3, name: 'Beto', age: 19 },
    { id: 4, name: 'Daniela', age: 30 },
  ]

  const filtered = users.filter((u) => u.age >= 21).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <ul>
      {filtered.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age}
        </li>
      ))}
    </ul>
  )
}
```

¿Cuál será el output exacto que React renderizará?

Selecciona la opción correcta:

A)

- Ana - 28

- Carlos - 22

- Daniela - 30

B)

- Carlos - 22

- Ana - 28

- Daniela - 30

C)

- Beto - 19

- Carlos - 22

- Ana - 28

- Daniela - 30

D)

- Ana (28)

- Beto (19)

- Carlos (22)

- Daniela (30)
