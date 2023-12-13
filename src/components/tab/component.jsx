import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tab = ({ onClick, className, restaurant }) => {
  return (
    <div onClick={onClick} className={classNames(styles.tab, className)}>
      {restaurant.name}
    </div>
  )
}