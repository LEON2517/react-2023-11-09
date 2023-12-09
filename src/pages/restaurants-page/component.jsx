import { Layout } from "../../components/layout/component";
import { useState } from "react";
import { TabsContainer } from "../../components/tabs/container";
import { RestaurantContainer } from "../../components/restaurant/container";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  return (
    <Layout>
      <TabsContainer onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </Layout>
  )
}