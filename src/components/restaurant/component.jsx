import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Restaurant = ({ className, restaurant, restaurantId }) => {
  if (!restaurant) return null;

  return (
    <div className={classNames(styles.restaurant, className)}>
      <div className={styles.box}>
        <h3>{restaurant.name}</h3>
      </div>
      <div className={styles.content}>
        <MenuContainer restaurantId={restaurantId} />
        <ReviewsContainer restaurantId={restaurantId} />
        <ReviewForm restaurantId={restaurantId} />
      </div>
    </div>
  )
}