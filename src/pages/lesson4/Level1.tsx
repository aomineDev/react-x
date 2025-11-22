import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/formularios/Nivel1.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level1 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level1
