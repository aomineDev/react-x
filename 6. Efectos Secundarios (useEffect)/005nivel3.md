## Nivel 3: Limpieza de Recursos

### El Problema

Algunos efectos crean recursos que deben ser limpiados para evitar:
- Fugas de memoria
- Comportamientos inesperados
- Múltiples suscripciones activas

**Ejemplos:**
- Timers (`setTimeout`, `setInterval`)
- Suscripciones a eventos del DOM
- Conexiones a websockets

### La Clean Up Function

`useEffect` puede retornar una función que React ejecutará para limpiar el efecto:
```javascript
useEffect(() => {
  // Configurar el recurso
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Función de limpieza
  return () => {
    clearInterval(timer);
  };
}, []);
```

### Cuándo se Ejecuta la Limpieza

La función de limpieza se ejecuta:
1. Antes de que el efecto se ejecute nuevamente
2. Cuando el componente se desmonta

### Casos de Uso Esenciales

**1. Limpiar Intervalos**
```javascript
useEffect(() => {
  const intervalo = setInterval(() => {
    console.log('Ejecutando...');
  }, 1000);

  return () => clearInterval(intervalo);
}, []);
```

**2. Limpiar Event Listeners**
```javascript
useEffect(() => {
  const handleClick = () => console.log('Click');
  window.addEventListener('click', handleClick);

  return () => window.removeEventListener('click', handleClick);
}, []);
```

---

## TAREA PRÁCTICA

Crea un componente con un cronómetro que:
- Incremente un contador cada segundo
- Tenga un botón para mostrar/ocultar el cronómetro
- LIMPIE correctamente el intervalo cuando el cronómetro se oculte

**Resultado esperado:**
- Al mostrar el cronómetro, debe comenzar a contar
- Al ocultar el cronómetro, debe detenerse completamente
- Si vuelves a mostrar, debe empezar desde cero
- No debe haber múltiples intervalos ejecutándose

---

## Próximo Nivel

Ahora que sabes limpiar recursos, es momento de aplicar useEffect en el caso de uso más común: obtener datos de una API.