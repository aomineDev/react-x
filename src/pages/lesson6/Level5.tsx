import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/efectos-secundarios/Nivel5.md',
  files: {
    '/App.js': `//Luego de corregir los dos errores importa useEffect
import React, { useState } from 'react';

function App() {
  //el estado del contador sera 0
  const [mensaje, setMensaje] = useState('Iniciando...');

  // ERROR 1: Este efecto causa un bucle infinito
  // TAREA: Usa useEffect con un mensaje 'componente montado')
  // TAREA 2: Establece el array de dependencias como vacio.
  useEffect(() => {
    setMensaje("componente montado correctamente");
  })

  // ERROR 1: Este efecto tiene un stale closure
  // TAREA: Usa la forma funcional setContador(c => c + 1)
  useEffect(() => {
    const intervalo = setInterval(() => {
    }, 1000);
      return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Corrección de Errores</h2>
      <div>
        <p><strong>Estado:</strong> {mensaje}</p>
        <p><strong>Contador:</strong> {contador} segundos</p>
      </div>
      <div style={{ fontSize: '14px', color: '#64748b' }}>
        <p>Si ves este mensaje sin errores en consola, ¡lo lograste!</p>
        <p>El contador debe incrementar cada segundo correctamente</p>
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
