import Lesson from '@/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/renderizado/Nivel1.md',
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
