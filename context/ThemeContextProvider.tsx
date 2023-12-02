"use client";

import React, { FC, createContext, useContext, useState, useEffect } from "react";
import type { Theme } from "@/lib/types";

type ThemeContextProviderProps = {
  children: React.ReactNode,
}

type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void,
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light"); 
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } 
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error("useTheme must be consumed within an ActiveThemeContextProvider block")
  }
  return context;
}

export default ThemeContextProvider;
export { useThemeContext }
