import { Review } from "../review/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Reviews = ({ reviews, className }) => <div className={classNames(styles.reviews, className)}>
  <span className={styles.title}>Reviews</span>
  <ul>
    {reviews.map(review => (
      <li>
        <Review review={review} className={styles.review} />
      </li>
    ))}
  </ul>
</div>