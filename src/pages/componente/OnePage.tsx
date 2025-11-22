import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/componente/Nivel1.md',
  files: {
    '/App.js': `export default function Saludo() {
 
}
`,
  },
}
const OnePage = () => {
  return <Lesson {...props}></Lesson>
}
export default OnePage
