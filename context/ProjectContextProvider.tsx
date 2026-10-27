"use client";

import React, { FC, createContext, useContext } from "react";
import type { ProjectDataType } from "@/lib/types";
import { allProjectsData } from "@/lib/data";
import { usePathname } from "next/navigation";

type ProjectContextProviderProps = {
  children: React.ReactNode,
}
type ProjectContextType = {
  project: ProjectDataType,
}

const ProjectContext = createContext<ProjectContextType | null>(null);

const ProjectContextProvider: FC<ProjectContextProviderProps> = ({children}) => {
  const path = usePathname();
  // derived from the URL on every render so client-side navigation between projects stays in sync
  const project = allProjectsData.find((entry) => entry.page === path.split('/').pop()) || allProjectsData[0];

  return (
    <ProjectContext.Provider value={{project}}>
      {children}
    </ProjectContext.Provider>
  )
}

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === null) {
    throw new Error("useProjectContext must be consumed within an ProjectContextProvider block");
  }
  return context;
}

export default ProjectContextProvider;
export { useProjectContext };