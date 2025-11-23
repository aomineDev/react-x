import React, {  } from 'react';

// Implementa aquí el Custom Hook useToggle

function App() {
  // Usa useToggle para mostrarTexto y toggleTexto
  
  // Usa useToggle para modoOscuro y toggleModo
  
  return (
    <div style={{
      backgroundColor: modoOscuro ? '#1e293b' : '#ffffff',
      color: modoOscuro ? '#f1f5f9' : '#1e293b',
      padding: '30px',
      borderRadius: '8px',
      minHeight: '300px'
    }}>
      <h2>Custom Hooks en Acción</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={toggleModo}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: modoOscuro ? '#fbbf24' : '#3b82f6',
            color: modoOscuro ? '#1e293b' : 'white',
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Modo {modoOscuro ? 'Claro' : 'Oscuro'}
        </button>
        
        <button 
          onClick={toggleTexto}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer'
          }}
        >
          {mostrarTexto ? 'Ocultar' : 'Mostrar'} Texto
        </button>
      </div>
      
      {mostrarTexto && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: modoOscuro ? '#334155' : '#f1f5f9',
          borderRadius: '8px'
        }}>
          <p>Este texto se puede mostrar y ocultar usando el Custom Hook</p>
          <p>El mismo hook se reutiliza para dos funcionalidades diferentes</p>
        </div>
      )}
      
      <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
        El Custom Hook useToggle encapsula la lógica de alternar valores booleanos
      </p>
    </div>
  );
}

export default App;
