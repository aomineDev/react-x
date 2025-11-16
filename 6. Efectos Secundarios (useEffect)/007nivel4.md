# Módulo 6: Efectos Secundarios (useEffect)
## Nivel 4: Data Fetching y Estados

### Obtener Datos de una API

El uso más común de `useEffect` es obtener datos cuando el componente se monta.

### Patrón Básico
```javascript
useEffect(() => {
  fetch('https://api.ejemplo.com/datos')
    .then(response => response.json())
    .then(data => setDatos(data));
}, []);
```

### Gestión de Estados de la Petición

Una buena práctica es manejar tres estados:

1. **loading**: La petición está en proceso
2. **error**: Ocurrió un error
3. **data**: Los datos obtenidos
```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [datos, setDatos] = useState(null);

useEffect(() => {
  fetch('https://api.ejemplo.com/datos')
    .then(response => response.json())
    .then(data => {
      setDatos(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);
```

### Async/Await en useEffect

No puedes hacer el callback de `useEffect` async directamente, pero puedes crear una función async dentro:
```javascript
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://api.ejemplo.com/datos');
      const data = await response.json();
      setDatos(data);
    } catch (err) {
      setError(err.message);
    }
  }
  
  fetchData();
}, []);
```

---

## TAREA PRÁCTICA

Implementa un componente que obtenga usuarios de una API pública y muestre:
- Un mensaje de "Cargando..." mientras obtiene los datos
- Los nombres de los usuarios cuando lleguen los datos
- Un mensaje de error si algo falla

API a usar: `https://jsonplaceholder.typicode.com/users`

**Resultado esperado:**
- Al montar, debe mostrar "Cargando..."
- Después de 1-2 segundos, debe mostrar una lista de nombres de usuarios
- Si hay error de red, debe mostrar el mensaje de error

---

## Próximo Nivel

Obtener datos es útil, pero ¿qué pasa si cometes errores comunes? En el siguiente nivel aprenderás a evitar bucles infinitos y problemas de cierres obsoletos.