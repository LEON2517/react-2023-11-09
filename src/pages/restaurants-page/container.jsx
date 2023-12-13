import { RestaurantsPage } from "./component";
import {useState} from "react";
import {useGetRestaurantsQuery} from "../../redux/services/api";

export const RestaurantsPageContainer = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const { data, isLoading, isFetching } = useGetRestaurantsQuery();
  console.log('data', data)

    if (isLoading) return "Loading..."

  return <RestaurantsPage
    restaurants={data}
    activeRestaurantId={activeRestaurantId}
    setActiveRestaurantId={setActiveRestaurantId}
  />
}