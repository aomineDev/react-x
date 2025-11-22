# Optimización por Memorización

En aplicaciones React, algunos cálculos pueden ser costosos o algunas funciones pueden causar re-renders innecesarios en componentes hijos. Para optimizar el rendimiento, React proporciona hooks de memorización.

Para memorizar valores y funciones, React ofrece `useMemo` y `useCallback`.

En esta actividad aprenderás a optimizar componentes con memorización.

`useMemo` memoriza el resultado de un cálculo, y `useCallback` memoriza una función. Aquí un ejemplo:

## Paso 1 - Estados del componente
```javascript
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
```
- count: se usará para el cálculo costoso.

- input: agregado solo para demostrar que cambios externos no afectan el cálculo memorizado.

## Paso 2 - Memorizar un cálculo costoso (useMemo)
```javascript
  const calculoCostoso = useMemo(() => {
    console.log('Calculando...');
    return count * 2;
  }, [count]);
```
- Solo se vuelve a ejecutar cuando cambia count.
- Si otro estado cambia (como input), no se recalcula.
- Ideal para operaciones pesadas (loops, filtros grandes, cálculos matemáticos).

## Paso 3 - Memorizar una función (useCallback)
```javascript
  const incrementar = useCallback(() => {
    setCount(c => c + 1);
  }, []);
```

## Paso 4 - Render del resultado memorizado
```javascript
return <div>{calculoCostoso}</div>;
```

> Nota:
> - La función incrementar se crea una sola vez.
> - Muy útil cuando se pasa como prop a componentes hijos para evitar renders innecesarios.
> 

---

## Implementar useMemo para el cálculo

Envuelve el cálculo de `numerosPares` con `useMemo`:
```javascript
const numerosPares = useMemo(() => {
  console.log('Calculando números pares...');
  return numeros.filter(n => n % 2 === 0);
}, [numeros]);
```

## Implementar useCallback para la función

Envuelve la función `agregarNumero` con `useCallback`:
```javascript
const agregarNumero = useCallback(() => {
  const nuevoNumero = Math.floor(Math.random() * 100);
  setNumeros(nums => [...nums, nuevoNumero]);
}, []);
```

---

Implementa el código. Observa en la consola cómo el cálculo solo se ejecuta cuando cambia el array de números, no cuando escribes en el input.

Has aprendido a optimizar con useMemo y useCallback. A continuación aprenderás a compartir datos globalmente con useContext.