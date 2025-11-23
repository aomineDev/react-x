import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/propertie/Nivel1.md',
  files: {
    '/App.js': `import TarjetaPerfil from './TarjetaPerfil.jsx'
    
export default function App() {
 
}
`,
    '/TarjetaPerfil.jsx': `export default function TarjetaPerfil () {
}`,
  },
}
const Level1 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level1
