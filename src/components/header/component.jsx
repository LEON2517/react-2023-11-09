import styles from "./styles.module.scss";
import classNames from "classnames";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      Header
    </header>
  )
}