import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      Footer
      <Button>
        Контакты
      </Button>
    </footer>
  )
}