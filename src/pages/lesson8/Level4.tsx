import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/arquitectura-composicion/Nivel4.md',
  files: {
    '/App.js': `import React from 'react';
import PropTypes from 'prop-types';

function Tarjeta({ titulo, descripcion, imagen, destacado }) {
  return (
    <div style={{
      border: destacado ? '3px solid #3b82f6' : '2px solid #e2e8f0',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: destacado ? '#eff6ff' : '#ffffff'
    }}>
      {imagen && (
        <div style={{ 
          width: '100%', 
          height: '150px', 
          backgroundColor: '#e2e8f0',
          borderRadius: '4px',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b'
        }}>
          {imagen}
        </div>
      )}
      <h2 style={{ margin: '0 0 10px 0' }}>{titulo}</h2>
      <p style={{ margin: 0, color: '#64748b' }}>{descripcion}</p>
    </div>
  );
}

// Implementa propTypes para Tarjeta aquí

function Badge({ texto, color, tamaño }) {
  const colores = {
    azul: '#dbeafe',
    verde: '#dcfce7',
    rojo: '#fee2e2',
    gris: '#f1f5f9'
  };
  
  const tamaños = {
    pequeño: '12px',
    mediano: '14px',
    grande: '16px'
  };
  
  return (
    <span style={{
      backgroundColor: colores[color],
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: tamaños[tamaño],
      fontWeight: '500',
      display: 'inline-block'
    }}>
      {texto}
    </span>
  );
}

// Implementa propTypes y defaultProps para Badge aquí

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Validación con PropTypes</h1>
      
      <Tarjeta
        titulo="Curso de React"
        descripcion="Aprende React desde cero hasta avanzado"
        imagen="📚 Imagen del curso"
        destacado={true}
      />
      
      <Tarjeta
        titulo="Curso de JavaScript"
        descripcion="Domina JavaScript moderno"
      />
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
        <Badge texto="Nuevo" color="azul" tamaño="pequeño" />
        <Badge texto="Destacado" color="verde" tamaño="mediano" />
        <Badge texto="Agotado" color="rojo" tamaño="grande" />
        <Badge texto="Promoción" color="gris" />
      </div>
      
      <p style={{ marginTop: '30px', color: '#64748b', fontSize: '14px' }}>
        Abre la consola del navegador para ver las validaciones de PropTypes
      </p>
    </div>
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
