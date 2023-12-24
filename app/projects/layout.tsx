import ActiveNavbarSectionContextProvider from "@/context/ActiveNavbarSectionContextProvider"
import ProjectContextProvider from "@/context/ProjectContextProvider"
import React from "react"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ActiveNavbarSectionContextProvider>
      <ProjectContextProvider>
        {children}
      </ProjectContextProvider>
      </ActiveNavbarSectionContextProvider>
    </div>  
  )
}