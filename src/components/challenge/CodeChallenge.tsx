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
import { useTheme } from '@/store/useTheme'
import Markdown from '@/components/Markdown'
import type { CodeChallengeConfig, QuizzProps } from '@/types'
import { useParams } from 'react-router-dom'
import { useAuth } from '@/store'
import { challengeService } from '@/services/api/challengeService'
import SpinnerPage from '../SpinnerPage'

interface CodeChallengeProps extends CodeChallengeConfig, Omit<QuizzProps, 'onContinue'> {}

const CodeChallenge = ({
  markdownUrl,
  files,
  testFiles,
  showTest,
  onSuccess,
}: CodeChallengeProps) => {
  const [markdown, setMarkdown] = useState('')
  const [currentFiles, setCurrentFiles] = useState(files)
  const testRunnerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme((state) => state.theme)
  const { user } = useAuth()
  const { lessonId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [challengeId, setChallengeId] = useState('')

  useEffect(() => {
    fetch(markdownUrl)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
  }, [markdownUrl])

  useEffect(() => {
    async function getChallenge() {
      if (user && lessonId && user.currentLesson > parseInt(lessonId)) {
        const challenge = await challengeService.getOneByLesson(parseInt(lessonId))
        setCurrentFiles(challenge.files)
        setChallengeId(challenge._id)
      }

      setIsLoading(false)
    }

    getChallenge()
  }, [user, lessonId])

  const handleClick = useCallback(() => {
    if (!testRunnerRef.current) return

    const runTestsBtn: HTMLButtonElement | null =
      testRunnerRef.current.querySelector('button.sp-button')

    if (runTestsBtn !== null) runTestsBtn.click()
  }, [])

  const allFiles = useMemo(() => {
    return { ...currentFiles, ...testFiles }
  }, [currentFiles, testFiles])

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

  if (isLoading) return <SpinnerPage />

  return (
    <div className="w-full h-full">
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
            <TestRunner
              onClick={handleClick}
              onSuccess={onSuccess}
              initialFiles={files}
              challengeId={challengeId}
            />
          </div>
        </div>
        <div ref={testRunnerRef}>
          <SandpackTests watchMode={false} hidden />
        </div>
      </SandpackProvider>
    </div>
  )
}

export default CodeChallenge
