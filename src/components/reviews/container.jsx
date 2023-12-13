import { useDispatch } from "react-redux";
import { Reviews } from "./component";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { useEffect } from "react";


export const ReviewsContainer = ({ restaurantId, ...rest}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!restaurantId) return null;
    dispatch(getReviews(restaurantId))
  }, [restaurantId])

  return <Reviews {...rest} />
}