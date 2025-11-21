# Limpieza de Recursos

Algunos efectos crean recursos que necesitan ser limpiados para evitar problemas como fugas de memoria o comportamientos inesperados. Por ejemplo, cuando inicias un temporizador, necesitas detenerlo cuando el componente se desmonta.

Para limpiar recursos, `useEffect` puede retornar una función de limpieza.

En esta actividad aprenderás a limpiar recursos correctamente.

La función de limpieza se retorna desde el efecto. React la ejecutará automáticamente cuando sea necesario. Aquí un ejemplo con un intervalo:
## `useEffect` para iniciar el intervalo
```javascript
function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);
```
- Crea un intervalo que suma 1 cada segundo.
- Usa la forma `s => s + 1` para asegurarse de que siempre toma el valor más reciente.
## Cleanup del intervalo
```javascript
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return <p>Segundos: {segundos}</p>;
}
```
- Se ejecuta una sola vez por el array vacío `[]`.
- Limpia el intervalo cuando el componente se desmonta.
- Evita que el cronómetro siga corriendo en segundo plano (muy importante).

---

## Implementar el efecto con intervalo

En el componente `Cronometro`, implementa un `useEffect` que:
1. Cree un intervalo con `setInterval` que incremente `segundos` cada 1000ms
2. Use la forma funcional: `setSegundos(s => s + 1)`
3. Retorne una función de limpieza que haga `clearInterval`

Aquí la estructura:
```javascript
useEffect(() => {
  const intervalo = setInterval(() => {
    // incrementar segundos
  }, 1000);
  
  return () => clearInterval(intervalo);
}, []);
```

---

Implementa el código. Usa el botón para montar/desmontar el cronómetro y observa cómo se limpia correctamente.

Has aprendido a limpiar recursos. A continuación aprenderás a obtener datos de una API usando efectos.