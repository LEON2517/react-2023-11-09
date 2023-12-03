import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  console.log('theme', theme)

  /*
  без useCallback
  const toggleTheme = setTheme(theme === 'light' ? 'dark' : 'light')

  useCallback с зависимостями
   - если theme изменится - вернется новая ссылка на функцию
   - если theme не изменится - вернется старая ссылка на функцию
   const toggleTheme = useCallback(setTheme(theme === 'light' ? 'dark' : 'light'), [theme])*/

  /*
    useCallback без зависимостей (лучший вариант)
    - у нас здесь нет зависимостей, как useCallback понимает, когда возвращать старую ссылку на функцию, а когда новую?
  */
  const toggleTheme = useCallback((currentTheme) =>
    setTheme(currentTheme === 'light' ? 'dark' : 'light'), []
  )

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}