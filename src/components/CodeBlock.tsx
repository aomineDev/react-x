import { useEffect, useState } from 'react'
import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/kanagawa-wave')],
  langs: [import('@shikijs/langs/jsx')],
  engine: createOnigurumaEngine(() => import('shiki/wasm')),
})

interface CodeBlockProps {
  children: string
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const [code, setCode] = useState(children)
  useEffect(() => {
    async function highlight() {
      const result = highlighter.codeToHtml(children, {
        lang: 'jsx',
        theme: 'kanagawa-wave',
      })
      setCode(result)
    }

    highlight()
  })

  if (!code) return <p>Loading</p>
  return <div dangerouslySetInnerHTML={{ __html: code }}></div>
}

export default CodeBlock
