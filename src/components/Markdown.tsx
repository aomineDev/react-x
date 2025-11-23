import { MarkdownHooks as ReactMarkdown } from 'react-markdown'
import remarkgfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Check, Copy } from 'lucide-react'
import { useState, type PropsWithChildren, type ReactElement, type ReactNode } from 'react'

interface MarkdownProps {
  children: string
  full?: boolean
}

type GenericProps = PropsWithChildren<Record<string, unknown>>

type CodeElement = ReactElement<GenericProps>

const isReactElement = (node: ReactNode): node is CodeElement => {
  return typeof node === 'object' && node !== null && 'props' in node
}

const isCodeHighlight = (rest: unknown): boolean => {
  return typeof rest === 'object' && rest !== null && 'data-theme' in rest
}

const getTextFromReactNode = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)

  if (Array.isArray(node)) return node.map(getTextFromReactNode).join('')

  if (isReactElement(node) && node.props.children) return getTextFromReactNode(node.props.children)

  return ''
}

const Markdown = ({ children, full = false }: MarkdownProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (code: ReactNode) => {
    let codeText = ''
    if (isReactElement(code)) {
      console.log(code.props.children)
      codeText = getTextFromReactNode(code.props.children)
    }

    await navigator.clipboard.writeText(codeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={'prose dark:prose-invert ' + (full ? 'min-w-full p-5' : 'mx-auto')}>
      <ReactMarkdown
        remarkPlugins={[remarkgfm]}
        rehypePlugins={[
          [
            rehypePrettyCode,
            {
              theme: {
                dark: 'rose-pine',
                light: 'catppuccin-latte',
              },
              bypassInlineCodes: true,
            },
          ],
        ]}
        components={{
          h1(props) {
            const { children, ...rest } = { ...props }
            delete rest.node

            return (
              <h1
                className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                {...rest}
              >
                {children}
              </h1>
            )
          },
          code(props) {
            const { children, ...rest } = { ...props }
            delete rest.node

            if (isCodeHighlight(rest)) return <code {...rest}>{children}</code>
            else
              return (
                <span className="bg-sky-200/30 dark:bg-sky-200/10 inline-block rounded-sm px-2">
                  <code
                    {...rest}
                    className="bg-linear-to-r from-sky-500 to-indigo-400 inline-block bg-clip-text text-transparent not-prose font-semibold text-[0.875em]"
                  >
                    {children}
                  </code>
                </span>
              )
          },
          pre(props) {
            const { children, ...rest } = { ...props }
            delete rest.node

            return (
              <div className="relative group">
                <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer"
                        onClick={() => handleCopy(children)}
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-900 dark:text-gray-300" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <pre
                  {...rest}
                  className="bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg) rounded-2xl"
                >
                  {children}
                </pre>
              </div>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
