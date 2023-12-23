"use client";

import React, { FC, useState, createContext, useContext } from "react"
import type { PageName } from "@/lib/types";

type ActivePageContextProviderProps = {
  children: React.ReactNode,
}

type ActivePageContextType = {
  activePage: PageName,
  setActivePage: React.Dispatch<React.SetStateAction<PageName>>
}

const ActivePageContext = createContext<ActivePageContextType | null>(null);

const ActivePageContextProvider: FC<ActivePageContextProviderProps> = ({children}) => {
  const [activePage, setActivePage] = useState<PageName>("main");

  return (
    <ActivePageContext.Provider value={{activePage, setActivePage}}>
      {children}
    </ActivePageContext.Provider>
  )
}

const useActivePageContext = () => {
  const context = useContext(ActivePageContext);
  if (context === null) {
    throw new Error("useActivePageContext must be consumed within an ActivePageContextProvider block")
  }
  return context
}

export default ActivePageContextProvider;
export { useActivePageContext };
