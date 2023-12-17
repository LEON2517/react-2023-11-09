import styles from "./styles.module.scss";
import classNames from "classnames";
import { Tab } from "../tab/component";
import {useNavigate, useSearchParams} from "react-router-dom";

export const Tabs = ({ className, onRestaurantSelect, restaurants }) => {


  const [_, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/restaurants/${id}`)
    setSearchParams({ selectedRestaurant: id });
    /*    onRestaurantSelect(id);*/

  }

  return (
    <ul className={classNames(styles.tabs, className)}>
      {restaurants.map((restaurant) => <li className={styles.tabItem}>
        <Tab
          onClick={() => handleClick(restaurant.id)}
          restaurant={restaurant}
        />
      </li>)}
    </ul>
  )
}