import styles from "./styles.module.scss";
import classNames from "classnames";

export const Dish = ({ className, dish, children }) => {
  if (!dish) return null;
  return (
    <div className={classNames(styles.dish, className)}>
      <span className={styles.title}>
        {dish.name}
      </span>
      {children}
    </div>
  )
}