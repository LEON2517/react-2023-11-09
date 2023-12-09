import styles from "./styles.module.scss";
import classNames from "classnames";
import { TabContainer } from "../tab/container";

export const Tabs = ({ className, onRestaurantSelect, restaurantIds }) => {
  return (
    <ul className={classNames(styles.tabs, className)}>
      {restaurantIds.map((restaurantId) => <li className={styles.tabItem}>
        <TabContainer onClick={() => onRestaurantSelect(restaurantId)} restaurantId={restaurantId} />
      </li>)}
    </ul>
  )
}