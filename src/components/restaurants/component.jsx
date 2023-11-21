import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)
}
