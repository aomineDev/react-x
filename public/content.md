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

```jsx showLineNumbers {4} title="Markdown.tsx" /MarkdownHooks/
import React from 'react'
import ReactDom from 'react-dom'
import { MarkdownHooks } from 'react-markdown'
import rehypeStarryNight from 'rehype-starry-night'

const markdown = `
# Your markdown here
`

ReactDom.render(
	<MarkdownHooks rehypePlugins={[rehypeStarryNight]}>{markdown}</MarkdownHooks>,
	document.querySelector('#content')
)
```

Pretty neat, eh?

## GitHub flavored `markdown` (GFM)

For GFM, you can _also_ use a plugin:
[~remark-gfm~](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

|    Feature | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
|        GFM | 100% w/ ~remark-gfm~ |

~~strikethrough~~

- [ ] task list
- [x] checked item

https://example.

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done

| Columna 1 | Columna 2 | Columna 3 |
| --------- | --------- | --------- |
| Dato A    | Dato B    | Dato C    |
| Dato D    | Dato E    | Dato F    |
