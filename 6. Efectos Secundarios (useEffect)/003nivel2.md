
## Nivel 2: Controlando la Ejecución

### El Array de Dependencias

En el nivel anterior, el efecto se ejecutaba después de CADA render. Esto puede causar problemas de rendimiento o comportamientos no deseados.

El **array de dependencias** es el segundo argumento de `useEffect` que controla cuándo se ejecuta el efecto.

### Sintaxis
```javascript
useEffect(() => {
  // Este efecto solo se ejecuta cuando cambian las dependencias
}, [dependencia1, dependencia2]);
```

### Tres Casos Importantes

**1. Sin array de dependencias**
```javascript
useEffect(() => {
  console.log('Se ejecuta después de cada render');
});
```

**2. Array vacío []**
```javascript
useEffect(() => {
  console.log('Se ejecuta SOLO una vez al montar el componente');
}, []);
```

**3. Con dependencias específicas**
```javascript
useEffect(() => {
  console.log('Se ejecuta cuando cambia "nombre"');
}, [nombre]);
```

### Reglas del Array de Dependencias

- Debes incluir TODAS las variables que usa el efecto y que pueden cambiar
- No incluyas funciones de setState (son estables)
- No incluyas valores que nunca cambian (constantes)

---

## TAREA PRÁCTICA

Tienes un componente con dos estados: `nombre` y `edad`. Debes implementar dos efectos diferentes:

1. Un efecto que se ejecute SOLO cuando cambie el `nombre`
2. Un efecto que se ejecute SOLO al montar el componente (una vez)

**Resultado esperado:**
- Al escribir el nombre, solo el primer console.log debe aparecer
- Al cambiar la edad, ningún efecto debe ejecutarse
- El segundo efecto solo debe aparecer una vez al inicio

---

## Próximo Nivel

Has aprendido a controlar cuándo se ejecutan los efectos. Pero ¿qué pasa si tu efecto crea un timer o una suscripción? En el siguiente nivel aprenderás a limpiar recursos.