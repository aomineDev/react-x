import CodeChallenge from '@/components/challenge/CodeChallengue'

const props = {
  markdownUrl: '',
  files: {
    '/App.js': `export default function Counter() {
  // Tu código aquí
  
  return (
    <div>
      <h2>Contador: 0</h2>
      <button>Incrementar</button>
    </div>
  );
}`,
  },
  testFiles: {
    '/App.test.js': `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './App';

test('muestra el contador inicial en 0', () => {
  render(<Counter />);
  expect(screen.getByText(/contador:/i)).toBeInTheDocument();
});

test('incrementa el contador al hacer clic', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /incrementar/i });
  
  fireEvent.click(button);
  expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();
});

test('no permite valores mayores a 10', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /incrementar/i });
  
  // Hacer clic 15 veces
  for (let i = 0; i < 15; i++) {
    fireEvent.click(button);
  }
  
  // Debe quedarse en 10
  expect(screen.getByText(/contador: 10/i)).toBeInTheDocument();
});

test('usa useState', () => {
  const code = Counter.toString();
  expect(code).toMatch(/useState/);
});`,
  },
}

// solution: `import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Contador: {count}</h2>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }`

const CodeChallengue = () => {
  return <CodeChallenge {...props} showTest></CodeChallenge>
}

export default CodeChallengue
