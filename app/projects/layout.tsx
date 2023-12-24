import ProjectContextProvider from "@/context/ProjectContextProvider"
import React from "react"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ProjectContextProvider>
        {children}
      </ProjectContextProvider>
    </div>  
  )
}