import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/interactividad-y-estado/Nivel2.md',
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
