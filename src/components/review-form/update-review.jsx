import {useChangeReviewsMutation} from "../../redux/services/api";
import { ReviewForm } from "./component";

export const ReviewFormUpdateContainer = ({ reviewId, ...rest }) => {
  const [changeReviews] = useChangeReviewsMutation();
  return <ReviewForm id={reviewId} onClick={changeReviews} {...rest} />
}