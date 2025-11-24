import Markdown from '@/components/Markdown'
import { useEffect, useState } from 'react'

const MarkdownPage = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/content.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Error al cargar Marckdown:', err))
  })

  return <Markdown>{markdown}</Markdown>
}

export default MarkdownPage
