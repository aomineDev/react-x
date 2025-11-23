import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackTests,
} from '@codesandbox/sandpack-react'

import { atomDark, aquaBlue } from '@codesandbox/sandpack-themes'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import TestRunner from './TestRunner'
import { useTheme } from '@/store/theme'
import Markdown from '@/components/Markdown'

interface CodeChallengeProps {
  markdownUrl: string
  files: Record<string, string>
  testFiles: Record<string, string>
  showTest?: boolean
}

const CodeChallenge = ({ markdownUrl, files, testFiles, showTest }: CodeChallengeProps) => {
  const [markdown, setMarkdown] = useState('')
  const testRunnerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme((state) => state.theme)

  useEffect(() => {
    fetch(markdownUrl)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
  }, [markdownUrl])

  const handleClick = useCallback(() => {
    if (!testRunnerRef.current) return

    const runTestsBtn: HTMLButtonElement | null =
      testRunnerRef.current.querySelector('button.sp-button')

    if (runTestsBtn !== null) runTestsBtn.click()
  }, [])

  const allFiles = useMemo(() => {
    return { ...files, ...testFiles }
  }, [files, testFiles])

  const visibleFiles = useMemo(() => {
    return showTest ? [...Object.keys(files), ...Object.keys(testFiles)] : [...Object.keys(files)]
  }, [files, testFiles, showTest])

  const dependencies = useMemo(() => {
    return {
      dependencies: {
        '@testing-library/react': 'latest',
        '@testing-library/jest-dom': 'latest',
        '@testing-library/dom': 'latest',
      },
    }
  }, [])

  return (
    <>
      <div className="w-full h-[calc(100vh-61px)]">
        <SandpackProvider
          className="h-full!"
          template="react"
          files={allFiles}
          theme={theme === 'dark' ? atomDark : aquaBlue}
          options={{
            activeFile: Object.keys(files)[0],
            visibleFiles,
          }}
          customSetup={dependencies}
        >
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            <div className="max-h-full overflow-y-auto custom-scroll">
              <Markdown full>{markdown}</Markdown>
            </div>

            <SandpackLayout className="row-span-2 flex-col h-full">
              <SandpackCodeEditor
                showLineNumbers
                wrapContent
                showTabs
                showRunButton
                showInlineErrors
                className="custom-scroll"
              />
              <SandpackPreview showOpenInCodeSandbox={false} />
            </SandpackLayout>
            <div>
              <TestRunner onClick={handleClick} />
            </div>
          </div>
          <div ref={testRunnerRef}>
            <SandpackTests watchMode={false} hidden />
          </div>
        </SandpackProvider>
      </div>
    </>
  )
}

export default CodeChallenge
