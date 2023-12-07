import { Layout } from "../../components/layout/component";
import { Tabs } from "../../components/tabs/component";
import { useState } from "react";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <Layout>
      <Tabs onRestaurantSelect={(restaurantId) => setSelectedRestaurant(restaurantId)} />
      <Restaurant selectedRestaurant={selectedRestaurant} />
    </Layout>
  )
}