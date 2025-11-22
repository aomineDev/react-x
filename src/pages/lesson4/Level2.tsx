import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/formularios/Nivel2.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level2 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level2
