import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Dishes = ({ className, dishIds }) => {
  return (
    <ul className={className}>
      {dishIds.map(dishId => <li className={styles.dishItem}>
        <Dish id={dishId} />
      </li>)}
    </ul>
  )
}