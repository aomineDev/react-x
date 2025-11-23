import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/hooks-avanzados/Nivel4.md',
  files: {
    '/App.js': `import React, { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

function Header() {
  // Implementa useContext aquí para obtener tema y cambiarTema
  
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: tema === 'claro' ? '#f1f5f9' : '#1e293b',
      color: tema === 'claro' ? '#1e293b' : '#f1f5f9',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h2>Mi Aplicación</h2>
      <button 
        onClick={() => cambiarTema(tema === 'claro' ? 'oscuro' : 'claro')}
        style={{ 
          padding: '8px 16px', 
          backgroundColor: tema === 'claro' ? '#3b82f6' : '#fbbf24',
          color: tema === 'claro' ? 'white' : '#1e293b',
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
      >
        Cambiar a {tema === 'claro' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
}

function Contenido() {
  // Implementa useContext aquí para obtener tema
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: tema === 'claro' ? '#ffffff' : '#334155',
      color: tema === 'claro' ? '#1e293b' : '#f1f5f9',
      borderRadius: '8px',
      border: "2px solid " + (tema === 'claro' ? '#e2e8f0' : '#475569')
    }}>
      <p>Tema actual: <strong>{tema}</strong></p>
      <p>Este contenido cambia de estilo según el tema global</p>
    </div>
  );
}

function App() {
  const [tema, setTema] = useState('claro');
  
  const cambiarTema = (nuevoTema) => {
    setTema(nuevoTema);
  };
  
  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      <div>
        <Header />
        <Contenido />
      </div>
    </TemaContext.Provider>
  );
}

export default App;

`,
  },
}
const Level4 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level4
