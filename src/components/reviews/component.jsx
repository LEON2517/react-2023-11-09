import { Review } from "../review/component";
import styles from "./styles.module.scss";

export const Reviews = ({ reviews, className }) => <div>
  <span className={styles.title}>Отзывы</span>
  <ul className={className}>
    {reviews.map(review => (
      <li>
        <Review review={review} />
      </li>
    ))}
  </ul>
</div>