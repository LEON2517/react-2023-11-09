import styles from "./styles.module.scss";
import classNames from "classnames";

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      Footer
    </footer>
  )
}