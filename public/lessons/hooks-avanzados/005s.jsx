//Recuerda importar el hook
import React, { useState } from 'react';

// Generar una lista grande de items
const todosLosItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [itemsFiltrados, setItemsFiltrados] = useState(todosLosItems.slice(0, 50));
  
  // Implementa useTransition aquí
  
  const filtrarItems = (valor) => {
    setBusqueda(valor);
    
    // Envuelve esta actualización con startTransition
    const filtrados = todosLosItems.filter(item => 
      item.toLowerCase().includes(valor.toLowerCase())
    );
    setItemsFiltrados(filtrados.slice(0, 50));
  };
  
  return (
    <div>
      <h2>Búsqueda con Transición</h2>
      
      <input 
        type="text"
        value={busqueda}
        onChange={(e) => filtrarItems(e.target.value)}
        placeholder="Busca un item..."
        style={{ 
          padding: '10px', 
          width: '300px',
          marginBottom: '20px'
        }}
      />
      
      {isPending && (
        <p style={{ color: '#3b82f6' }}>Actualizando resultados...</p>
      )}
      
      <div style={{ 
        maxHeight: '400px', 
        overflowY: 'auto',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '10px'
      }}>
        <p style={{ color: '#64748b', marginBottom: '10px' }}>
          Mostrando {itemsFiltrados.length} resultados
        </p>
        {itemsFiltrados.map((item, index) => (
          <div 
            key={index}
            style={{ 
              padding: '8px', 
              borderBottom: '1px solid #f1f5f9'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
