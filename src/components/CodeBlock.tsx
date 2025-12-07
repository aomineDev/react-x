import { useEffect, useRef } from 'react'
import { highlight } from '@/util/highlight'

interface CodeBlockProps {
  children: string
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const codeBlock = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function getHighlighted() {
      codeBlock.current!.innerHTML = await highlight(children)
    }

    getHighlighted()
  }, [children])

  return <div ref={codeBlock}></div>
}

export default CodeBlock
