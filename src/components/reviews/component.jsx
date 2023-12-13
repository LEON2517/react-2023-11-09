import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={classNames(styles.reviews, className)}>
      <span className={styles.title}>Reviews</span>
      <ul>
        {reviewIds.map(reviewId => (
          <li>
            <ReviewContainer reviewId={reviewId} className={styles.review} />
          </li>
        ))}
      </ul>
    </div>
  )
}