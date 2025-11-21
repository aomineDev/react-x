# Errores y Optimización

Al trabajar con efectos, es fácil cometer errores que causan problemas de rendimiento o comportamientos inesperados. Los dos problemas más comunes son los bucles infinitos y los cierres obsoletos.

Para escribir efectos eficientes, necesitas entender estas situaciones y cómo evitarlas.

En esta actividad aprenderás a identificar y corregir errores comunes con efectos.

## Bucle Infinito

Este código crea un bucle infinito:
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Cambia el estado
}); // Sin dependencias, se ejecuta en cada render
```

El problema: cada cambio causa un render, que ejecuta el efecto, que cambia el estado, que causa otro render...

**Solución**: Agrega el array de dependencias correcto.

## Stale Closure (Cierre Obsoleto)

Este código no funciona como esperas:
```javascript
useEffect(() => {
  const intervalo = setInterval(() => {
    setCount(count + 1); // Siempre usa el valor inicial
  }, 1000);
  
  return () => clearInterval(intervalo);
}, []); // El efecto solo se ejecuta una vez
```

El problema: `count` dentro del intervalo siempre tiene el valor inicial porque el efecto solo se ejecutó una vez.

**Solución**: Usa la forma funcional de setState:
```javascript
setCount(prevCount => prevCount + 1);
```

---

## Corregir el bucle infinito

En el primer `useEffect`, agrega el array de dependencias `[]` para que solo se ejecute una vez al montar.

## Corregir el stale closure

En el segundo `useEffect`, cambia `setContador(contador + 1)` por la forma funcional:
```javascript
setContador(c => c + 1)
```

---

Corrige ambos errores. El componente debe cargar sin problemas y el contador debe incrementar correctamente cada segundo.

Has completado el módulo de useEffect. Ahora dominas los efectos secundarios en React y estás listo para explorar hooks más avanzados.