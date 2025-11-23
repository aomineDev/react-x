import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/propertie/Nivel3.md',
  files: {
    '/App.js': `import TarjetaEmpleado from './TarjetaEmpleado.jsx'
    
export default function App() {
 
}
`,
    '/TarjetaEmpleado.jsx': `export default function TarjetaEmpleado () {
}`,
  },
}
const Level3 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level3
