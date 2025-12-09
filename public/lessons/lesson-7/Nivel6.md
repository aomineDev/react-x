# Lógica Reutilizable

Cuando tienes lógica que se repite en múltiples componentes, copiar y pegar código no es una buena práctica. Los Custom Hooks te permiten extraer y reutilizar lógica de componentes de manera elegante.

Para crear lógica reutilizable, puedes crear tus propios hooks personalizados.

En esta actividad aprenderás a crear Custom Hooks.

Un Custom Hook es simplemente una función que usa otros hooks. Por convención, su nombre debe empezar con "use". Aquí un ejemplo:

## ~1~ Definir el Custom Hook

```javascript showLineNumbers
function useContador(inicial = 0) {
  const [count, setCount] = useState(inicial)

  const incrementar = () => setCount((c) => c + 1)
  const decrementar = () => setCount((c) => c - 1)
  const reset = () => setCount(inicial)

  return { count, incrementar, decrementar, reset }
}
```

- Es una función normal, pero su nombre inicia con use.
- Maneja un estado (`count`) internamente.
- Expone funciones para modificar ese estado (`incrementar`, `decrementar`, `reset`).
- Devuelve un objeto con todo lo necesario para reutilizarlo.

## ~2~ Usar el Custom Hook dentro del componente

```javascript showLineNumbers {2}
export default function App() {
  const { count, incrementar, decrementar } = useContador(0);
```

- Aquí se "consume" el hook igual que si fuera `useState`.
- `useContador(0)` inicializa el contador en 0.
- Obtienes solo lo que necesitas del hook.

## ~3~ UI que usa las funciones del custom hook

```javascript showLineNumbers {4,5}
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}
```

- La UI muestra el estado (`count`).
- Los botones llaman a las funciones internas del custom hook.

---

## Crear el Custom Hook useToggle

Implementa el hook `useToggle` que:

1. Use `useState` internamente con el valor inicial
2. Cree una función `toggle` que invierta el valor booleano
3. Retorne un array con `[valor, toggle]`

```javascript showLineNumbers
function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial)

  const toggle = () => {
    setValor((v) => !v)
  }

  return [valor, toggle]
}
```

## Usar el Custom Hook en el componente

En el componente `App`, usa el hook dos veces:

```javascript showLineNumbers
const [mostrarTexto, toggleTexto] = useToggle(false)
const [modoOscuro, toggleModo] = useToggle(false)
```

---

Implementa el código. Observa cómo el mismo hook se reutiliza para dos funcionalidades diferentes de manera limpia.

Has completado el módulo de Hooks Avanzados. Ahora sabes crear tu propia lógica reutilizable y estás listo para aprender patrones avanzados de React.
