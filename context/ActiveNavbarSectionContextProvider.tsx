"use client";

import React, { useState, FC, createContext, useContext } from "react";
import type { NavbarSectionHash } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useProjectContext } from "./ProjectContextProvider";

type ActiveNavbarSectionContextProviderProps = {
  children: React.ReactNode,
}
type ActiveNavbarSectionContextType = {
  activeNavbarSection: NavbarSectionHash,
  setActiveNavbarSection: React.Dispatch<React.SetStateAction<NavbarSectionHash>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
}

const ActiveNavbarSectionContext = createContext<ActiveNavbarSectionContextType | null>(null);

const ActiveNavbarSectionContextProvider: FC<ActiveNavbarSectionContextProviderProps>  = ({children}) => {
  const [activeNavbarSection, setActiveNavbarSection] = useState<NavbarSectionHash>("#intro");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveNavbarSectionContext.Provider value={
      {activeNavbarSection, setActiveNavbarSection,
        timeOfLastClick, setTimeOfLastClick}}>
      {children}
    </ActiveNavbarSectionContext.Provider>
  )
}

const useActiveNavbarSectionContext = () => {
  const context = useContext(ActiveNavbarSectionContext);

  if (context === null) {
    throw new Error("useActiveNavbarSectionContext must be consumed within an ActiveNavbarSectionContextProvider block");
  }
  return context
}

export default ActiveNavbarSectionContextProvider
export { useActiveNavbarSectionContext }