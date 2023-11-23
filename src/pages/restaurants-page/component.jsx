import { Tabs } from "../../components/tabs/component";
import { useState } from "react";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = restaurants.find(restaurant => restaurant.id === selectedRestaurant);

  if (!restaurants.length) return null;

  return (
    <div>
      <Tabs
        restaurants={restaurants}
        onRestaurantSelect={(restaurantId) => setSelectedRestaurant(restaurantId)}
      />
      <Restaurant restaurant={filteredRestaurants} />
    </div>
  )
}