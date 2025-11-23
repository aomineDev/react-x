import Lesson from '@/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/interactividad-y-estado/Nivel5.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level5 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level5
