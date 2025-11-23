import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/propertie/Nivel4.md',
  files: {
    '/App.js': `import TarjetaUsuario from './TarjetaUsuario.jsx'
    
export default function App() {
 
}
`,
    '/TarjetaUsuario.jsx': `export default function TarjetaUsuario () {
}`,
  },
}
const Level4 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level4
