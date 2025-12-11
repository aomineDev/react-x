# Challenge Final – Renderizado en React

### Introducción

¡Bienvenido al desafío de renderizado en React!
Vas a crear una aplicación que te permitirá comprender y practicar renderizado condicional, listas, optimización y control de re-renders en React.

En este challenge los usuarios podrán:

- Ver elementos renderizados condicionalmente según ciertas condiciones.

- Mostrar listas de datos usando `.map()` y comprender la importancia de las keys.

- Filtrar y ordenar elementos en listas de manera interactiva.

- Explorar cuándo React realiza renderizados y cómo evitar renders innecesarios.

- Aplicar técnicas básicas de optimización como `React.memo`, `useCallback` y `useMemo`.

Este challenge combinará renderizado condicional, manejo de listas, optimización de componentes y prevención de renders innecesarios.

---

### Reglas del Desafío

#### ~1~ Debes crear componentes que utilicen renderizado condicional:  
- Mostrar un mensaje de bienvenida solo si el usuario está logueado.
- Mostrar un mensaje distinto si el usuario no ha iniciado sesión.
#### ~2~ Debes renderizar listas de elementos usando `.map()`:
- Cada elemento debe tener un `key` única.
- Debe permitir filtrar y ordenar los elementos mediante inputs o botones.

#### ~3~ Debes crear un contador o estado que demuestre cuándo React renderiza:
- Mostrar en pantalla cuántas veces se ha renderizado un componente.
#### ~4~Debes aplicar optimización básica:
- Usar `React.memo` para evitar renders innecesarios.
- Usar `useCallback` para funciones que se pasan como props.
- Usar `useMemo` para cálculos derivados que no deben recalcularse en cada render.

#### ~5~ Debes evitar re-renders innecesarios:
- Evitar que un componente hijo se renderice si sus props no cambian.
- Mostrar claramente la diferencia entre un componente que se renderiza de forma optimizada y uno que no.

#### ~6~ La aplicación debe ser interactiva:
- Filtrar y ordenar elementos de listas mediante botones o inputs.
- Mostrar en tiempo real los renders y cambios de estado.

---

### Datos de ejemplo

El estado inicial puede ser:
```jsx
const users = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 20 },
  { id: 4, nombre: 'Lucía', edad: 28 }
];

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [filter, setFilter] = useState('');
const [sortByAge, setSortByAge] = useState(false);
```

---

### 💡 Pistas

#### ~1~ Renderizado condicional
```jsx
{isLoggedIn ? (
  <p>Bienvenido, usuario</p>
) : (
  <p>Por favor inicia sesión</p>
)}
```

#### ~2~ Renderizado de listas con `.map()` y `key`
```jsx
<ul>
  {users.map(user => (
    <li key={user.id}>{user.nombre} - {user.edad} años</li>
  ))}
</ul>
```

#### ~3~ Filtrado y ordenamiento
```jsx
const filteredUsers = users
  .filter(u => u.nombre.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => sortByAge ? a.edad - b.edad : 0);

<input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
<button onClick={() => setSortByAge(!sortByAge)}>Ordenar por edad</button>
```

#### ~4~ Contador de renders
```jsx
function RenderCounter() {
  const renders = useRef(0);
  renders.current++;
  return <p>Renderizado {renders.current} veces</p>;
}
```

#### ~5~ Optimización con React.memo y useCallback
```jsx
const UserItem = React.memo(({ user, onClick }) => {
  console.log('Renderizando:', user.nombre);
  return <li onClick={() => onClick(user.id)}>{user.nombre}</li>;
});

const handleClick = useCallback((id) => {
  console.log('Usuario clickeado', id);
}, []);
```

#### ~6~ Evitar renders innecesarios
- Coloca `React.memo` en los componentes hijos que no deben re-renderizar si sus props no cambian.

- Usa `useMemo` para listas filtradas y ordenadas, para no recalcular en cada render:

```jsx
const displayedUsers = useMemo(() => {
  return users.filter(u => u.nombre.includes(filter)).sort((a,b) => sortByAge ? a.edad - b.edad : 0);
}, [users, filter, sortByAge]);
```

---

### Objetivo final

✅ Aplicación con renderizado condicional correcto.
✅ Listas renderizadas con .map() y key única.
✅ Filtrado y ordenamiento interactivo funcionando.
✅ Contador de renders mostrando correctamente los re-renders.
✅ Uso de React.memo, useCallback y useMemo para optimización.
✅ Componentes hijos que no re-renderizan innecesariamente.

¡Desafío completo de renderizado listo para practicar tus habilidades de React! 🚀