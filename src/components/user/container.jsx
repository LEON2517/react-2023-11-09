import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { selectUserById } from "../../redux/features/entities/user/selectors";

export const ReviewContainer = ({ reviewId, ...rest}) => {
  const review = useSelector(state => selectReviewById(state, reviewId))
  const user = useSelector(state => selectUserById(state, review.userId))

  if (!review || !user) return null;

  return <Review
    {...rest}
    review={review}
    user={user}
  />
}