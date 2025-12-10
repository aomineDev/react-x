# Challenge: Contador Avanzado con useReducer y useRef

Aplica los hooks avanzados que aprendiste en este desafío práctico.

## ~1~ Introducción

Crearás un contador mejorado que usa `useReducer` para manejar múltiples acciones y `useRef` para controlar un input.

El contador podrá:
- Incrementar de 1 en 1
- Decrementar de 1 en 1
- Resetearse a 0
- Tener un input para saltos personalizados
- Enfocar el input con un botón

## ~2~ Reglas del Desafío

**useReducer requerido:**
- Crea un reducer que maneje 3 acciones:
  - `'INCREMENTAR'`: suma 1 al contador
  - `'DECREMENTAR'`: resta 1 al contador
  - `'RESET'`: pone el contador en 0
- Estado inicial: `{ count: 0 }`

**useRef requerido:**
- Crea una referencia al input numérico
- Implementa un botón que enfoque el input usando `.focus()`

**Botones necesarios:**
1. "Incrementar" - llama dispatch con acción INCREMENTAR
2. "Decrementar" - llama dispatch con acción DECREMENTAR
3. "Reset" - llama dispatch con acción RESET
4. "Enfocar Input" - enfoca el input

**Elementos visuales:**
- Mostrar: "Contador: X"
- Input tipo number para saltos personalizados
- 4 botones según lo especificado

## ~3~ Ejemplo de Resultado
> [!important]
> Estado inicial:
> Contador Avanzado
> Contador: 0
> 
> [Salto: ___5___]
> [Incrementar] [Decrementar] [Reset] [Enfocar Input]
> 
> Después de 3 incrementos:
> Contador: 3
> 
> Después de 1 decremento:
> Contador: 2
> 
> Después de Reset:
> Contador: 0


## ~4~ Pistas

**Estructura del reducer:**
```javascript showLineNumbers
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { count: state.count + 1 };
    case 'DECREMENTAR':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}
```

**Inicializar useReducer:**
```javascript showLineNumbers
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**Crear referencia:**
```javascript showLineNumbers
const inputRef = useRef(null);
```

**Conectar referencia al input:**
```javascript showLineNumbers
<input ref={inputRef} type="number" />
```

**Usar dispatch:**
```javascript showLineNumbers
<button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
  Incrementar
</button>
```

**Enfocar input:**
```javascript showLineNumbers
const enfocarInput = () => {
  inputRef.current.focus();
};
```

## ~5~ Criterios de Evaluación

Tu solución será evaluada por:
- Uso correcto de `useReducer` con reducer y estado inicial
- Uso correcto de `useRef` para referenciar el input
- Implementación de las 3 acciones del reducer
- Los 4 botones funcionan correctamente
- El botón de enfocar hace focus en el input
- El contador se muestra y actualiza correctamente

¡Adelante! 🚀