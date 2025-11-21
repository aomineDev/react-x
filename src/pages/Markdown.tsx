import ReactMarkdown from '@/components/Markdown'
import { useEffect, useState } from 'react'
const Markdown = () => {
  const [mark, setMark] = useState('')

  useEffect(() => {
    fetch('/content.md')
      .then((res) => res.text())
      .then((text) => setMark(text))
      .catch((err) => console.error('Error al cargar Markdown:', err))
  })

  return (
    <>
      <div className="prose dark:prose-invert mx-auto">
        <ReactMarkdown>{mark}</ReactMarkdown>
      </div>
    </>
  )
}

export default Markdown
