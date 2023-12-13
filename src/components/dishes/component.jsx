import styles from "./styles.module.scss";
import { DishContainer } from "../dish/container";

export const Dishes = ({ className, dishIds }) => {
  return (
    <ul className={className}>
      {dishIds.map(dishId => <li className={styles.dishItem}>
        <DishContainer dishId={dishId} />
      </li>)}
    </ul>
  )
}