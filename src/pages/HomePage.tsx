import Lesson from '@/components/Lesson'

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
}

const HomePage = () => {
  return <Lesson {...props}></Lesson>
}

export default HomePage
