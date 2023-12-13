import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTheme } from "../theme/hooks";

export const Button = ({ children, className, onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className, {
      [styles.primary]: theme === 'light',
      [styles.secondary]: theme === 'dark'
    })}
    >
      {children}
    </button>
  )
}