import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState(defaultTheme);

/*  // переписал свой useCallback
  const toggleTheme = useCallback((currentTheme) =>
    setTheme(currentTheme === 'light' ? 'dark' : 'light'), []

    // в Header изменил проброс данных
  )*/

  const toggleTheme = useCallback(() =>
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light'), []
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}