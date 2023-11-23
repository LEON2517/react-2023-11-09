import { Review } from "../review/component";

export const Reviews = ({ reviews }) => <div>
  <span>Отзывы</span>
  <ul>
    {reviews.map(review => (
      <li>
        <Review review={review} />
      </li>
    ))}
  </ul>
</div>