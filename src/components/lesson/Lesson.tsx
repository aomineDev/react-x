import { useEffect, useState } from 'react'
import Markdown from '@/components/Markdown'
import LessonCode from './LessonCode'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { type LessonConfig } from '@/types/interfaceConfig.d'

const HomePage = ({ markdownUrl, files, lesson, nivel, next, prev }: LessonConfig) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(`/${markdownUrl}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Error al cargar Marckdown:', err))
  }, [markdownUrl])

  return (
    <div className="min-w-full h-full flex flex-col md:flex-row">
      <div className="basis-1/2 grow overflow-y-scroll custom-scroll relative">
        <div
          className={`px-8 py-4 flex items-center justify-between sticky top-0 left-o w-full bg-background z-50 border-b border-gray-300 dark:border-gray-700 ${
            files === undefined ? 'mb-5 max-w-[65ch] mx-auto' : ''
          }`}
        >
          <h2 className="text-sm text-gray-400 capitalize">{`${lesson} - ${nivel}`}</h2>
          <div className="flex gap-2">
            {prev && (
              <Button size="icon-sm" variant="outline" asChild>
                <Link to={prev}>
                  <ChevronLeft />
                </Link>
              </Button>
            )}
            <Button size="icon-sm" variant="outline" asChild>
              <Link to={next}>
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
        {files === undefined ? (
          <Markdown>{markdown}</Markdown>
        ) : (
          <Markdown full>{markdown}</Markdown>
        )}
      </div>
      {files !== undefined && (
        <div className="basis-1/2">
          <LessonCode files={files}></LessonCode>
        </div>
      )}
    </div>
  )
}

export default HomePage
