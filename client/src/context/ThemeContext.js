import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem("theme");
  const initialTheme = !currentTheme ? "light" : currentTheme;
  const [theme, setTheme] = useState(initialTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, colorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
