import { Dish } from "../dish/component";
import styles from "./styles.module.scss";

export const Dishes = ({ menu, className }) => <ul className={className}>
  {menu.map(dish => <li className={styles.dishItem}>
    <Dish dish={dish} />
  </li>)}
</ul>