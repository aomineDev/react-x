import Lesson from '@/components/Lesson'
const props = {
  markdownUrl: 'lessons/componente/Nivel2.md',
  files: {
    '/App.js': `export default function Usuario() {
}
`,
  },
}
const Level2 = () => {
  return <Lesson {...props}></Lesson>
}
export default Level2
