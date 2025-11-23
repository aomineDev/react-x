import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'lessons/componente/Nivel4.md',
  files: {
    '/App.js': `export default function Producto() { 
}
`,
  },
}

const Level4 = () => {
  return <Lesson {...props}></Lesson>
}

export default Level4
