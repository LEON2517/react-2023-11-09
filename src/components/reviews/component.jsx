import { Review } from "../review/component";

export const Reviews = ({ reviews }) => <ul>
  {reviews.map(review => (
    <li>
      <Review review={review} />
    </li>
  ))}
</ul>