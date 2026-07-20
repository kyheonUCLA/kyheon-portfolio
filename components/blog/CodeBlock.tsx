"use client"
import React, { FC } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

type CodeBlockProps = { language: string; code: string }

const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => (
  <section>
    <CopyBlock
      language={language}
      text={code}
      showLineNumbers={true}
      theme={dracula}
      codeBlock
    />
  </section>
)

export default CodeBlock
