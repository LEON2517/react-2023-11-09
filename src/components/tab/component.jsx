import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tab = ({ children, onClick, className }) => {
  return (
    <div onClick={onClick} className={classNames(styles.tab, className)}>
      {children}
    </div>
  )
}