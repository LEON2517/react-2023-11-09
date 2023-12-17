import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";
import { ThemeProvider } from "../theme/component";
import { useTheme } from "../theme/hooks";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = ({ className }) => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate()

  return (
    <header className={classNames(styles.header, className)}>
      <Link to="/">
        Logo
      </Link>
      <NavLink to="/restaurants" className={({ isActive }) => classNames(styles.link, {
        [styles.active]: isActive
      })}>
        Restaurant
      </NavLink>
      <div className={styles.box}>
        <ThemeProvider>
          <Button onClick={() => navigate("/restaurants")}>
            Заказ
          </Button>
          <Button onClick={toggleTheme}>
            Смена темы
          </Button>
        </ThemeProvider>
      </div>
    </header>
  )
}