import { Layout } from "../../components/layout/component";
import { TabsContainer } from "../../components/tabs/container";
import { RestaurantContainer } from "../../components/restaurant/container";

export const RestaurantsPage = ({ activeRestaurantId, setActiveRestaurantId }) => {
  return (
    <Layout>
      <TabsContainer onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </Layout>
  )
}