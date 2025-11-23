import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/componente/Nivel1.md',
  files: {
    '/App.js': `export default function Saludo() {
}
`,
  },
}
const Level1 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level1
