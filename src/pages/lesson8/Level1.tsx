import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/arquitectura-composicion/Nivel1.md',
  files: {
    '/App.js': `import React from 'react';

// Implementa aquí el componente Tarjeta

// Implementa aquí el componente Alerta

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Componentes Contenedores</h1>
      
      <Tarjeta>
        <h2>Perfil de Usuario</h2>
        <p><strong>Nombre:</strong> Juan Pérez</p>
        <p><strong>Email:</strong> juan@example.com</p>
        <button style={{ 
          padding: '8px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Editar Perfil
        </button>
      </Tarjeta>
      
      <Tarjeta>
        <h2>Estadísticas</h2>
        <p>Visitas: 1,234</p>
        <p>Seguidores: 567</p>
        <p>Publicaciones: 89</p>
      </Tarjeta>
      
      <Alerta tipo="info">
        <strong>Información:</strong> Tu sesión expirará en 10 minutos
      </Alerta>
      
      <Alerta tipo="exito">
        <strong>Éxito:</strong> Los cambios se guardaron correctamente
      </Alerta>
      
      <Alerta tipo="error">
        <strong>Error:</strong> No se pudo conectar con el servidor
      </Alerta>
    </div>
  );
}

export default App;

`,
  },
}
const Level1 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level1
