import { Review } from "../review/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={classNames(styles.reviews, className)}>
      <span className={styles.title}>Reviews</span>
      <ul>
        {reviewIds.map(reviewId => (
          <li>
            <Review id={reviewId} className={styles.review} />
          </li>
        ))}
      </ul>
    </div>
  )
}