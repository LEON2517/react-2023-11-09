import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors";

export const Tabs = ({ onRestaurantSelect, className }) => {
  const restaurantIds = useSelector(selectRestaurantIds)
  return (
    <ul className={classNames(styles.tabs, className)}>
      {restaurantIds.map((restaurantId) => <li className={styles.tabItem}>
        <Tab onClick={() => onRestaurantSelect(restaurantId)} id={restaurantId} />
      </li>)}
    </ul>
  )
}