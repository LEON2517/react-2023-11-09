import styles from "./styles.module.scss";
import { DishContainer } from "../dish/container";

export const Dishes = ({ className, dishes }) => {
  if (!dishes) return null;
  return (
    <ul className={className}>
      {dishes.map(dish => <li className={styles.dishItem}>
        <DishContainer dish={dish} />
      </li>)}
    </ul>
  )
}