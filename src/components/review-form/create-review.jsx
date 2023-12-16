import {useCreateReviewsMutation} from "../../redux/services/api";
import { ReviewForm } from "./component";

export const ReviewFormCreateContainer = ({ restaurantId, ...rest }) => {
  const [createReviews] = useCreateReviewsMutation();
  console.log('useCreateReviewsMutation()', useCreateReviewsMutation())
  return <ReviewForm id={restaurantId} onClick={createReviews} {...rest} />
}