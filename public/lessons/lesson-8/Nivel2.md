# Patrón Layout: Estructura Reutilizable

Muchas páginas de una aplicación comparten la misma estructura: un encabezado, un área de contenido principal, y un pie de página. En lugar de repetir esta estructura en cada página, puedes crear un componente Layout reutilizable.

Para construir estructuras de página reutilizables, usas `props.children` junto con componentes de diseño.

En esta actividad aprenderás a crear layouts con props.children.

Un Layout define la estructura visual y delega el contenido específico a children. Aquí un ejemplo:

## ~1~ Componente Layout

```javascript showLineNumbers
function PageLayout({ children }) {
  return (
    <div>
      <header style={{ padding: '20px', backgroundColor: '#1e293b', color: 'white' }}>
        <h1>Mi Aplicación</h1>
      </header>
      <main style={{ padding: '20px', minHeight: '400px' }}>{children}</main>
      <footer style={{ padding: '20px', backgroundColor: '#f1f5f9', textAlign: 'center' }}>
        © 2025 Mi Empresa
      </footer>
    </div>
  )
}
```

- Define estructura fija (header, main, footer)
- `children` representa el contenido variable de cada página
- Puedes reutilizar el mismo Layout en múltiples páginas

## ~2~  Uso del Layout

```javascript showLineNumbers
export default function App() {
  return (
    <PageLayout>
      <h2>Bienvenido</h2>
      <p>Este es el contenido de la página</p>
    </PageLayout>
  )
}
```

- Lo que va dentro de `<PageLayout> ... </PageLayout>` se renderiza en `<main>` del layout.

---

## Crear el componente PageLayout

Implementa el componente `PageLayout` que incluya:

- Un header con el título de la app
- Un área main que renderice children con padding
- Un footer con información de copyright

## Crear el componente Sidebar

Implementa el componente `Sidebar` que:

- Reciba `children` para el contenido principal
- Tenga un sidebar lateral con navegación
- Use flexbox para la disposición

```javascript showLineNumbers
function Sidebar({ children }) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <aside
        style={{
          width: '200px',
          backgroundColor: '#f1f5f9',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h3>Navegación</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '8px 0' }}>Inicio</li>
          <li style={{ padding: '8px 0' }}>Perfil</li>
          <li style={{ padding: '8px 0' }}>Configuración</li>
        </ul>
      </aside>
      <main style={{ flex: 1 }}>`{children}`</main>
    </div>
  )
}
```

## Combinar layouts

En App, combina ambos layouts: usa PageLayout como contenedor principal y Sidebar dentro del contenido.

---

Implementa el código. Observa cómo puedes anidar layouts para crear estructuras complejas y reutilizables.

Has aprendido a crear layouts reutilizables. A continuación aprenderás a manejar múltiples áreas de contenido con slots.
