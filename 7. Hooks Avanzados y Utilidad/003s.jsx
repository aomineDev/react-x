import React, { useState, useMemo, useCallback } from 'react';

function App() {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [texto, setTexto] = useState('');
  
  // Implementa useMemo aquí para memorizar numerosPares
  const numerosPares = numeros.filter(n => n % 2 === 0);
  console.log('Calculando números pares...');
  
  // Implementa useCallback aquí para memorizar agregarNumero
  const agregarNumero = () => {
    const nuevoNumero = Math.floor(Math.random() * 100);
    setNumeros(nums => [...nums, nuevoNumero]);
  };
  
  return (
    <div>
      <h2>Optimización por Memorización</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo (no recalcula)"
          style={{ padding: '10px', width: '300px' }}
        />
      </div>
      
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f1f5f9', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p><strong>Números:</strong> {numeros.join(', ')}</p>
        <p><strong>Números Pares:</strong> {numerosPares.join(', ')}</p>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          Total de pares: {numerosPares.length}
        </p>
      </div>
      
      <button 
        onClick={agregarNumero}
        style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Agregar Número Aleatorio
      </button>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#64748b' }}>
        Abre la consola y observa cuándo se ejecuta el cálculo
      </p>
    </div>
  );
}

export default App;
