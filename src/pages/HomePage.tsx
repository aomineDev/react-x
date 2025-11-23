import Lesson from '@/components/lesson/Lesson'

const props = {
  markdownUrl: 'content.md',
  files: {
    '/App.js': `export default function App() {
  return (
		<>
			<h1>Hello world</h1>
		</>
	)
}
`,
    '/Button.jsx': `export default () => <button>Hello</button>`,
  },
  lesson: 'Introducción',
  nivel: 'Nivel 1',
}

const HomePage = () => {
  return <Lesson {...props}></Lesson>
}

export default HomePage
