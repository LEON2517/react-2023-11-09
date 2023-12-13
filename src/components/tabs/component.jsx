import styles from "./styles.module.scss";
import classNames from "classnames";
import { Tab } from "../tab/component";

export const Tabs = ({ className, onRestaurantSelect, restaurants }) => {
  return (
    <ul className={classNames(styles.tabs, className)}>
      {restaurants.map((restaurant) => <li className={styles.tabItem}>
        <Tab onClick={() => onRestaurantSelect(restaurant.id)} restaurant={restaurant} />
      </li>)}
    </ul>
  )
}