import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/arquitectura-composicion/Nivel3.md',
  files: {
    '/App.js': `import React from 'react';

// Implementa aquí el componente Card

// Implementa aquí el componente Dashboard

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Sistema de Slots</h1>
      
      <Card
        header={<h2 style={{ margin: 0 }}>Producto Destacado</h2>}
        footer={
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ 
              padding: '8px 16px', 
              backgroundColor: '#3b82f6', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Comprar
            </button>
            <button style={{ 
              padding: '8px 16px', 
              backgroundColor: '#64748b', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Ver Detalles
            </button>
          </div>
        }
      >
        <h3>Laptop Pro 2024</h3>
        <p>Procesador de última generación, 16GB RAM, 512GB SSD</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>
          $1,299.99
        </p>
      </Card>
      
      <Card
        header={<h2 style={{ margin: 0 }}>Notificación</h2>}
      >
        <p>Tu pedido ha sido enviado y llegará en 2-3 días hábiles</p>
      </Card>
      
      <Dashboard
        sidebar={
          <div>
            <h3>Menú</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '8px 0', cursor: 'pointer' }}>Dashboard</li>
              <li style={{ padding: '8px 0', cursor: 'pointer' }}>Productos</li>
              <li style={{ padding: '8px 0', cursor: 'pointer' }}>Clientes</li>
              <li style={{ padding: '8px 0', cursor: 'pointer' }}>Reportes</li>
            </ul>
          </div>
        }
        main={
          <div>
            <h2>Resumen del Día</h2>
            <p>Ventas totales: $3,456.78</p>
            <p>Nuevos clientes: 12</p>
            <p>Pedidos completados: 45</p>
          </div>
        }
        widgets={
          <div>
            <div style={{ padding: '15px', backgroundColor: '#dbeafe', borderRadius: '8px', marginBottom: '10px' }}>
              <strong>Alerta:</strong> Stock bajo en 3 productos
            </div>
            <div style={{ padding: '15px', backgroundColor: '#dcfce7', borderRadius: '8px' }}>
              <strong>Éxito:</strong> Meta del mes alcanzada
            </div>
          </div>
        }
      />
    </div>
  );
}

export default App;
`,
  },
}
const Level3 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level3
