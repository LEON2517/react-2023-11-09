import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() =>
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light'), []
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}