import { Sandpack } from '@codesandbox/sandpack-react'
import { atomDark, aquaBlue } from '@codesandbox/sandpack-themes'
import { useEffect, useState } from 'react'
import Markdown from '@/components/Markdown'
import { useTheme } from '@/store/theme'

interface LessonProps {
  markdownUrl: string
  files: Record<string, string>
}

const HomePage = ({ markdownUrl, files }: LessonProps) => {
  const [markdown, setMarkdown] = useState('')
  const theme = useTheme((state) => state.theme)

  useEffect(() => {
    fetch(`/${markdownUrl}`)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Error al cargar Marckdown:', err))
  })

  return (
    <div className="min-w-full h-screen max-h-[calc(100vh-61px)] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 max-h-full overflow-y-scroll custom-scroll">
        <div className="prose dark:prose-invert mx-auto">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Sandpack
          files={files}
          options={{
            wrapContent: true,
            showLineNumbers: true,
            showInlineErrors: true,
            showConsoleButton: true,
            visibleFiles: [...Object.keys(files)],
            activeFile: Object.keys(files)[0],
            classes: {
              'sp-wrapper': 'h-[500px]! md:h-full!',
              'sp-layout': 'flex-col h-full',
              'sp-stack': 'w-full!',
            },
          }}
          theme={theme === 'dark' ? atomDark : aquaBlue}
          template="react"
        />
      </div>
    </div>
  )
}

export default HomePage
