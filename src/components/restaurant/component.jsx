import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;
  return (
    <div>
      <div className={styles.titleContainer}>
        <h3>{restaurant.name}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Menu menu={restaurant.menu} className={styles.marginTop} />
        </div>
        <div className={styles.item}>
          <Reviews reviews={restaurant.reviews} className={styles.marginTop} />
          <ReviewForm className={styles.marginTop} />
        </div>
      </div>
    </div>
  )
}