"use client"
import React, { FC, useEffect, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

type CodeBlockProps = { language: string; code: string }

// react-code-blocks passes styling props (codeBlock, copied) through to DOM elements;
// styled-components v6 no longer filters them, so drop anything that isn't a valid HTML attribute
const shouldForwardProp = (prop: string, target: unknown) =>
  typeof target === 'string' ? isPropValid(prop) : true

// the highlighter serializes inline styles differently on server and client, so it only
// renders after mount; the server sends a plain <pre> of the same code in its place
const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="not-prose my-6">
      {mounted ? (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <CopyBlock
            language={language}
            text={code}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        </StyleSheetManager>
      ) : (
        <pre className="overflow-x-auto rounded bg-[#282a36] p-4 text-sm text-[#f8f8f2]">{code}</pre>
      )}
    </section>
  )
}

export default CodeBlock
