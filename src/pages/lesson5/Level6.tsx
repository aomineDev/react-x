import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/renderizado/Nivel6.md',
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
