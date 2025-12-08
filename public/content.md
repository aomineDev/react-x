# A demo of react markdown

`react-markdown` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

- Follows [CommonMark](https://commonmark.org)
- Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Renders actual React elements instead of using ~dangerouslySetInnerHTML~
- Lets you define your own components (to render ~MyHeading~ instead of ~'h1'~)
- Has a lot of `plugins`

## Contents

> Here is an example of a plugin in action

Here is an example of a plugin in action
([~remark-toc~](https://github.com/remarkjs/remark-toc)).
**This section is replaced by an actual table of contents**.

## Syntax highlighting

Here is an example of a plugin to highlight code:
[~rehype-starry-night~](https://github.com/rehypejs/rehype-starry-night).

This is an array `[1, 2, 3]{:js}` of numbers 1 through 3.

```jsx showLineNumbers{12} {4} title="Markdown.tsx" /setCount/ /increment/#v /Contador/#i /return/#s
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}
```

Pretty **neat**, eh?

---

## GFM

### ~1~ Autolink literals

www.example.com, https://example.com, and contact@example.com.

### ~2~ Strikethrough

~one~ or ~~two~~ tildes.

### ~3~ Alerts

_Some_ `alerts`

> [!note]
> Useful information that users should know, even when skimming content.

> [!tip]
> Useful information that users should know, even when skimming content.

> [!important]
> Useful information that users should know, even when skimming content.

> [!warning]
> Useful information that users should know, even when skimming content.

> [!caution]
> Useful information that users should know, even when skimming content.

### ~4~ Table

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Dato A    | Dato B    | Dato C    |
| Dato D    | Dato E    | Dato F    |

### ~5~ Tasklist

- [ ] to do
- [x] done
