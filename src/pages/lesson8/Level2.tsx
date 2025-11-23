import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/arquitectura-composicion/Nivel2.md',
  files: {
    '/App.js': `import React from 'react';

// Implementa aquí el componente PageLayout

// Implementa aquí el componente Sidebar

function App() {
  return (
    <PageLayout>
      <Sidebar>
        <h2>Panel de Control</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#dbeafe', 
            borderRadius: '8px' 
          }}>
            <h3>Usuarios</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,234</p>
          </div>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#dcfce7', 
            borderRadius: '8px' 
          }}>
            <h3>Ventas</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$45,678</p>
          </div>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#fef3c7', 
            borderRadius: '8px' 
          }}>
            <h3>Pedidos</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>89</p>
          </div>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#fce7f3', 
            borderRadius: '8px' 
          }}>
            <h3>Productos</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>456</p>
          </div>
        </div>
      </Sidebar>
    </PageLayout>
  );
}

export default App;
`,
  },
}
const Level2 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level2
