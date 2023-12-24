"use client";

import React, { useState, FC, createContext, useContext } from "react";
import type { HeaderSectionName } from "@/lib/types";

type ActiveHeaderSectionContextProviderProps = {
  children: React.ReactNode,
}
type ActiveHeaderSectionContextType = {
  activeHeaderSection: HeaderSectionName,
  setActiveHeaderSection:  React.Dispatch<React.SetStateAction<HeaderSectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveHeaderSectionContext = createContext<ActiveHeaderSectionContextType | null>(null);

const ActiveHeaderSectionContextProvider: FC<ActiveHeaderSectionContextProviderProps>  = ({children}) => {
  const [activeHeaderSection, setActiveHeaderSection] = useState<HeaderSectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveHeaderSectionContext.Provider value={
      {activeHeaderSection, setActiveHeaderSection, 
      timeOfLastClick, setTimeOfLastClick}
      }>
      {children}
    </ActiveHeaderSectionContext.Provider>
  )
}

const useActiveHeaderSectionContext = () => {
  const context = useContext(ActiveHeaderSectionContext);

  if (context === null) {
    throw new Error("useActiveSectionContext must be consumed within an ActiveSectionContextProvider block");
  }
  return context
}

export default ActiveHeaderSectionContextProvider
export { useActiveHeaderSectionContext }