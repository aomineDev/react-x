import React, { useState } from 'react';

function ComponenteConErrores() {
  const [renders, setRenders] = useState(0);
  const [segundos, setSegundos] = useState(0);

  // ERROR 1: Este efecto causa un bucle infinito
  // TAREA: Agrega el array de dependencias correcto
  // useEffect(() => {
  //   setRenders(renders + 1);
  // });

  // ERROR 2: Este efecto tiene un stale closure
  // TAREA: Usa la forma funcional de setState
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSegundos(segundos + 1);
  //   }, 1000);
  //   
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <h2>Componente Corregido</h2>
      <p>Número de renders: {renders}</p>
      <p>Cronómetro: {segundos}s</p>
      <p>Si ves esto sin errores, lo lograste</p>
    </div>
  );
}

export default ComponenteConErrores;