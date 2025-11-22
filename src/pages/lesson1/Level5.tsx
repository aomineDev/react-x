import Lesson from '@/components/Lesson'

const props = {
  markdownUrl: 'lessons/componente/Nivel5.md',
  files: {
    '/App.js': `export default function VideoJuego() {
}
`,
  },
}

const Level5 = () => {
  return <Lesson {...props}></Lesson>
}

export default Level5
