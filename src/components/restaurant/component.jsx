import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";
import { selectRestaurantBiId } from "../../redux/features/entities/restaurant/selectors";

export const Restaurant = ({ className, selectedRestaurant }) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, selectedRestaurant))

  if (!restaurant) return null;

  return (
    <div className={classNames(styles.restaurant, className)}>
      <div className={styles.box}>
        <h3>{restaurant.name}</h3>
      </div>
      <div className={styles.content}>
        <Menu dishIds={restaurant.menu} />
        <Reviews reviewIds={restaurant.reviews} />
        <ReviewForm />
      </div>
    </div>
  )
}