import { Layout } from "../../components/layout/component";
import { useEffect, useState } from "react";
import { TabsContainer } from "../../components/tabs/container";
import { RestaurantContainer } from "../../components/restaurant/container";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/features/entities/restaurant/thunks/get-restaurants";
import {getDishes} from "../../redux/features/entities/dish/thunks/get-dishes";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants())
  }, [])

  return (
    <Layout>
      <TabsContainer onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </Layout>
  )
}