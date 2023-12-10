import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { selectUserById } from "../../redux/features/entities/user/selectors";

export const ReviewContainer = ({ reviewId, ...rest}) => {
  const review = useSelector(state => selectReviewById(state, reviewId))

  if (!review) return null;

  return <Review
    {...rest}
    review={review}
  />
}