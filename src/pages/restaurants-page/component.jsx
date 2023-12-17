import { Tabs } from "../../components/tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import {Outlet, useSearchParams} from "react-router-dom";

export const RestaurantsPage = ({ restaurants }) => {

  const [searchParams] = useSearchParams();
  const selectedRestaurant = searchParams.get('selectedRestaurant')
  console.log('selectedRestaurant', selectedRestaurant)


  const restaurant = restaurants.find(({ id }) => id === selectedRestaurant)

  return (
    <>
      <Tabs
        restaurants={restaurants}
      />
      <Outlet />
      <Restaurant restaurant={restaurant} restaurantId={selectedRestaurant} />
    </>
  )
}