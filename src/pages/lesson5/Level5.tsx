import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/renderizado/Nivel5.md',
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
