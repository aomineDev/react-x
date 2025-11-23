import { useEffect, useState } from 'react'
import Markdown from '@/components/Markdown'
import LessonCode from './LessonCode'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface LessonProps {
  markdownUrl: string
  files: Record<string, string>
  lesson: string
  nivel: string
}

const HomePage = ({ markdownUrl, files, lesson, nivel }: LessonProps) => {
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
        <div className="p-5 pb-0 flex justify-between">
          <h2 className="text-sm text-gray-400 capitalize">{`${lesson} - ${nivel}`}</h2>
          <div className="flex gap-2">
            <Button size="icon-sm" variant="outline">
              <ChevronLeft />
            </Button>
            <Button size="icon-sm" variant="outline">
              <ChevronRight />
            </Button>
          </div>
        </div>
        <Markdown full>{markdown}</Markdown>
      </div>
      <div className="basis-1/2">
        <LessonCode files={files}></LessonCode>
      </div>
    </div>
  )
}

export default HomePage
