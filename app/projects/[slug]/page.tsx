import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import ProjectNavbar from '@/components/blog/ProjectNavbar'
import HeadingObserver from '@/components/blog/HeadingObserver'
import CodeBlock from '@/components/blog/CodeBlock'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
    },
    components: { CodeBlock },
  })

  return (
    <main className="flex flex-col items-center px-4 pb-28">
      <ProjectNavbar />
      <HeadingObserver />
      <article className="max-w-2xl w-full mt-8 prose dark:prose-invert
        prose-headings:font-medium prose-code:text-sm prose-img:rounded-lg">
        {content}
      </article>
    </main>
  )
}
