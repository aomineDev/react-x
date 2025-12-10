--
# Challenge: Componentes Reutilizables con props.children

Demuestra lo que aprendiste sobre composición y props.children creando un perfil de usuario.

## ~1~ Introducción

Crearás un perfil de usuario usando componentes reutilizables con `props.children`.

Construirás:
- Un componente `Card` que funcione como contenedor
- Usar `Card` múltiples veces con diferente contenido
- Mostrar información organizada en tarjetas

## ~2~ Reglas del Desafío

**Componente Card requerido:**
- Debe aceptar `children` como prop
- Debe aceptar `titulo` como prop
- Debe renderizar el título y el contenido children
- Debe tener estilos de borde y padding

**Estructura del Card:**
```javascript showLineNumbers
function Card({ titulo, children }) {
  return (
    <div style={{ border: '2px solid #e2e8f0', padding: '20px', margin: '10px 0' }}>
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}
```

**Uso del Card:**
Debes crear al menos 2 Cards:
1. Card con título "Información Personal" que muestre:
   - Nombre: Juan Pérez
   - Edad: 25 años
   
2. Card con título "Contacto" que muestre:
   - Email: juan@example.com
   - Teléfono: (opcional)

## ~3~ Ejemplo de Resultado

Perfil de Usuario

┌─────────────────────────────┐
│ Información Personal        │
│                             │
│ Nombre: Juan Pérez          │
│ Edad: 25 años               │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Contacto                    │
│                             │
│ Email: juan@example.com     │
└─────────────────────────────┘


## ~4~ Pistas

**Crear el componente Card:**
```javascript showLineNumbers
function Card({ titulo, children }) {
  return (
    <div style={{ 
      border: '2px solid #e2e8f0', 
      padding: '20px', 
      margin: '10px 0',
      borderRadius: '8px'
    }}>
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}
```

**Usar el componente Card:**
```javascript
<Card titulo="Información Personal">
  <p><strong>Nombre:</strong> Juan Pérez</p>
  <p><strong>Edad:</strong> 25 años</p>
</Card>
```

**Estructura completa sugerida:**
```javascript showLineNumbers
function Card({ titulo, children }) {
  // Implementa el Card aquí
}

export default function PerfilUsuario() {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      
      <Card titulo="Información Personal">
        {/* Contenido aquí */}
      </Card>
      
      <Card titulo="Contacto">
        {/* Contenido aquí */}
      </Card>
    </div>
  );
}
```

## ~5~ Criterios de Evaluación

Tu solución será evaluada por:
- Componente `Card` creado correctamente
- `Card` acepta y usa `children`
- `Card` acepta y muestra `titulo`
- Al menos 2 Cards renderizados
- Card "Información Personal" con nombre y edad
- Card "Contacto" con email
- Estilos aplicados al Card

¡Adelante! 🚀