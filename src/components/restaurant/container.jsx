import { useSelector } from "react-redux";
import { selectRestaurantBiId } from "../../redux/features/entities/restaurant/selectors";
import { Restaurant } from "./component";

export const RestaurantContainer = ({ restaurantId, ...rest}) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId))
  if (!restaurant) return null;
  return <Restaurant {...rest} restaurant={restaurant} />
}