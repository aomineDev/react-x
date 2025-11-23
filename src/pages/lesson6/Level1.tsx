import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/efectos-secundarios/Nivel1.md',
  files: {
    '/App.js': `import React, { useState } from 'react';

    function App() {
      const [clicks, setClicks] = useState(0);
      const [mensaje, setMensaje] = useState('Haz clic en el botón');
      
      // Implementa aquí el useEffect
      
      return (
        <div>
          <h2>Contador de Clicks</h2>
          <p>{mensaje}</p>
          <button onClick={() => setClicks(clicks + 1)}>
            Incrementar
          </button>
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
