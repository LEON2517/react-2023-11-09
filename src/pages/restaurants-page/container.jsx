import { RestaurantsPage } from "./component";
import {useState} from "react";
import {useGetRestaurantsQuery} from "../../redux/services/api";

export const RestaurantsPageContainer = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const { data, isLoading } = useGetRestaurantsQuery();

    if (isLoading) return "Loading..."

  return <RestaurantsPage
    restaurants={data}
    activeRestaurantId={activeRestaurantId}
    setActiveRestaurantId={setActiveRestaurantId}
  />
}