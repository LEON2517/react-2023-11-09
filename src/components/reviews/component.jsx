import { Review } from "../review/component";

export const Reviews = ({ reviews }) => <ul>
  {reviews.map(review =>
    <Review review={review} />)
  }
</ul>