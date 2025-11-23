# Inyección de Contenido Múltiple (Slots)

A veces un componente necesita recibir contenido en múltiples ubicaciones específicas, no solo en una. Por ejemplo, un modal puede necesitar un título, un cuerpo y botones de acción por separado.

Para pasar múltiples piezas de contenido a ubicaciones específicas, usas props además de children.

En esta actividad aprenderás a crear componentes con múltiples slots de contenido.

En lugar de solo usar children, puedes aceptar múltiples props que contengan JSX. Aquí un ejemplo:

## **Paso 1 - Recibir varias props JSX**

```javascript
function Modal({ titulo, contenido, acciones }) {
```

## **Paso 2 - Renderizar cada slot en su lugar**

```javascript
return (
  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
    <header style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>{titulo}</header>
    <div style={{ padding: '20px 0' }}>{contenido}</div>
    <footer style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>{acciones}</footer>
  </div>
  )
}
```

- Cada prop representa un "slot" o ranura de contenido
- Puedes pasar cualquier JSX como valor de la prop

## **Paso 3 - Enviar el contenido desde el padre**

```javascript
export default function App() {
  return (
    <Modal
      titulo={<h2>Confirmar Acción</h2>}
      contenido={<p>¿Estás seguro de continuar?</p>}
      acciones={<button>Confirmar</button>}
    />
  )
}
```

- Permite controlar completamente qué se muestra en cada sección.
- Esto da más control sobre dónde va cada pieza de contenido

---

## Crear el componente Card

Implementa el componente `Card` que reciba tres slots:

- `header`: Para el encabezado de la tarjeta
- `body`: Para el contenido principal (usa children como alternativa)
- `footer`: Para acciones o información adicional

```javascript
function Card({ header, children, footer }) {
  return (
    <div
      style={{
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}
    >
      {header && (
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          {header}
        </div>
      )}
      <div style={{ padding: '20px' }}>{children}</div>
      {footer && (
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}
```

## Crear el componente Dashboard

Implementa el componente `Dashboard` que reciba:

- `sidebar`: Contenido del sidebar
- `main`: Contenido principal
- `widgets`: Widgets adicionales

Usa flexbox para organizar los slots.

## Usar los componentes con slots

En App, crea múltiples Cards con diferentes combinaciones de slots y usa Dashboard con su estructura.

---

Implementa el código. Observa cómo los slots te dan control preciso sobre qué contenido va en cada ubicación.

Has aprendido a usar múltiples slots. A continuación aprenderás a documentar y validar props con propTypes.
