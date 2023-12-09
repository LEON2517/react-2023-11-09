import {useSelector} from "react-redux";
import {selectRestaurantBiId} from "../../redux/features/entities/restaurant/selectors";
import { Tab } from "./component";

export const TabContainer = ({restaurantId, ...rest}) => {
  const restaurant = useSelector(state => selectRestaurantBiId(state, restaurantId));
  if (!restaurant) return null;
  return <Tab {...rest} restaurant={restaurant} />
}