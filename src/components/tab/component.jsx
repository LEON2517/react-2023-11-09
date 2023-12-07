import styles from "./styles.module.scss";
import classNames from "classnames";
import { selectRestaurantBiId } from "../../redux/features/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const Tab = ({ onClick, className, id }) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, id));

  if (!restaurant) return null;

  return (
    <div onClick={onClick} className={classNames(styles.tab, className)}>
      {restaurant.name}
    </div>
  )
}