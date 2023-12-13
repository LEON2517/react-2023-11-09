import { useGetReviewsQuery } from "../../redux/services/api";
import {Reviews} from "./component";

export const ReviewsContainer = ({ restaurantId }) => {

  const { data, isFetching } = useGetReviewsQuery(restaurantId);
  if (isFetching) return "Loading...";

  return <Reviews reviews={data} />
}