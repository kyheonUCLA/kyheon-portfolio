import ProjectNavbar from '@/components/blog/ProjectNavbar'
import ActiveNavbarSectionContextProvider from '@/context/ActiveNavbarSectionContextProvider'
import ProjectContextProvider from '@/context/ProjectContextProvider'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <main> 
      <ActiveNavbarSectionContextProvider>
        {children}
      </ActiveNavbarSectionContextProvider>
    </main>
  )
}
