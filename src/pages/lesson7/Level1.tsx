import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/hooks-avanzados/Nivel1.md',
  files: {
    '/App.js': `
import React, { useReducer } from 'react';

// Implementa aquí la función reducer

function App() {
  // Implementa aquí useReducer
  
  return (
    <div>
      <h2>Gestor de Tareas</h2>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f1f5f9', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p style={{ fontSize: '18px' }}>
          <strong>Tareas agregadas:</strong> {state.tareas}
        </p>
        <p style={{ fontSize: '18px' }}>
          <strong>Tareas completadas:</strong> {state.completadas}
        </p>
        <p style={{ fontSize: '18px', color: '#64748b' }}>
          <strong>Pendientes:</strong> {state.tareas - state.completadas}
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => {/* dispatch agregar */}}
          style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Agregar Tarea
        </button>
        
        <button 
          onClick={() => {/* dispatch completar */}}
          style={{ padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Completar Tarea
        </button>
        
        <button 
          onClick={() => {/* dispatch reset */}}
          style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Reiniciar
        </button>
      </div>
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
