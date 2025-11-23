import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/renderizado/Nivel4.md',
  files: {
    '/App.js': `export default function App() {
 
}
`,
  },
}
const Level4 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level4
