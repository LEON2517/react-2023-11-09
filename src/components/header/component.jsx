import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";
import { ThemeProvider } from "../theme/component";
import { useTheme } from "../theme/hooks";

export const Header = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className={classNames(styles.header, className)}>
      Header
      <div className={styles.box}>
        <ThemeProvider>
          <Button>
            Заказ
          </Button>
          <Button onClick={() => toggleTheme(theme)}>
            Смена темы
          </Button>
        </ThemeProvider>
      </div>
    </header>
  )
}