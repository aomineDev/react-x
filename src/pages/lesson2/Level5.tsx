import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/propertie/Nivel5.md',
  files: {
    '/App.js': `import Boton from './Boton.jsx'
    
export default function App() {
 
}
`,
    '/Boton.jsx': `export default function Boton () {
}`,
  },
}
const Level5 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level5
