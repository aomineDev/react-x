import { useEffect, useState } from 'react'
import Markdown from '@/components/Markdown'
import LessonCode from './LessonCode'

interface LessonProps {
  markdownUrl: string
  files: Record<string, string>
}

const HomePage = ({ markdownUrl, files }: LessonProps) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(`/${markdownUrl}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Error al cargar Marckdown:', err))
  }, [markdownUrl])

  return (
    <div className="min-w-full h-[calc(100vh-61px)] flex flex-col md:flex-row">
      <div className="basis-1/2 overflow-y-scroll custom-scroll">
        <Markdown full>{markdown}</Markdown>
      </div>
      <div className="basis-1/2">
        <LessonCode files={files}></LessonCode>
      </div>
    </div>
  )
}

export default HomePage
