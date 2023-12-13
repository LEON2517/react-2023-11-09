import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantBiId, selectRestaurantLoadingStatus} from "../../redux/entities/restaurant/selectors";
import { Restaurant } from "./component";
import {useEffect} from "react";
import {getRestaurants} from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUSES } from "../../constants/request-statuses";

export const RestaurantContainer = ({ restaurantId, ...rest}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants())
  }, [])

  const loadingStatus = useSelector(selectRestaurantLoadingStatus)

  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId))
  if (!restaurant) return null;

  return <Restaurant {...rest} restaurant={restaurant} restaurantId={restaurantId} />
}