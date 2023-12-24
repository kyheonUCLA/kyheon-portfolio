"use client";

import React, { useState, FC, createContext, useContext } from "react";
import type { ProjectDataType } from "@/lib/types";
import { allProjectsData } from "@/lib/data";
import { usePathname } from "next/navigation";

type ProjectContextProviderProps = {
  children: React.ReactNode,
}
type ProjectContextType = {
  project: ProjectDataType,
  setProject:  React.Dispatch<React.SetStateAction<ProjectDataType>>,
}

const ProjectContext = createContext<ProjectContextType | null>(null);

const ProjectContextProvider: FC<ProjectContextProviderProps> = ({children}) => {
  const path = usePathname();
  const currentProject = allProjectsData.find((entry) => entry.page === path.split('/').pop()) || allProjectsData[0];
  const [project, setProject] = useState<ProjectDataType>(currentProject);
  // might want to use a dictionary instead of list fopr allProjectsData

  return (
    <ProjectContext.Provider value={{project, setProject}}>
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