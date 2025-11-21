## Nivel 5: Errores y Optimización

### El Problema de los Bucles Infinitos

Este código crea un bucle infinito:
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Cambia el estado
}); // Sin array de dependencias, se ejecuta en cada render
```

**¿Por qué?**
1. El efecto se ejecuta y cambia `count`
2. El cambio causa un nuevo render
3. El efecto se ejecuta de nuevo (sin dependencias)
4. Se repite infinitamente

**Solución:** Usa el array de dependencias correctamente.

### Stale Closures (Cierres Obsoletos)

Un problema sutil ocurre cuando capturas valores obsoletos:
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCount(count + 1); // Siempre usa el count inicial (0)
  }, 1000);
  
  return () => clearInterval(interval);
}, []); // Array vacío: el efecto solo se ejecuta una vez
```

**¿El problema?** `count` dentro del intervalo siempre es 0 porque el efecto solo se ejecutó una vez.

**Solución:** Usa la forma funcional de setState:
```javascript
setCount(prevCount => prevCount + 1);
```

### Cancelar Peticiones

Si un componente se desmonta antes de que termine un fetch, intentará actualizar el estado de un componente desmontado.

**Solución básica:** Usa una bandera:
```javascript
useEffect(() => {
  let isMounted = true;
  
  fetch('https://api.ejemplo.com/datos')
    .then(response => response.json())
    .then(data => {
      if (isMounted) {
        setDatos(data);
      }
    });
  
  return () => {
    isMounted = false;
  };
}, []);
```

---

## TAREA PRÁCTICA

Corrige el componente que tiene dos problemas:
1. Un bucle infinito en el primer efecto
2. Stale closure en el cronómetro

**Resultado esperado:**
- El componente debe cargar sin errores
- El mensaje debe mostrar el número de renders correctamente
- El cronómetro debe incrementar cada segundo correctamente

---

## Próximo Nivel

Has completado los fundamentos de useEffect. En el siguiente módulo explorarás otros Hooks avanzados como useReducer, useRef y más.