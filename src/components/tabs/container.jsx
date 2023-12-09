import { Tabs } from "./component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors";

export const TabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  if (!restaurantIds) return null;
  return <Tabs {...props} restaurantIds={restaurantIds} />
}