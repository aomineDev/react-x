import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

export async function highlight(code: string) {
  const highlighter = await createHighlighterCore({
    themes: [import('@shikijs/themes/kanagawa-wave'), import('@shikijs/themes/one-light')],
    langs: [import('@shikijs/langs/jsx')],
    engine: createOnigurumaEngine(() => import('shiki/wasm')),
  })

  const result = highlighter.codeToHtml(code, {
    lang: 'jsx',
    themes: {
      dark: 'kanagawa-wave',
      light: 'one-light',
    },
  })

  return result
}
