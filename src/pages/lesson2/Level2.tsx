import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/propertie/Nivel2.md',
  files: {
    '/App.js': `import FichaLibro from './FichaLibro.jsx'
    
export default function App() {
 
}
`,
    '/FichaLibro.jsx': `export default function FichaLibro () {
}`,
  },
}
const Level2 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level2
