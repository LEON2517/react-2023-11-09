import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tabs = ({ restaurants, onRestaurantSelect, className }) => (
  <ul className={classNames(styles.tabs, className)}>
    {restaurants.map(({ name, id }) => <li className={styles.tabItem}>
      <Tab onClick={() => onRestaurantSelect(id)}>
        {name}
      </Tab>
    </li>)}
  </ul>
)