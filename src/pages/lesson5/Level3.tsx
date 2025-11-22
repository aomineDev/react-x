import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/renderizado/Nivel3.md',
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
