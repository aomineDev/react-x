import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { atomDark, aquaBlue } from '@codesandbox/sandpack-themes'
import { useTheme } from '@/store/theme'

interface LessonCodeProps {
  files: Record<string, string>
}

const LessonCode = ({ files }: LessonCodeProps) => {
  const theme = useTheme((state) => state.theme)

  return (
    <SandpackProvider
      className="h-full!"
      theme={theme === 'dark' ? atomDark : aquaBlue}
      template="react"
      files={files}
    >
      <SandpackLayout className="flex-col h-full">
        <SandpackCodeEditor
          showInlineErrors
          showLineNumbers
          wrapContent
          className="custom-scroll"
        />
        <SandpackPreview showOpenInCodeSandbox={false} />
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default LessonCode
