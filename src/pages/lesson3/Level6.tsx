import Lesson from '@/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/interactividad-y-estado/Nivel6.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level6 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level6
