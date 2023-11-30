import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const Tabs = ({ restaurants, onRestaurantSelect }) => <ul className={styles.carousel}>
  {restaurants.map(({ name, id }) => <li className={styles.carouselItem}>
    <Tab onClick={() => onRestaurantSelect(id)}>
      {name}
    </Tab>
  </li>)}
</ul>