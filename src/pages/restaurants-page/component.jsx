import { Tabs } from "../../components/tabs/component";
import { Restaurants } from "../../components/restaurants/component";
import { useState } from "react";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = restaurants.filter(restaurant => restaurant.id === selectedRestaurant);

  if (!restaurants.length) return null;

  return (
    <div>
      <Tabs
        restaurants={restaurants}
        onRestaurantSelect={(restaurantId) => setSelectedRestaurant(restaurantId)}
      />
      <Restaurants restaurants={filteredRestaurants} />
    </div>
  )
}