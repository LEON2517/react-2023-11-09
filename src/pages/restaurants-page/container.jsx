import { RestaurantsPage } from "./component";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectRestaurantLoadingStatus} from "../../redux/entities/restaurant/selectors";

export const RestaurantsPageContainer = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const loadingStatus = useSelector(selectRestaurantLoadingStatus)

  if (loadingStatus === 'pending') return "Loading..."

  return <RestaurantsPage activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId}/>
}