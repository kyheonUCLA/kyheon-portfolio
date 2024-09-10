import ProjectContextProvider from '@/context/ProjectContextProvider'


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <main> 
      <ProjectContextProvider>
        {children}
      </ProjectContextProvider>
    </main>
  )
}
