"use client";
import { createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  
  const toggle = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
