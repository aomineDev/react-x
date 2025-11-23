import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/arquitectura-composicion/Nivel5.md',
  files: {
    '/App.js': `import React, { useState } from 'react';

// Implementa aquí el Custom Hook useContador

function Panel({ titulo, children, color = '#f1f5f9' }) {
  return (
    <div style={{
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '20px'
    }}>
      <div style={{ 
        padding: '15px', 
        backgroundColor: color,
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        {titulo}
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

function ContadorPanel() {
  // Usa el Custom Hook useContador aquí
  
  return (
    <Panel titulo="Contador con Custom Hook" color="#dbeafe">
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
          {valor}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button 
            onClick={decrementar}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            -
          </button>
          <button 
            onClick={reset}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#64748b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reset
          </button>
          <button 
            onClick={incrementar}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            +
          </button>
        </div>
      </div>
    </Panel>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Patrones de Reutilización en React</h1>
      
      <Panel titulo="Composición: Información" color="#dcfce7">
        <h3>¿Qué aprendiste hoy?</h3>
        <ul>
          <li><strong>Composición:</strong> Reutilizar estructura visual con children</li>
          <li><strong>Custom Hooks:</strong> Reutilizar lógica de estado</li>
          <li><strong>PropTypes:</strong> Validar y documentar componentes</li>
          <li><strong>Slots:</strong> Múltiples áreas de contenido</li>
        </ul>
      </Panel>
      
      <ContadorPanel />
      
      <Panel titulo="Regla de Oro" color="#fef3c7">
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <strong>Para UI reutilizable:</strong> Usa Composición (children) <br/>
          <strong>Para lógica reutilizable:</strong> Usa Custom Hooks <br/>
          <strong>Para validación:</strong> Usa PropTypes <br/>
        </p>
      </Panel>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#eff6ff', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
          ¡Felicitaciones! Has completado el módulo de Arquitectura y Composición Práctica
        </p>
      </div>
    </div>
  );
}

export default App;
`,
  },
}
const Level5 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level5
