import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Restaurant = ({ restaurant, className }) => {
  if (!restaurant) return null;
  return (
    <div className={classNames(styles.restaurant, className)}>
      <div className={styles.box}>
        <h3>{restaurant.name}</h3>
      </div>
      <div className={styles.content}>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
        <ReviewForm />
      </div>
    </div>
  )
}