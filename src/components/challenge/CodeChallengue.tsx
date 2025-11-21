import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackTests,
} from '@codesandbox/sandpack-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { atomDark as theme } from '@codesandbox/sandpack-themes'
import { useRef, useState } from 'react'
import TestListener from './TestRunner'

interface CodeChallengeProps {
  markdownUrl: string
  files: Record<string, string>
  testFiles: Record<string, string>
  showTest?: boolean
}

const CodeChallenge = ({ markdownUrl, files, testFiles, showTest }: CodeChallengeProps) => {
  console.log(markdownUrl)
  const [showModal, setShowModal] = useState(false)
  const testRunnerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (testRunnerRef.current) {
      console.log(testRunnerRef.current)
      const runTestsBtn: HTMLButtonElement | null =
        testRunnerRef.current.querySelector('button.sp-button')
      if (runTestsBtn !== null) {
        runTestsBtn.click()
      }
    }
  }

  const visibleFiles = showTest
    ? [...Object.keys(files), ...Object.keys(testFiles)]
    : [...Object.keys(files)]

  return (
    <>
      <div className="w-full h-[calc(100vh-61px)]">
        <button onClick={handleClick}>click</button>
        <SandpackProvider
          className="h-full!"
          template="react"
          files={{ ...files, ...testFiles }}
          theme={theme}
          options={{
            activeFile: Object.keys(files)[0],
            visibleFiles,
          }}
          customSetup={{
            dependencies: {
              '@testing-library/react': 'latest',
              '@testing-library/jest-dom': 'latest',
              '@testing-library/dom': 'latest',
            },
          }}
        >
          <SandpackLayout className="flex-col h-full">
            <SandpackCodeEditor
              showLineNumbers
              wrapContent
              showTabs
              showRunButton
              showInlineErrors
            />
            <SandpackPreview showOpenInCodeSandbox={false} />
            <div ref={testRunnerRef}>
              <SandpackTests watchMode={false} hidden />
            </div>
          </SandpackLayout>
          <TestListener />
        </SandpackProvider>
      </div>

      <AlertDialog open={showModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowModal(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CodeChallenge
