import { Layout } from "../../components/layout/component";
import { Tabs } from "../../components/tabs/component";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = ({ restaurants, activeRestaurantId, setActiveRestaurantId }) => {

  const restaurant = restaurants.find(({ id }) => id === activeRestaurantId)

  return (
    <Layout>
      <Tabs
        restaurants={restaurants}
        onRestaurantSelect={(restaurantId) => setActiveRestaurantId(restaurantId)}
      />
      <Restaurant restaurant={restaurant} restaurantId={activeRestaurantId} />
    </Layout>
  )
}