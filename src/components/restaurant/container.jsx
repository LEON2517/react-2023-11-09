import {useDispatch, useSelector} from "react-redux";
import { selectRestaurantBiId } from "../../redux/features/entities/restaurant/selectors";
import { Restaurant } from "./component";
import {useEffect} from "react";
import { getDishes } from "../../redux/features/entities/dish/thunks/get-dishes";
import { getReviews } from "../../redux/features/entities/review/thunks/get-reviews";

export const RestaurantContainer = ({ restaurantId, ...rest}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId))
  }, [restaurantId])

  useEffect(() => {
    dispatch(getReviews(restaurantId))
  }, [restaurantId])

  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId))
  if (!restaurant) return null;

  return <Restaurant {...rest} restaurant={restaurant} />
}