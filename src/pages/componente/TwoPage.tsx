import Lesson from '@/components/Lesson'
const props = {
  markdownUrl: 'lessons/componente/Nivel2.md',
  files: {
    '/App.js': `export default function Usuario() {
    return (
    <></>
    )
}
`,
  },
}
const TwoPage = () => {
  return <Lesson {...props}></Lesson>
}
export default TwoPage
