import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/formularios/Nivel3.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level3 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level3
